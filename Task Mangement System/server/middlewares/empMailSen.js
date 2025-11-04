const nodemailer = require("nodemailer");

const userMailsender = async (uname, uemail, upass) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Task Management Admin" <${process.env.EMAIL_USER}>`,
      to: uemail,
      subject: "Your Task Management Login Credentials",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>Welcome ${uname},</h3>
          <p>Your account has been created successfully.</p>
          <p><b>Email:</b> ${uemail}</p>
          <p><b>Password:</b> ${upass}</p>
          <p>Please change your password after first login.</p>
          <br/>
          <small>— Task Management System</small>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${uemail}: ${info.response}`);
    return true;
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    return false;
  }
};

module.exports = { userMailsender };
