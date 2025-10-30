const path = require("path");
 
const BSname = path.basename("users/images/photo/index.php");
console.log(BSname);
const Myname = path.basename("users/images/photo/index.php", ".php");
console.log(Myname);