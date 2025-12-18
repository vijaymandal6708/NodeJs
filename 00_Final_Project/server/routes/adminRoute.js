const express = require("express");
const route = express.Router();
const AdminController = require("../controllers/adminController");
route.post("/login", AdminController.adminLogin);
route.post("/add-product", AdminController.addProduct);



module.exports= route;