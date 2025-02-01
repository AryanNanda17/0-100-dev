const express = require("express");
const {todo} = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const {createTodo, updateTodo} = require("./types")

// Adding a new Todo
app.post("/Todo", async function(req,res){
    const createPayload = req.body;
    const parsedPaylod = createTodo.safeParse(createPayload);
    if(!parsedPaylod.success){
        res.status(411).json("you send the wrong inputs");
        return;
    }
    await todo.create({
        title: createPayload.title, 
        description: createPayload.description, 
        completed: false
    });
    res.json({
        msg: "Todo Created!"
    });
})

// Getting all the Todos
app.get("/Todos", async function(req,res){
    const todos = await todo.find({});
    res.json(todos);
})

// mark a Todo as completed
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPaylod = updateTodo.safeParse(updatePayload);
    if(!parsedPaylod.success){
        res.status(411).json("you send the wrong inputs");
        return;
    }
    await todo.updateOne(
        {
        _id: updatePayload.id
        }, 
        {
            completed: true
        }
    );
    res.json({
        msg: "Todo marked as completed"
    });
})

app.listen(3000);