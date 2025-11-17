const express = require("express");
const route = express.Router();
const StuController = require("../controllers/stuController")

route.post("/registration", StuController.stuRegistration);
route.post("/login", StuController.stuLogin);


module.exports= route;