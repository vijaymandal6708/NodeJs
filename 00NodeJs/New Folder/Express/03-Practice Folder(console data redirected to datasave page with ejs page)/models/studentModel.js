const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    rollno:Number
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;