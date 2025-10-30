const fs = require("fs");

fs.appendFile("ranu.pdf", "this is the second data", (err)=>{
    if(err) throw err;
    console.log("file created!!!");
})