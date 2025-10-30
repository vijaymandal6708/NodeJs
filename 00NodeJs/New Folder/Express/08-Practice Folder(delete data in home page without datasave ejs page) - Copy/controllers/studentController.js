const Student = require("../models/studentModel");

const homePage = (req, res) => {
    res.render("homepage");
};

const datasaveFunc = async (req, res) => {
    console.log("Data received:", req.body);
    const student = new Student(req.body);
    await student.save();
    res.send(`
            <h1>Data saved successfully!</h1>
            <h3>Submitted Details:</h3>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Roll No:</strong> ${req.body.rollno}</p>
            <br>
            <a href="/students/home">Back to Home</a>
        `);
};


const displayPage = async (req, res) => {
    const students = await Student.find();
    res.render("display", { Student: students });
}


const searchPage = (req, res) =>{
    res.render("search", { Student: [] });
}

const studentsearchresultFunc = async (req, res) => {
        const { rollno } = req.body;

        // Debug: log received rollno and type
        console.log("rollno from form:", rollno, typeof rollno);

        // Convert to Number before querying
        const students = await Student.find({ rollno: Number(rollno) });
        console.log("Query result:", students);

        res.render("search", { Student: students });
}


const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    console.log("Deleted student:", req.params.id);
    res.redirect("/students/display"); // refresh the display page
};


const editPage = async (req, res) => {
        const student = await Student.findById(req.params.id);
        res.render("edit", { student });
};


const updateStudent = async (req, res) => {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        console.log("Updated student:", req.params.id);
        res.redirect("/students/display");
};


module.exports = {
    homePage,
    datasaveFunc,
    displayPage,
    searchPage,
    studentsearchresultFunc,
    deleteStudent,
    editPage,
    updateStudent
};
