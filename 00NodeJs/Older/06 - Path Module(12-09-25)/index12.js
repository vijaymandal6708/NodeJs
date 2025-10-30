const path = require("path");

console.log(path.resolve('file.txt'));

console.log(path.resolve('/users', 'docs', 'third'));

console.log(path.resolve('/first', '/second', 'third'));

console.log(path.resolve(__dirname, '/second', 'third'));