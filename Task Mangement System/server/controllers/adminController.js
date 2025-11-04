const AdminModel = require("../models/adminModel");
const EmpModel = require("../models/empModel");
const UserPassword = require("../middlewares/randomPassword");
const emailSend = require("../middlewares/empMailSen");

// 🟢 Admin Login Controller
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        msg: "Email and Password are required",
      });
    }

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, msg: "Invalid Email ID" });
    }

    if (admin.password !== password) {
      return res.status(401).json({ success: false, msg: "Invalid Password" });
    }

    return res.status(200).json({
      success: true,
      msg: "Successfully Logged In",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Server Error. Please try again later.",
    });
  }
};

// 🟣 Create User Controller (Full Email + DB integration)
const userCreate = async (req, res) => {
  try {
    const { empname, empemail, designation } = req.body;

    if (!empname || !empemail || !designation) {
      return res.status(400).json({
        success: false,
        msg: "All fields (empname, empemail, designation) are required ",
      });
    }

    // Generate random password
    const emppassword = UserPassword.myPassword();

    // Create employee record in database
    const newEmployee = await EmpModel.create({
      name: empname,
      email: empemail,
      designation,
      password: emppassword,
    });

    // Send credentials email
    const mailSent = await emailSend.userMailsender(empname, empemail, emppassword);

    if (!mailSent) {
      return res.status(500).json({
        success: false,
        msg: "User created but email could not be sent",
      });
    }

    // 4️⃣ Success response
    return res.status(201).json({
      success: true,
      msg: "User successfully created and credentials sent via email",
      employee: newEmployee,
    });
  } catch (error) {
    console.error(" User Creation Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Failed to create user.",
    });
  }
};

module.exports = {
  adminLogin,
  userCreate,
};
