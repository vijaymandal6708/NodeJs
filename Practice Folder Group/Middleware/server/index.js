const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());

app.use("/home",(req,res)=>{
   let name = true;
   if(name){
    res.status(200).send("homepage with no error");
   }
   else{
    res.status(401).send("homepage with error occur");
   }
});

app.use("/button5",(req,res,next)=>{
   throw new Error("Button5 wrong");
   next();
});

app.use("/button6",(req,res)=>{
   throw new Error("Button6 wrong");
   next();
});

app.use(errorHandler);


app.use("/",(req,res,next)=>{
   console.log("hello this is app level middleware");
   next();
});

app.use("/about",(req,res,next)=>{
   console.log("hello this is path level middleware 1");
   next();
});

app.use("/service",(req,res,next)=>{
   console.log("hello this is path level middleware 1");
   next();
}, (req,res)=>{
    console.log("hello this is path level middleware 2");
});




app.listen(9001, ()=>{
    console.log("server started on 9001!");
});