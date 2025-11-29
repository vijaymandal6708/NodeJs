const fs=require("fs");

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

readableStream.on('error', (err)=>{
    console.log('Read error:', err);
});

writableStream.on('error', (err)=>{
    console.log('Write error.', err);
});

writableStream.on('finish', ()=>{
    console.log('File copy completed!');
})