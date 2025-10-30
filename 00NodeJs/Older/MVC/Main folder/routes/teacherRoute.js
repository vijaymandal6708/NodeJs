const express = require("express");
const route = express.Router();
const TeacherController = require("../controller/teacherController");

route.get("/home", TeacherController.homePage);
route.get("/about", TeacherController.aboutPage);

module.exports = route;