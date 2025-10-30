const express = require("express");
const app = express();

const empRoute1 = require("./routes/empRoute");
const studentRoute1 = require("./routes/studentRoute")

app.use("/emp", empRoute1);
app.use("/students", studentRoute1);

app.set("view engine", "ejs")


app.listen(8500, ()=>{
    console.log("Server is started on port 8500!!");
})