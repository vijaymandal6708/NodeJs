const express = require("express");
const app = express();

const empRoute = require("./routes/empRoute");
const teachRoute = require("./routes/teachRoute");

app.use("/employees", empRoute);
app.use("/teachers", teachRoute);

app.listen(9000, ()=>{
    console.log("Server is running on 9000!");
})