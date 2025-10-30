const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/home", studentController.homePage);
route.post("/home", studentController.datasaveFunc);
route.get("/display", studentController.displayPage);
route.get("/search", studentController.searchPage);
route.post("/search", studentController.studentsearchresultFunc);


module.exports = route;