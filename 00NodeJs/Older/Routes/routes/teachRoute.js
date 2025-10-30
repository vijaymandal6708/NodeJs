const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
    res.send("teachers home page");
})

route.get("/subject", (req, res)=>{
    res.send("teachers subject page");
})

route.get("/salary", (req, res)=>{
    res.send("teachers salary page");
})

route.get("/post", (req, res)=>{
    res.send("teachers post page");
})

module.exports = route;