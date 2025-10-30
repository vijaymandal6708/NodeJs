const Student = require("../models/StudentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu=await Student.create({rollno,name,city,fees});
    res.send("data saved succesfully");
    
}
const getAllData=async(req,res)=>{
    const stu=await Student.find(); 
    res.send(stu);
}
const searchData=async(req,res)=>{
    const {rollno}=req.body;
    const stu=await Student.find({rollno:rollno}); 
    res.send(stu);
}
const deleteData=async(req,res)=>{
    const {id}=req.params;
    const stu=await Student.findByIdAndDelete(id);
    res.send({msg:"Data deleted successfully"});
}
const getStudent=async(req,res)=>{
    const {id}=req.params;
    const stu=await Student.findById(id);
    res.send(stu);
    
}
const updateStudent=async(req,res)=>{
    const {_id,rollno,name,city,fees}=req.body;
    const stu=await Student.findByIdAndUpdate(_id,{rollno,name,city,fees});
    res.send({msg:"Data updated successfully"});
}







module.exports={createStudent,getAllData,searchData,deleteData,getStudent,updateStudent};