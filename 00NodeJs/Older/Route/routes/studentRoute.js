const express = require("express");
const route = express.Router();

route.get("/home", (req,res)=>{
    res.send("<h1>welcome to home page</h1>");
})

route.get("/about", (req,res)=>{
    res.send("<h1>welcome to about page</h1>");
})

route.get("/home", (req,res)=>{
    res.send("<h1>welcome to Couses</h1>");
})

route.get("/home", (req,res)=>{
    res.send("<h1>welcome to Total fess</h1>");
})

module.exports = route