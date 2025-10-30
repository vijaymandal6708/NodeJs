const Student = require("../models/studentModel");

const homePage = (req, res) => {
    res.render("homepage");
};

const datasavePage = async (req, res) => {
    console.log("Data received:", req.body);
    const student = new Student(req.body);
    await student.save();
    res.render("datasave", { data: req.body });
    
};

module.exports = {
    homePage,
    datasavePage,
};
