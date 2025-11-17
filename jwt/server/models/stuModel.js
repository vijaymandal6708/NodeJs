const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("jwtstudent", stuSchema);