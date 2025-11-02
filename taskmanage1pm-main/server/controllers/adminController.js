const AdminModel = require("../models/adminModel");
const UserPassword= require("../middlewares/randomPassword");
const adminLogin=async(req, res)=>{
    const { email, password } = req.body;
    try {
         const Admin = await AdminModel.findOne({email:email});
        
         if (!Admin)
         {
            res.status(401).send({msg:"Invalid Email ID"});
         }
         
         if (Admin.password!=password){
             res.status(401).send({msg:"Invalid Password"});
         }

         res.status(200).send({Admin:Admin,msg:"Succesfully Login"});

    } catch (error) {
         console.log(error);
    }
}


const userCreate=async(req, res)=>{
    const {empname,empemail,designation} = req.body;
    console.log(UserPassword.myPassword());
    res.send("OKK");

}

module.exports ={
    adminLogin,
    userCreate
}