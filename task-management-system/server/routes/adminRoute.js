const express = require("express");
const route = express.Router();
const AdminController = require("../controllers/adminController");

route.post("/login", AdminController.adminLogin);
route.post("/usercreate", AdminController.userCreate);
route.get("/empdisplay", AdminController.empDisplay);
route.get("/taskdisplay", AdminController.taskDisplay);
route.post("/tasksave", AdminController.taskSave);
route.get("/viewreport", AdminController.viewReport);
route.put("/reassigntask", AdminController.reassignTask);
route.post("/updatepassword", AdminController.updateAdminPassword);







module.exports = route