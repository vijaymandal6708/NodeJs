const fs = require("fs");

fs.mkdir("New Directory", (err)=>{
    if(err) throw err;
    console.log("New Directory Created!!!")
})