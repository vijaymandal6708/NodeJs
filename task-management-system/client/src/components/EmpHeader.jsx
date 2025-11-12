import React from "react";
import { useNavigate } from "react-router-dom";

const EmpHeader = () => {
  const navigate = useNavigate();
  const employeeName = localStorage.getItem("empname") || "Employee";

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 40px",
      background: "linear-gradient(270deg, #c086e6, #a658d4)",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 4px 15px rgba(142, 36, 170, 0.3)",
      position: "fixed",
      top: 0,
      zIndex: 20,
      fontStyle: "italic",
      width: "93vw",             // ✅ Original width restored
      borderBottom: "1px solid rgba(255,255,255,0.3)",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "700",
      letterSpacing: "0.5px",
      textShadow: "0 1px 3px rgba(0,0,0,0.3)",
    },

    rightSection: {              // ✅ New wrapper for right area
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },

    profileClickable: {          // ✅ Only avatar + name clickable
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    },

    avatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#ffffff",
      color: "#8e24aa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "600",
      fontSize: "18px",
      boxShadow: "0 3px 6px rgba(142,36,170,0.35)",
    },

    logout: {
      background: "rgba(255,255,255,0.25)",
      padding: "6px 14px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s ease",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.4)",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Task Manager</div>

      {/* ✅ Right group fixed */}
      <div style={styles.rightSection}>

        {/* ✅ Avatar + Name Clickable */}
        <div
          style={styles.profileClickable}
          onClick={() => navigate("/employee-dashboard/employee-profile")}
        >
          <div style={styles.avatar}>
            {employeeName.charAt(0).toUpperCase()}
          </div>
          <span>{employeeName}</span>
        </div>

        {/* ✅ Logout stays aligned and unchanged */}
        <span
          style={styles.logout}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "#8e24aa";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255,255,255,0.25)";
            e.target.style.color = "white";
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </span>

      </div>
    </header>
  );
};

export default EmpHeader;
