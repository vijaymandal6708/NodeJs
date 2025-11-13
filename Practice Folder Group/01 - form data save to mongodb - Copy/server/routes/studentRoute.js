const express = require("express");
const route = express.Router();
const User = require("../models/userModel");
const Profile = require("../models/profileModel");

route.get("/", (req,res)=>{
    res.send("this is student page");
});

route.post("/insert", async(req,res)=>{
    const { uname, email, fname, lname} = req.body;
    console.log(req.body);

    const user = await User.create({
        uname: uname,
        email:email
    });

    const profile = await Profile.create({
        fname:fname,
        lname:lname,
        userid:user._id 
    });

    res.send("this is student page");
});

route.get("/display", async(req,res)=>{
    const profile1 = await Profile.find().populate("userid");
    res.send(profile1);
});

module.exports = route;