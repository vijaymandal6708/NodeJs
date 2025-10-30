const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to my website</h1>");
});

app.get("/home", (req, res)=>{
    res.send("<h1>Welcome to homepage</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>Welcome to About page</h1>");
});

app.get("/contact us", (req, res)=>{
    res.send("<h1>Welcome to Contact us page</h1>");
});


app.listen(3000, ()=>{
    console.log("sever started");
});