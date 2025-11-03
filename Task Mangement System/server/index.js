const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AdminRoute = require("./routes/adminRoute");

mongoose.connect(process.env.DBCONN).then(()=>{
     console.log("DB Succesfully Connected!");
});
app.use(express.json());
app.use(cors());

app.use("/admin", AdminRoute);

const Port = process.env.PORT || 8000
app.listen(Port, ()=>{
    console.log("server is started on port 9002!");
});