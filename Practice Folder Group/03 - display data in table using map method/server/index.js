const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use("/students", studentRoute);
mongoose.connect("mongodb://localhost:27017/practice");

app.listen(9000, ()=>{
    console.log("Server is running on port 9000!");
});