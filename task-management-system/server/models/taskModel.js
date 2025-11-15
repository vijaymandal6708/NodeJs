
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String,
    duration: Number,
    priority: String,
    empid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee"
    },
    taskstatus: {
        type: String,
        default: "Not Started"
    },
    completionday: Number,
    submitstatus: Boolean,
    reportdescription: String,
});


module.exports = mongoose.model("task", taskSchema);