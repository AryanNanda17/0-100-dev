const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db")
const {Course} = require("../db")
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    });
    res.json({msg: "Admin Account created"})
});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    Course.create({
        title, 
        description, 
        price, 
        imageLink
    });
    res.json({msg: "Course created"})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});

module.exports = router;