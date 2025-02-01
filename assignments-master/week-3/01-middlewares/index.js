const express = require("express");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require("zod");
// app.use(express());
const emailSchema = z.string().email();
const passSchema = z.string().min(6);

function signJwt(username, password) {
    const f1 = emailSchema.safeParse(username);
    const f2 = passSchema.safeParse(password);
    if(!f1.success || !f2.success){
        return null;
    }
    const signature = jwt.sign({username}, jwtPassword);
    return signature;
}
console.log(signJwt("ARYAN@gmail.com", "Aryan@17"));