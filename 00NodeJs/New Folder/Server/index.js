const http = require("http");
const College = require("./College")

http.createServer((req, res)=>{
    res.write("<h1>Hello Node!!!</h1>");
    res.write(College.myCollege());
    res.write(College.myFees());
    res.end("Server end successfully")
}).listen(9000,()=>{
    console.log("server started");
})