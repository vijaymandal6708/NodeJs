const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");
const mongoose = require("mongoose");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/newstudent").then(() => console.log("connected to db"));


app.use(cors());

app.get("/", (req,res)=>{
    res.send("This is my node app");
});

app.use("/students", studentRoute);

app.listen(3002, ()=>{
    console.log("Server is running on port 3002");
});