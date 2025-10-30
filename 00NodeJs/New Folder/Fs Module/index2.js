const fs = require("fs"); 

fs.writeFile("raju.txt", "this is the file of raju again" ,(err)=>{
   if(err) throw err;
   console.log("File Created!!");
})