// server.js
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// ---------------- SESSION MIDDLEWARE ----------------
app.use(
  session({
    secret: "vijay_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    },
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/sessionAuthDemo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Model
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// ---------------- REGISTER ----------------
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

// ---------------- LOGIN (Session Generate) ----------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Invalid password" });

  // Create session
  req.session.userId = user._id;

  res.json({ message: "Login success!" });
});

// ---------------- AUTH MIDDLEWARE ----------------
function auth(req, res, next) {
  if (!req.session.userId)
    return res.status(401).json({ error: "Unauthorized" });

  next();
}

// ---------------- PROTECTED ROUTE ----------------
app.get("/dashboard", auth, async (req, res) => {
  const user = await User.findById(req.session.userId).select("-password");
  res.json({ user });
});

// ---------------- LOGOUT ----------------
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

app.listen(9000, () => console.log("Server running on port 9000"));
