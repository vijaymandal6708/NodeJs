const fs = require("fs");

fs.rename("ranu.pdf", "raj.pdf", (err)=>{
    if(err) throw err;
    console.log("file renamed");
})