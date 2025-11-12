
const express = require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/login", EmpController.empLogin);
route.get("/showtask", EmpController.showTask);
route.post("/sendreport", EmpController.sendReport);
route.get("/homeshowtask", EmpController.homeShowTask);
route.post("/updatepassword", EmpController.updatePassword);




module.exports = route;
