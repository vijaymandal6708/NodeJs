const fs = require("fs");

fs.appendFile("raju.txt", "hello this is raju", (err)=>{
   if(err) throw err;
   console.log("file appended");
})