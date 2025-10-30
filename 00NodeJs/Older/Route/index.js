const express = require("express");
const app = express();
const stuRoute = require("./routes/studentRoute");

app.use("/students", stuRoute);

app.listen(8000, ()=>{
    console.log("app run on 8000");
})