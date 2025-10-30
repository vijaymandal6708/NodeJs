const express = require("express");
const route = express.Router();
const Student = require("../models/studentModel");

route.get("/", (req,res)=>{
    res.send("this is student page");
});

route.post("/insert", async(req,res)=>{
    console.log(req.body);
    const insertstudent = await Student.create(req.body);
    res.send("this is student page");
});

route.get("/display", async(req,res)=>{
    const displaystudent = await Student.find();
    res.send(displaystudent);
});

route.post("/search", async(req,res)=>{
    const {rollno}= req.body;
    const searchstudent = await Student.find({rollno:rollno});
    res.send(searchstudent);
});

route.get("/edit", async(req,res)=>{
    const editstudent = await Student.find();
    res.send(editstudent);
});

route.get("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    const deletestudent = await Student.findByIdAndDelete(id);
    res.send(deletestudent);
});

route.get("/update/:id", async(req,res)=>{
    const {id} = req.params;
    const editstudent = await Student.findById(id);
    res.send(editstudent);
});

route.post("/finalupdate", async(req,res)=>{
    const { _id, ...updateStudent } = req.body;
    const finalstudentupdate=await Student.findByIdAndUpdate(_id, updateStudent);
    res.send({msg:"data updated"});
})

module.exports = route;