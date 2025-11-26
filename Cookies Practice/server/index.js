const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// SET COOKIE
app.get("/cookies", (req, res) => {
    res.cookie("name", "Vijay Mandal", {maxAge: 24 * 60 * 60 * 1000});
    res.cookie("name", "Arvind Tiwari", {maxAge: 24 * 60 * 60 * 1000});

    res.send("cookie send!!!");
});

// GET COOKIE
app.get("/getcookie", (req, res) => {
    const { name, age, city, fees } = req.cookies;

    res.json({
        message: "Cookies Get!!!",
        cookies: { name, age, city, fees }
    });
});

app.listen(9000, () => {
    console.log("Server is running on port 9000!");
});
