// server.js
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/jwtCookieAuth")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);


app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "User already exists" });

  const hash = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hash });

  res.json({ message: "User registered!" });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user._id }, "vijay123", { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });

  res.json({ message: "Login success!" });
});

function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const data = jwt.verify(token, "vijay123");
    req.userId = data.id;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid Token" });
  }
}


app.get("/dashboard", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json({ user });
});


app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});


app.listen(9000, () => console.log("Server running on port 9000"));
