const EmpModel = require("../models/empModel");
const TaskModel= require("../models/taskModel");

const empLogin=async(req, res)=>{
    const { email, password } =req.body;
   
    const employee = await EmpModel.findOne({email:email});
    
    if (!employee)
    {
        res.status(401).send({msg:"Invalid Employee Email!"});
        console.log("invalid email");
    }

    if (employee.password!=password){
        res.status(401).send({msg:"Invalid Password!"});
        console.log("invalid password")
    }

    res.status(200).send({employee:employee, msg:"Login Succesfully!"});
}

const showTask = async (req, res) => {
  try {
    const id = req.query.id;  // ✅ using ?id=

    const tasks = await TaskModel.find({ empid: id });

    return res.status(200).send({ tasks });  // ✅ return { tasks: [...] }
  } catch (error) {
    return res.status(500).send({ msg: "Error fetching tasks", error });
  }
};

const sendReport = async (req, res) => {
  try {
    const { taskid, taskstatus, completionday, submitstatus,reportdescription } = req.body;
    console.log(req.body);

    const updated = await TaskModel.findByIdAndUpdate(
      taskid,
      {
        taskstatus,
        completionday,
        submitstatus,
        reportdescription
      },
      { new: true }
    );

    res.status(200).send({
      msg: "Report submitted successfully",
      updated
    });
  } catch (error) {
    res.status(500).send({ msg: "Error submitting report", error });
  }
};

const homeShowTask = async (req, res) => {
  try {
    const empid = req.query.id;

    const tasks = await TaskModel.find({ empid });

    // Normalize statuses (case-insensitive)
    const normalize = (s) => (s || "").trim().toLowerCase();

    const stats = {
      total: tasks.length,
      completed: tasks.filter(t => normalize(t.taskstatus) === "completed").length,
      partial: tasks.filter(t => normalize(t.taskstatus) === "partial").length,
      pending: tasks.filter(t => normalize(t.taskstatus) === "pending").length,
      notStarted: tasks.filter(t => normalize(t.taskstatus) === "not started").length,
    };

    return res.status(200).json(stats);

  } catch (error) {
    console.log("Error fetching employee stats:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


const updatePassword = async (req, res) => {
  try {
    const { empid, oldPassword, newPassword } = req.body;

    const emp = await EmpModel.findById(empid);

    if (!emp) return res.status(404).send({ msg: "Employee not found" });

    if (emp.password !== oldPassword)
      return res.status(400).send({ msg: "Old password incorrect" });

    emp.password = newPassword;
    await emp.save();

    res.status(200).send({ msg: "Password updated successfully!" });
  } catch (e) {
    res.status(500).send({ msg: "Error updating password", e });
  }
};




module.exports={
    empLogin,
    showTask,
    sendReport,
    homeShowTask,
    updatePassword
}