const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const videoPath = path.join(__dirname, "video.mp4");
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (!range) {
      res.writeHead(416, { "Content-Type": "text/plain" });
      return res.end("Requires Range header");
    }

    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Video Stream</title>
          </head>
          <body>
            <h2>Node.js Video Streaming</h2>
            <video width="600" controls>
              <source src="/video" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </body>
          </html>
        `);
  }
});

server.listen(8000, ()=>{
    console.log("server running on port 8000");
})
