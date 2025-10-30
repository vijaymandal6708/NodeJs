const express = require("express");
const route = express.Router();
const studentController = require("../controllers/studentController");

route.get("/home", studentController.homePage);
route.post("/home", studentController.datasaveFunc);
route.get("/display", studentController.displayPage);
route.get("/search", studentController.searchPage);
route.post("/search", studentController.studentsearchresultFunc);
route.get("/delete/:id", studentController.deleteStudent);
route.get("/edit/:id", studentController.editPage);
route.post("/update/:id", studentController.updateStudent);



module.exports = route;