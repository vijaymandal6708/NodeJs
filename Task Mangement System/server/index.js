const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mytaskmanagement").then(()=>{
     console.log("DB Succesfully Connected!");
});
app.use(express.json());
app.use(cors());

app.post("/home", (req,res)=>{
    console.log(req.body);
    res.send("this is my homepage");
})

app.listen(9002, ()=>{
    console.log("server is started on port 9002!");
});