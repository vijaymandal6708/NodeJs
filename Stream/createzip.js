const express=require("express");
const app=express();
const fs=require("fs");
const status=require("express-status-monitor");
const zlib=require("zlib");

app.use(express.json());
app.use(status());

app.get("/stream", (req,res)=>{
    const stream=fs.createReadStream("./input.txt", "utf-8");
    stream.on("data", (chunk)=>{
        res.write(chunk);
    })
    stream.on("end",()=>{
        res.end();
    })
})

app.get("/data",(req,res)=>{
    fs.readFile("./input.txt", (err,data)=>{
        if(err) throw err;
        res.end(data);
    })
})

app.get("/createzip", (req,res)=>{
    fs.createReadStream("./input.txt").pipe(
        zlib.createGzip().pipe(fs.createWriteStream("./output.zip"))
    )
    res.send("complete");
})

const port=8000;

app.listen(port,()=>{
    console.log("running on port 8000");
})