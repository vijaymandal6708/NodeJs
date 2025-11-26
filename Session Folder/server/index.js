import express from "express";
import session from "express-session";
import web from "./routes/web.js";
const app = express();

    app.use(session({
        name:"vijaysession",
        secret:"iamkey",
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:20000}
    }))

    app.use("/", web);

    app.listen(9000, () => {
        console.log(`server is running on port 9000`);
    });
