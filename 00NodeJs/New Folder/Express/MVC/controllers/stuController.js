const stuModel = require("../models/studentModel");

// Render Home Page
const homePage = (req, res) => {
    res.render("stuhome");
}

// Render About Page
const aboutPage = (req, res) => {
    res.render("stuabout");
}

// Render Services Page
const servicesPage = (req, res) => {
    res.render("stuservices");
}

// Render Contact Page
const contactPage = (req, res) => {
    res.render("stucontact");
}

// Render Course Page
const coursePage = (req, res) => {
    res.render("stucourse");
}

// Save student data
const dataSave = async (req, res) => {
    try {
        console.log("Data received:", req.body);
        // Convert numeric fields to Number
        const newStudent = {
            rollno: Number(req.body.rollno),
            name: req.body.name,
            city: req.body.city,
            fees: Number(req.body.fees)
        };
        await stuModel.create(newStudent);
        res.send("<h1>Student data saved successfully</h1>");
    } catch (error) {
        console.error("Error saving student:", error);
        res.status(500).send("Error saving student data");
    }
}

// Display all students
const displayPage = async (req, res) => {
    try {
        const students = await stuModel.find();
        res.render("studisplay", { Stu: students });
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).send("Error fetching student data");
    }
}

// Show empty search form
const searchPage = (req, res) => {
    res.render("stusearch", { Stu: [] });
}

// Search student by roll number
const stuPage = async (req, res) => {
    try {
        const { rollno } = req.body;

        // Debug: log received rollno and type
        console.log("rollno from form:", rollno, typeof rollno);

        // Convert to Number before querying
        const students = await stuModel.find({ rollno: Number(rollno) });
        console.log("Query result:", students);

        res.render("stusearch", { Stu: students });
    } catch (error) {
        console.error("Error searching student:", error);
        res.status(500).send("Error searching student data");
    }
}

module.exports = {
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    coursePage,
    dataSave,
    displayPage,
    searchPage,
    stuPage
}
