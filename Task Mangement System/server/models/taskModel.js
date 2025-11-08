
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String,
    duration: Number,
    priority: String,
    empid: String,
    taskstatus: {
        type: String,
        default: "not started"
    },
    completionday: Number,
    submitstatus: Boolean
});


module.exports = mongoose.model("task", taskSchema);