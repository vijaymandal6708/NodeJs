const express = require("express");
const route = express.Router();
const studentController = require("../controller/studentController")

route.get("/home", studentController.homePage);

route.get("/about", studentController.aboutPage);

module.exports = route;
