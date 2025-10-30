const express = require("express");
const app = express();
const stuRoute = require("./routes/stuRoute")

app.use("/students", stuRoute)

app.listen(9001, ()=>{
    console.log("run on 9001")
})