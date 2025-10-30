const express = require("express");
const app = express();
const cors=require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute=require("./routes/StudentRoute");
require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/student",stuRoute);
mongoose.connect(process.env.DBCONNECTION).then(() => console.log("connected to db"));

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server running on port 3001");
})