const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    rollno:Number,
    city:String,
    fees:Number
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;