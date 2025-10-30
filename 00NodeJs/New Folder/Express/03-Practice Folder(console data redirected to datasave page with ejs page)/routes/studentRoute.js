const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/home", studentController.homePage);
route.post("/datasave", studentController.datasavePage);


module.exports = route;