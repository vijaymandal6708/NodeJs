const express = require("express");
const route = express.Router();
const StuController=require("../controllers/stuController");

route.post("/save", StuController.dataSave);


module.exports=route;