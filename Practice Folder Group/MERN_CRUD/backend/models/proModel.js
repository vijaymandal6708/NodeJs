const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
    pname: String,
    pcolor: String,
    psize: String,
    pprice: Number,
});

module.exports = mongoose.model("myProduct", proSchema);  

