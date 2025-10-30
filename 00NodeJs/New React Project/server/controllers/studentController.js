const Student = require("../models/studentModel");

const homePage = (req, res) => {
    res.render("homepage");
};

const datasavePage = async (req, res) => {
    console.log("Data received:", req.body);
    const student = new Student(req.body);
    await student.save();
    res.send(`
            <h1>Data saved successfully!</h1>
            <h3>Submitted Details:</h3>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Roll No:</strong> ${req.body.rollno}</p> 
        `);
};

module.exports = {
    homePage,
    datasavePage,
};
