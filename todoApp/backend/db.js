const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:3LVeF6G9AmJE9qYZ@cluster0.mc4hu.mongodb.net/todosAPP")

const todoSchema = mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};