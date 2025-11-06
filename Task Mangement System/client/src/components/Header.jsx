import React from "react";

const Header = () => {
  const adminName = localStorage.getItem("adminname") || "Admin";

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 40px",
      background: "linear-gradient(90deg, #7a6cf5, #9a8bff)",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      boxShadow: "0 4px 15px rgba(122,108,245,0.2)",
      position: "fixed",
      top: 0,
      zIndex: 20,
      fontStyle: "italic",
      width: "93vw",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "700",
      letterSpacing: "0.5px",
      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    },

    nav: {
      display: "flex",
      gap: "25px",
      alignItems: "center",
    },

    link: {
      textDecoration: "none",
      color: "#fff",
      fontWeight: "500",
      padding: "6px 12px",
      borderRadius: "8px",
      transition: "0.3s ease",
    },

    linkHover: {
      background: "rgba(255,255,255,0.2)",
      color: "#fff",
    },

    profileSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    avatar: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#fff",
      color: "#7a6cf5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "600",
      fontSize: "18px",
      boxShadow: "0 2px 6px rgba(255,255,255,0.3)",
    },

    logout: {
      background: "rgba(255,255,255,0.2)",
      padding: "6px 14px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s ease",
    },
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>Task Manager</div>


      {/* Profile / Logout */}
      <div style={styles.profileSection}>
        <div style={styles.avatar}>
          {adminName.charAt(0).toUpperCase()}
        </div>
        <span>{adminName}</span>
        <span
          style={styles.logout}
          onMouseOver={(e) => (e.target.style.background = "#fff")}
          onMouseOut={(e) => (e.target.style.background = "rgba(255,255,255,0.2)")}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </span>
      </div>
    </header>
  );
};

export default Header;
