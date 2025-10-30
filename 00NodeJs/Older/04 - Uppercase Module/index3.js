const http = require("http");
const MyClass = require("./cybrom2");
const uc = require("uppercase");
// import of uc module     // first we have installed npm i uppercase 


http.createServer((req,res)=>{
    res.write("<h1>This is node app</h1>");
    res.write(`<h2>${MyClass.MyCollege()}</h2>`);
    res.write(`<h2>${MyClass.MyFees()}</h2>`);
    res.write("<h1>HelLo</h1>");
    res.write("</br>"); 
    res.write(uc("<h1>HelLo</h1>"));   // how to use uc ...
    res.end("Server end successfully");
}).listen(1000, ()=>{
    console.log("server started at port 1000")
})