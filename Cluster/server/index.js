const express = require("express");
const cors = require("cors");
const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
    console.log("Master is running");
    const numCPUs = os.cpus().length;
    console.log("Total CPUs:", numCPUs);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
        cluster.fork();
    });

} else {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        res.send(`Hello from Worker ${process.pid}`);
    });

    app.listen(9000, () => {
        console.log(`Worker ${process.pid} is running on port 9000`);
    });
}
