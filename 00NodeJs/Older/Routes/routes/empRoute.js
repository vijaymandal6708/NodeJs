const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("employee home page");
})

route.get("/department", (req, res)=>{
    res.send("employee department page");
})

route.get("/salary", (req, res)=>{
    res.send("employee salary page");
})

route.get("/post", (req, res)=>{
    res.send("employee post page");
})

module.exports = route;