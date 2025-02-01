const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwtwebtoken = require("jsonwebtoken");
const {Admin, Course} = require("../db")
const router = Router();
const jwtSecret = "abcd";
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    });
    res.json({msg: "Admin Account created"})
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const value = await Admin.findOne({username:username, password:password});
    if(value){
        const token = jwtwebtoken.sign({username}, jwtSecret);
        res.send(token);
    }
    else{
        res.json({msg: "username doesn't exists"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;