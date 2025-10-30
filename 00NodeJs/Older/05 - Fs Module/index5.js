const fs  = require("fs");

fs.writeFile("monu.txt", "we learn js", (err)=>{
    if(err) throw err;
    console.log("file created");
})