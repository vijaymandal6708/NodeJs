import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const styles = {
    page: {
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #f9f8ff, #f3f0ff)",
      color: "#4b0082",
      position: "relative",
      marginTop: "70px",
    },

    // 🌸 Light Elegant Header
    header: {
      background: "white",
      padding: "18px 40px",
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      fontStyle: "italic",
      color: "#5a4cd9", // soft violet text
      letterSpacing: "0.5px",
      borderBottom: "1px solid #d8d2ff",
      boxShadow: "0 2px 10px rgba(122,108,245,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 10,
      borderRadius: "0 0 14px 14px",
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
      {/* 🌸 Light, Elegant Header */}
      <div style={styles.header}>Admin Dashboard</div>

      {/* Sidebar + Content */}
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
