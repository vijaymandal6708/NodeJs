const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/", studentController.studentPage);

route.get("/home", studentController.studentHomepage);

route.post("/create", studentController.studentCreatepage);




module.exports = route