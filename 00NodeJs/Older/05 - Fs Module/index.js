const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    fs.readFile("raj.txt", (err, data)=>{
        if(err) throw err;
        res.write(data);
        res.end()
    })
}).listen(9000, ()=>{
    console.log("Server started successfully on port 9000");
})