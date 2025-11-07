const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AdminRoute = require("./routes/employeeRoute");

mongoose.connect(process.env.DBCONN).then(()=>{
     console.log("DB Succesfully Connected!");
});
app.use(express.json());
app.use(cors());

app.use("/admin", AdminRoute);
app.use("/employee", AdminRoute);

const Port = process.env.PORT || 8000
app.listen(Port, ()=>{
    console.log("server is started on port 9002!");
});