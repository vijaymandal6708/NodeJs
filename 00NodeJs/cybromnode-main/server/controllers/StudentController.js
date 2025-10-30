const StudentModel = require("../models/StudentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const Student1=await StudentModel.create({rollno,name,city,fees});
    res.send("data saved succesfully");
    
}

const dataDisplay=async(req,res)=>{
    const Student2= await StudentModel.find();
    console.log("okk");
    res.send(Student2);
}

const dataSearch=async(req,res)=>{
    const {rno} = req.body;
    const Student3 = await StudentModel.find({rollno:rno});
    console.log(Student3);
    res.send(Student3);
}

const updateDisplay = async (req,res)=>{
    const Student4 = await StudentModel.find();
    res.send(Student4);
}

const updateDelete = async (req,res) => {
    const {id} = req.query;
    const Student5 = await StudentModel.findByIdAndDelete(id);
    res.send({msg:"Data Successfully Deleted!"});
}


module.exports={
    createStudent,
    dataDisplay,
    dataSearch,
    updateDisplay,
    updateDelete
};