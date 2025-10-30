const fs = require("fs");

fs.open("raju2.txt", "w", (err, file)=>{
    if(err) throw err;
    console.log("file created through open", file)
})