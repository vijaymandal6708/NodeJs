const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/home", studentController.homePage);
route.post("/home", studentController.datasaveFunc);
route.get("/display", studentController.displayPage);


module.exports = route;