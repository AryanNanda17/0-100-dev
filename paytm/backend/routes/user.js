const express = require("express");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const userRouter = express.Router();
const zod = require("zod");
const {authMiddleware} = require("../middleware");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
});
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
});

userRouter.post("/signup", async (req, res)=>{
    const {username ,firstName ,lastName ,password} = req.body;
    const value = signupBody.safeParse(req.body);
    if(!value.success){
        return res.status(411).send({
            message: "Incorrect inputs"
        });
    }

    let user_exist = await User.findOne({
        username: username, 
    })

    if(user_exist){
        return res.status(411).json({
            message: "User already exists"
        });
    }
    
    const user = await User.create(req.body);

    const userId = user._id;

    //// Create new account 
    await Account.create({
        userId, 
        balance: 1 + Math.random()*10000
    });
    /// ------------------------

    const token = jwt.sign({userId},JWT_SECRET);
    return res.status(200).json({
        message: "User created successfully",
        token: token
    });
});

userRouter.post("/signin", async (req,res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const body = req.body;
    let user_exist = await User.findOne({
        username: body.username
    });

    if(!user_exist){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }
    const token = jwt.sign({_id: user_exist._id}, JWT_SECRET);
    return res.status(200).json({token});

});

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    
	await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
});

userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    // console.log(filter);
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    // console.log(users);
    res.status(200).json({
        user: users.map(function(user){
            return {
                username: user.username, 
                firstName: user.firstName, 
                lastName: user.lastName, 
                _id: user._id
            }
        })
    });
})

module.exports = userRouter;