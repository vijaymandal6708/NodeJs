const express = require("express");
const app = express();

app.get("./", (req,res)=>{
    res.send("welcome");
})

app.listen(9000,()=>{
    console.log("server run 9000");
})