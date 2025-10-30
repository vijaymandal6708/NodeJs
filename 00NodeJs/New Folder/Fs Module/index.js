const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
   res.write("Hello");
   fs.readFile("raj.txt", (err, data)=>{
    if(err) throw err;
    res.write(data);
    res.end("Server end successfully");
   })
}).listen(9000);