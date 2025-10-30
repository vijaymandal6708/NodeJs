const path = require("path");

const myext = path.extname("raj.pdf");
console.log(myext);

const myext1 = path.extname("raj.pdf.txt");
console.log(myext1);

const myext2 = path.extname("raj.");
console.log(myext2);

const myext3 = path.extname("raj");
console.log(myext3);

const myext4 = path.extname("raj.");
console.log(myext4);