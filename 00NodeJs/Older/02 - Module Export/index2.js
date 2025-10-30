const http = require("http");
const myClass = require("./cybrom");

http.createServer((req,res)=>{
    res.write("welcome to my node app");
    res.write(myClass.myCollege());
    res.end("server end..");
}).listen(9000, ()=>{
    console.log("server run on port 9000");
}) 
