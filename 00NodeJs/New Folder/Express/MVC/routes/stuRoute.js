const express = require("express");
const route = express.Router();
const stuController = require("../controllers/stuController")

route.get("/home", stuController.homePage);
route.get("/about", stuController.aboutPage);
route.get("/services", stuController.servicesPage);
route.get("/course", stuController.coursePage);
route.get("/contact", stuController.contactPage);
route.post("/dataSave", stuController.dataSave);
route.get("/display", stuController.displayPage);
route.get("/search", stuController.searchPage);
route.post("/search", stuController.stuPage);

module.exports = route;