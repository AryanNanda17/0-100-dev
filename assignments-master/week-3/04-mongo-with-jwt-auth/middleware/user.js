const jwt = require("jsonwebtoken");
const jwtSecret = require("../config");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const value = jwt.verify(token, jwtSecret);
    if(value.username){
        next();
    }
    else{
        res.status(500).json({msg: "Cannot be authorized"});
    }
}


module.exports = userMiddleware;