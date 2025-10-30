const fs = require("fs");

fs.appendFile("ram.txt", "hello i am ram from ayodhya!", (err)=>{
    if(err) throw err;
    console.log("new file created");
})