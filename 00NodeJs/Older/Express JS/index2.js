const express = require("express");
const app = express();


app.get("./about", (req, res)=>{
    res.send("Home page");
})

app.get("./about", (req, res)=>{
    res.send("About page");
})

app.get("./contact", (req, res)=>{
    res.send("Contactpage");
})


app.listen(8000, ()=>{
    console.log("started");
})