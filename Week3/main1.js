const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("");

const User = mongoose.model('Users', {name: String, email: String, password: String}); // this defines a document structure using schema

app.post("/users", async (req,res) => {
    const username = req.body.username;
    const email = req.body.username;
    const password = req.body.password;

    let user_exist = await User.findOne({name: username});
    if(user_exist){
        return res.status(404).send("Username already exists!");
    } 
    const user = new User({name: username, email: email, password: password}); // creates a new document of type User
    user.save();
    res.send("Users created successfully!");
});

app.listen(3000);