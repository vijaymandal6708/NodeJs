const http = require("http");
const MyModule = require("./newcybrom");

http.createServer((req,res)=>{
    res.write("<h2>" + MyModule.MyDate() + "</h2>");
    res.write(`<h2>${MyModule.MyCity()}</h2>`);
    res.write(`<h2>${MyModule.MyCity()}</h2>`);
    res.end("server end");
}).listen(8500, ()=>{
    console.log("server run on port 8500");
})