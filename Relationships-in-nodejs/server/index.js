const express = require("express");
const app = express();
const cors = require("cors");
const studentRoute=require("./routes/stuRoute")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/students", studentRoute);

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
});