const express = require("express");
const route = express.Router();
const Student = require("../models/studentModel");

route.get("/", (req,res)=>{
    res.send("this is student page");
});

route.post("/insert", async(req,res)=>{
    console.log(req.body);
    const student = await Student.create(req.body);
    res.send("this is student page");
});

module.exports = route;