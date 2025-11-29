const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf8');

const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', ()=>{
    console.log("file copy completed")
});

readableStream.on('error', (err)=>{
    console.log("error reading file:", err);
});

writableStream.on('error', (err)=>{
    console.log("error reading file:", err);
});
