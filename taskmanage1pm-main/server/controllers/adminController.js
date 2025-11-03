const UserPassword = require("../middlewares/randomPassword");
const nodemailer = require("nodemailer");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Temporary static admin login (no database check)
    if (email === "admin@gmail.com" && password === "admin123") {
      return res.status(200).send({ msg: "Successfully Logged In" });
    } else {
      return res.status(401).send({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// ✅ Create user + send email (without saving to DB)
const userCreate = async (req, res) => {
  const { empname, empemail, designation } = req.body;

  try {
    // 1️⃣ Generate random password
    const password = UserPassword.myPassword();

    // 2️⃣ Configure mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vijaymandal6708@gmail.com",
        pass: "ketb zugh oins hxyt", // Google App Password
      },
    });

    // 3️⃣ Mail options
    const mailOptions = {
      from: "vijaymandal6708@gmail.com",
      to: empemail,
      subject: "Welcome to Task Management System",
      html: `
        <h2>Hi ${empname},</h2>
        <p>You have been added as an employee in the Task Management System.</p>
        <p><b>Designation:</b> ${designation}</p>
        <p><b>Your temporary password:</b> ${password}</p>
        <p>Please log in and change your password as soon as possible.</p>
        <br>
        <p>Best regards,<br/>Admin Team</p>
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send({
      msg: "Email sent successfully!",
      sentTo: empemail,
      password: password,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ msg: "Error sending email", error: error.message });
  }
};

module.exports = {
  adminLogin,
  userCreate,
};
