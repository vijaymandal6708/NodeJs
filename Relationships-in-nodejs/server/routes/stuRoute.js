const express = require("express");
const route = express.Router();
const StuController=require("../controllers/stuController");

route.post("/save", StuController.dataSave);
route.get("/display", StuController.dataDisplay);


module.exports=route;