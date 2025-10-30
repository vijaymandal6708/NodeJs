const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("home page");
});

route.get("/about", (req, res)=>{
    res.send("about page");
});


module.exports = route;