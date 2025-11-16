const express = require("express");
const route = express.Router();
const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

route.get("/", (req,res)=>{
    res.send("this is student page");
});

route.post("/insert", async(req,res)=>{
    const { name, email, booktitle, price} = req.body;
    console.log(req.body);

    const author = await AuthorModel.create({
        authorname: name,
        email:email
    });

    const profile = await BookModel.create({
        bookname:booktitle,
        price:price,
        authorid:author._id 
    });

    res.send("Author Created with books");
});

route.get("/display", async(req,res)=>{
    const profile1 = await AuthorModel.find().populate("bookid");
    res.send(profile1);
});

module.exports = route;