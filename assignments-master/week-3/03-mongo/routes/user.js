const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    });
    res.json({msg: "User Account created"})
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