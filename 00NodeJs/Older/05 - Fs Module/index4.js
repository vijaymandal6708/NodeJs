const fs = require("fs");

fs.open("ranu.txt", "w", (err, file)=>{
    if(err) throw err;
    console.log("file created", file);
})