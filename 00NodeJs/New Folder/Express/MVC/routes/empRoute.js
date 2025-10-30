const express = require("express");
const route = express.Router();
const empController = require("../controllers/empController");

route.get("/home", empController.homePage);
route.get("/about", empController.aboutPage);
route.get("/department", empController.departmentPage);
route.get("/designation", empController.designationPage);
route.get("/salary", empController.salaryPage);

module.exports = route;