const fs = require("fs");

fs.unlink("raj.pdf", (err)=>{
    if(err) throw err;
    console.log("file deleted");
})