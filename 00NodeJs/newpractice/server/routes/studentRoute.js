const express = require("express");
const route = express.Router();
const Student = require("../models/studentModel");

route.post("/insert", async(req,res)=>{
    const student = await Student.create(req.body);
    console.log("Received data:", req.body);
    res.json(req.body);
});

route.get("/display", async(req,res)=>{
    const displaystudent = await Student.find();
    res.send(displaystudent);
});

route.post("/search", async(req,res)=>{
    const {rollno} = req.body;
    const searchstudent = await Student.find({rollno:rollno});
    res.send(searchstudent);
});

route.post("/delete", async(req,res)=>{
    const {rollno} = req.body;
    const deletestudent = await Student.findByIdAndDelete(id);
    res.send(deletestudentstudent);
});

module.exports = route