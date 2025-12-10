const express = require("express");
const route = express.Router();
const StuController=require("../controllers/stuController");

route.post("/save", StuController.dataSave);
route.get("/display", StuController.dataDisplay);
route.get("/display2", StuController.dataDisplay2);
route.post("/booksave", StuController.bookSave);


module.exports=route;