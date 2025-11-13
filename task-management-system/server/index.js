const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AdminRoute = require("./routes/adminRoute");
const EmployeeRoute = require("./routes/employeeRoute");

mongoose.connect(process.env.DBCONN).then(()=>{
     console.log("DB Succesfully Connected!");
});
app.use(express.json());

// app.use(cors({
//     origin: 'https://vijaytaskfrontt.onrender.com',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));

app.use(cors());

app.use("/admin", AdminRoute);
app.use("/employee", EmployeeRoute);

const Port = process.env.PORT || 9002
app.listen(Port, ()=>{
    console.log("server is started on port 9002!");
})