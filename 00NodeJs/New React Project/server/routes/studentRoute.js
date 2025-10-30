const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.post("/home", studentController.datasavePage);


module.exports = route;