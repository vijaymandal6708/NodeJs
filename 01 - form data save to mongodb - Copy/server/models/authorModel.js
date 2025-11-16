const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    authorname:String,
    email:String,
    bookid:{type:mongoose.Schema.Types.ObjectId, ref:"book"}
});

module.exports = mongoose.model("author", authorSchema);