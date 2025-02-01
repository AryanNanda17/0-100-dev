const mongoose = require('mongoose');
const moongoose = require('moongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:3LVeF6G9AmJE9qYZ@cluster0.mc4hu.mongodb.net/course_selling_website');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String, 
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    price: Number, 
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}