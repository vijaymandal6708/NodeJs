
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String,
    duration: Number,
    priority: String,
    empid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "emp"
    },
    taskstatus: {
        type: String,
        default: "Not Started"
    },
    completionday: Number,
    submitstatus: Boolean
});


module.exports = mongoose.model("task", taskSchema);