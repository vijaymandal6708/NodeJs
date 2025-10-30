const express = require("express");
const app = express();
const mongoose = require("mongoose");
const stuRoute = require("./routes/stuRoute");
const empRoute = require("./routes/empRoute");
const bodyparser = require("body-parser")

mongoose.connect("mongodb://127.0.0.1:27017/vijaymandal").then(()=>{
    console.log("mongodb conneted");
})

// Body-parser middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.set("view engine", "ejs")

app.use("/students", stuRoute);
app.use("/employees", empRoute);

app.listen(9000, ()=>{
    console.log("Server is running on port 9000");
})