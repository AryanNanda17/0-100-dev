const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require("../db");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    });
    res.json({msg: "User Account created"})
});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const value = await User.findOne({username:username, password:password});
    if(value){
        const token = jwtwebtoken.sign({username}, jwtSecret);
        res.send(token);
    }
    else{
        res.json({msg: "username already exists"});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await User.find({});
    res.json(courses);
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseID = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne(
        {
            username: username
        }, 
       {
            '$push':{
                purchasedCourses: courseID
            }
       } 
    );
    res.send(`Course purchased with id ${courseID}`)
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const courses = await User.findOne({username: username});
    console.log(courses);
    res.json({courses: courses.purchasedCourses});
});


module.exports = router