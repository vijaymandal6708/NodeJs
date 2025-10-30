const express = require("express");
const app = express();

const teacherRoute = require("./routes/teacherRoute");

app.set('view engine', 'ejs');

app.use("/teachers", teacherRoute);

app.listen(8000, ()=>{
    console.log("server started on 8000");
});