const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("this is employees home page");
});

route.get("/department", (req, res)=>{
    res.send("this is employees department page");
});

route.get("/salary", (req, res)=>{
    res.send("this is employees salary page");
});

route.get("/post", (req, res)=>{
    res.send("this is employees post page");
});

module.exports = route;