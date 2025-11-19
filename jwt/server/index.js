const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

mongoose.connect("mongodb://localhost:27017/jwt").then(()=>{
    console.log("mongodb connected")
})

app.use(cors());
app.use(express.json());

app.use("/students", studentRoute);

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload=multer({storage:storage});

app.post("/upload", upload.single("myfile"), (req,res)=>{
    console.log(req.file.filename);
    res.send("File Uploaded!!!");
})

app.listen(9000, ()=>{
    console.log("server is running on port 9000!");
})