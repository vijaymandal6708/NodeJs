const express = require("express");
const app = express();
const cors = require("cors");
const studentRoute=require("./routes/stuRoute");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/latestbookmodel").then(()=>{
    console.log("db connected successfully");
})

app.use("/students", studentRoute);

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
});