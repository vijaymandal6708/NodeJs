const express = require("express");
const route = express.Router();

route.get("/home", (req, res)=>{
   res.send("this is teachers home page");
});

module.exports = route;