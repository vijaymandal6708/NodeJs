const fs = require("fs");

fs.readdir(".", (err, files)=>{
    if(err) throw err;
    console.log("Files in directory are : ", files);
})

const fs = require("fs");

fs.readdir(".", (err, files)=>{
    if(err) throw err;
    console.log("Files in directory are : ", files);
})