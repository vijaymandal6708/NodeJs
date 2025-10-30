const http = require("http");

http.createServer((req,res) => {
    res.write("<h1>Hello this is my first program</h1>");
    res.end();
}).listen(8000, ()=>{
    console.log("server run on port 8000!")
});

// this is my first node js program