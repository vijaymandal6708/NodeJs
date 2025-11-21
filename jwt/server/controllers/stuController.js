const StuModel = require("../models/stuModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer =require("multer");
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const stuRegistration = async (req, res) => {
    console.log(req.body);
    const {name, email, password}=req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await StuModel.create({
        name:name,
        email:email,
        password:passwordHash
    })
    res.send("User Successfully Registered!");
};


const stuLogin=async(req, res)=>{
    console.log(req.body);
    const {email, password}= req.body;
    const user = await StuModel.findOne({email:email});
    if(!user){
        res.status(400).send({msg:"Invalid Email!"});
    }
    const passwordValidate = await bcrypt.compare(password, user.password);
    if(!passwordValidate){
        res.status(400).send({msg:"Invalid Password!"});
    }

    const token = jwt.sign({id:user._id}, "vijay@1234", {expiresIn:"1d"});
    console.log(token);
    res.status(200).send({token:token, msg:"User Successfully Login"});
};

const userAuth =async (req,res)=>{
    console.log(req.header('auth-token'));
    const token = req.header('auth-token');
    const decode=await jwt.verify(token , "vijay@1234");
    console.log(decode.id);

    const user=await StuModel.findById(decode.id).select("-password");
    console.log(user);
    res.send(user);
};

const studentSave =async(req, res)=>{
    };




module.exports = {
    stuRegistration,
    stuLogin,
    userAuth,
    studentSave,
}