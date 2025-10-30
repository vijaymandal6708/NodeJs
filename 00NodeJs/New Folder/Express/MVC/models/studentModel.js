const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    }
});

const stuModel = mongoose.model("Student", studentSchema);

module.exports = stuModel;
