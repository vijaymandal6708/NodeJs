const AdminModel = require("../models/adminModel");
const UserPassword = require("../middlewares/randomPassword");
const emailSend = require("../middlewares/empMailSen");
const EmpModel = require("../models/empModel");
const TaskModel = require("../models/taskModel");

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

// 🟢 Create User Controller
const userCreate = async (req, res) => {
  try {
    const { empname, empemail, designation } = req.body;

    if (!empname || !empemail || !designation) {
      return res.status(400).json({
        success: false,
        msg: "All fields (Name, Email, Designation) are required.",
      });
    }

    const existingEmp = await EmpModel.findOne({ email: empemail });
    if (existingEmp) {
      return res.status(409).json({
        success: false,
        msg: "Employee with this email already exists.",
      });
    }

    const emppassword = UserPassword.myPassword();

    const newEmp = await EmpModel.create({
      name: empname,
      email: empemail,
      designation: designation,
      password: emppassword,
    });

    try {
      await emailSend.userMailsender(empname, empemail, emppassword);
    } catch (emailError) {
      console.warn("⚠️ Email sending failed:", emailError.message);
    }

    console.log("📦 Employee Created:", newEmp);

    return res.status(201).json({
      success: true,
      msg: "User created successfully!",
      employee: {
        id: newEmp._id,
        name: newEmp.name,
        email: newEmp.email,
        designation: newEmp.designation,
      },
    });
  } catch (error) {
    console.error("❌ Error Creating User:", error);
    return res.status(500).json({
      success: false,
      msg: "Server Error while creating user. Try again later.",
    });
  }
};

const empDisplay = async (req, res) => {
  const employee = await EmpModel.find();
  res.status(200).send(employee);
};

const taskSave = async (req, res) => {
  const { id, task, duration, priority } = req.body;
  const emptask = await TaskModel.create({
    task: task,
    duration: duration,
    priority: priority,
    empid: id,
    taskstatus: "Not Started",
    completionday: 0,
    submitstatus: false,
  });

  console.log(req.body);

  res.status(201).send("Task Successfully Created!");
};

const taskDisplay = async (req, res) => {
  try {
    const completed = await TaskModel.countDocuments({
      taskstatus: "Completed",
    });
    const partial = await TaskModel.countDocuments({ taskstatus: "Partial" });
    const pending = await TaskModel.countDocuments({ taskstatus: "Pending" });
    const notStarted = await TaskModel.countDocuments({
      taskstatus: "Not Started",
    });

    const employees = await EmpModel.countDocuments();

    res.json({
      tasks: {
        Completed: completed,
        Partial: partial,
        Pending: pending,
        NotStarted: notStarted,
      },
      employees,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};

const viewReport = async (req, res) => {
  try {
    const reports = await TaskModel.find({submitstatus:true}).populate(
      "empid",
      "name email designation"
    );

    return res.status(200).json({
      success: true,
      reports,
    });
  } catch (error) {
    console.error("View Report Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Failed to load reports",
    });
  }
};

module.exports = { adminLogin, userCreate, empDisplay, taskSave, taskDisplay, viewReport };
