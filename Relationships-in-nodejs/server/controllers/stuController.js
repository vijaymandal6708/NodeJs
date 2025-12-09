const BookModel = require("../models/BookModel");
const AuthorModel = require("../models/AuthorModel")

const dataSave=async (req,res)=>{
    console.log(req.body);
    const {name,email,booktitle,price} = req.body;
    const author = await AuthorModel.create({
        authorname:name,
        email:email
    });

    const book = await BookModel.create({
        bookname:booktitle,
        price:price,
        authorid: author._id
    })

    await AuthorModel.findByIdAndUpdate(author._id, {$push:{booksid:book._id}});
    
    res.send("okk");
};

const dataDisplay =async (req,res)=>{
    const display = await AuthorModel.find().populate("booksid");
    
    console.log(display);
    res.send(display);
}

module.exports = {
    dataSave,
    dataDisplay,
}