const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const AdminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("Database Succesfully Connected!");
})

// Use body-parser middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/admin", AdminRoute);
app.use("/product", ProductRoute);





app.listen(8000, ()=>{
    console.log("server run on 8000 Port!")
})