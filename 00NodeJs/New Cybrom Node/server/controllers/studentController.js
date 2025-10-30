const Student = require("../models/studentModel");

const studentPage =(req,res)=>{
    res.send("This is student page");
};

const studentHomepage =(req,res)=>{
    res.send("This is student home page");
};

const studentCreatepage = async(req,res)=>{
    console.log(req.body);
    const {name,rollno,city,fees} = req.body;
    const Stu = await Student.create({rollno,name,city,fees});
    res.send("data send successfully");
}


module.exports = {
    studentPage,
    studentHomepage,
    studentCreatepage
}