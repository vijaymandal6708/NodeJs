const fs = require("fs"); 

fs.rename("ram.txt", "sonu.txt", (err)=>{
    if(err) throw err;
    console.log("file renamed");
})