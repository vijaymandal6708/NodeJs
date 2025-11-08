import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeProfile = () => {
  const empName = localStorage.getItem("empname") || "";
  const empEmail = localStorage.getItem("empemail") || "";
  const empId = localStorage.getItem("empid");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Password strength regex
  const strongPasswordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handlePasswordChange = async () => {
    // Required field validation
    if (!oldPass || !newPass || !confirmPass) {
      return toast.warn("Please fill all fields.");
    }

    // New password cannot match old
    if (oldPass === newPass) {
      return toast.error("New password cannot be the same as old password.");
    }

    // Confirm password check
    if (newPass !== confirmPass) {
      return toast.error("New passwords do not match.");
    }

    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/employee/updatepassword`;

      await axios.post(api, {
        empid: empId,
        oldPassword: oldPass,
        newPassword: newPass,
      });

      toast.success("Password updated successfully!");

      // Reset fields
      setOldPass("");
      setNewPass("");
      setConfirmPass("");
    } catch (error) {
      const msg = error?.response?.data?.msg || "Error updating password.";
      toast.error(msg);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f3f0ff, #ebe6ff)",
          padding: "40px",
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "480px",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(160,120,230,0.25)",
            animation: "fadeIn 0.6s ease",
          }}
        >
          <h2
            style={{
              color: "#b683d8",
              marginBottom: "18px",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            My Profile
          </h2>

          {/* Employee Info */}
          <div
            style={{
              marginBottom: "25px",
              padding: "15px",
              background: "#faf4ff",
              borderRadius: "12px",
              border: "1px solid #e4ccff",
            }}
          >
            <p>
              <strong>Name:</strong> {empName}
            </p>
            <p>
              <strong>Email:</strong> {empEmail}
            </p>
            <p>
              <strong>Employee ID:</strong> {empId}
            </p>
          </div>

          {/* Password Change */}
          <h4 style={{ color: "#9b63c5", marginBottom: "15px" }}>
            Change Password
          </h4>

          <label>Old Password</label>
          <input
            type="password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d6c0ff",
              marginBottom: "12px",
            }}
          />

          <label>New Password</label>
          <input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d6c0ff",
              marginBottom: "12px",
            }}
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #d6c0ff",
              marginBottom: "20px",
            }}
          />

          {/* Submit Button */}
          <button
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #b689f0, #cba3ff)",
              padding: "12px",
              border: "none",
              borderRadius: "12px",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={handlePasswordChange}
          >
            Update Password
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
