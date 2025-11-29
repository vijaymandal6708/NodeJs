

const fs = require("fs");

const WritableStream=fs.createWriteStream('output.txt');

WritableStream.write("Hello, ");
WritableStream.write("World!");
WritableStream.write("\nWriting to a stream is easy!");

WritableStream.end();

WritableStream.on('finish', ()=>{
    console.log('All data has been written to the file.');
});
WritableStream.on('error', (err)=>{
    console.error('Error writing to stream:', err);
})
