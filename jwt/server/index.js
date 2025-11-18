const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt").then(()=>{
    console.log("mongodb connected")
})

app.use(cors());
app.use(express.json());

app.use("/students", studentRoute);

app.listen(9000, ()=>{
    console.log("server is running on port 9000!");
})