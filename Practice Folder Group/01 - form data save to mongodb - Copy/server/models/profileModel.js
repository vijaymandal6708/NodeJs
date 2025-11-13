const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
});

module.exports = mongoose.model("profile", profileSchema);