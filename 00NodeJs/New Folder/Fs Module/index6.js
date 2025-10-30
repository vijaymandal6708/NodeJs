const fs = require("fs");

if(fs.existsSync("raj.txt")){
    console.log("file hai...");
}
else{
    console.log("file nahi hai");
}