import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      /* shift the background image/gradient up 30px without moving contents */
      background: "linear-gradient(135deg, #f8f6ff, #f3f0ff)",
      backgroundPosition: "0 -30px", // <-- moves the background up 30px
      backgroundRepeat: "no-repeat",
      color: "#4b0082",
      position: "relative", // keep layout positioning normal
    },
    header: {
      background: "#ffffff",
      padding: "20px 40px",
      textAlign: "center",
      fontSize: "26px",
      fontWeight: "700",
      color: "#7a6cf5",
      boxShadow: "0 2px 10px rgba(122,108,245,0.1)",
      borderBottom: "1px solid #ebe7ff",
    },
    adminInfo: {
      textAlign: "right",
      padding: "12px 40px",
      fontSize: "15px",
      color: "#6c63ff",
      background: "#faf9ff",
      borderBottom: "1px solid #e9e6ff",
    },
    logout: {
      color: "#ff6b81",
      marginLeft: "8px",
      cursor: "pointer",
      fontWeight: "500",
      textDecoration: "underline",
    },
    contentArea: {
      display: "flex",
      flex: 1,
      height: "100%",
    },
    sidebar: {
      width: "230px",
      background: "#faf9ff",
      display: "flex",
      flexDirection: "column",
      padding: "25px 20px",
      gap: "12px",
      borderRight: "1px solid #e8e4ff",
    },
    link: {
      textDecoration: "none",
      color: "#7a6cf5",
      background: "#ffffff",
      padding: "10px 15px",
      borderRadius: "10px",
      fontWeight: "500",
      textAlign: "center",
      boxShadow: "0 3px 8px rgba(108, 99, 255, 0.05)",
      transition: "0.3s ease",
      border: "1px solid #ece9ff",
    },
    linkHover: {
      background: "#ebe7ff",
      color: "#5a4cd9",
      boxShadow: "0 3px 8px rgba(108, 99, 255, 0.15)",
    },
    content: {
      flex: 1,
      background: "#ffffff",
      borderRadius: "20px",
      margin: "10px",
      padding: "20px 20px",
      color: "#333",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
      overflowY: "auto",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>Admin Dashboard</div>

      <div style={styles.adminInfo}>
        Welcome: <b>{localStorage.getItem("adminname")}</b> | Email:{" "}
        <b>{localStorage.getItem("adminemail")}</b>
        <span
          style={styles.logout}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </span>
      </div>

      <div style={styles.contentArea}>
        <div style={styles.sidebar}>
          <Link
            to="create-user"
            style={styles.link}
            onMouseOver={(e) => {
              e.target.style.background = styles.linkHover.background;
              e.target.style.color = styles.linkHover.color;
              e.target.style.boxShadow = styles.linkHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.link.background;
              e.target.style.color = styles.link.color;
              e.target.style.boxShadow = styles.link.boxShadow;
            }}
          >
            ➕ Create User
          </Link>

          <Link
            to="assign-task"
            style={styles.link}
            onMouseOver={(e) => {
              e.target.style.background = styles.linkHover.background;
              e.target.style.color = styles.linkHover.color;
              e.target.style.boxShadow = styles.linkHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.link.background;
              e.target.style.color = styles.link.color;
              e.target.style.boxShadow = styles.link.boxShadow;
            }}
          >
            👥 Assign Task
          </Link>
        </div>

        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
