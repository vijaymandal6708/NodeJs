import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #faf2ff, #f3eaff)", // 🌸 very light purple gradient
      color: "#8b5db8",
      position: "relative",
      paddingTop: "70px",
      minHeight: "100vh",
    },

    header: {
      background: "white",
      padding: "18px 40px",
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      fontStyle: "italic",
      color: "#b683d8", // lighter purple text
      letterSpacing: "0.5px",
      borderBottom: "1px solid #e3c7f7", // softer border
      boxShadow: "0 2px 12px rgba(190,150,230,0.25)", // lighter shadow
      position: "sticky",
      top: 0,
      zIndex: 10,
      borderRadius: "0 0 14px 14px",
    },

    contentArea: {
      display: "flex",
      flex: 1,
      minHeight: "auto",
      alignItems: "stretch",
    },

    sidebar: {
      width: "230px",
      background: "#faefff", // ✅ very light lavender
      display: "flex",
      flexDirection: "column",
      padding: "25px 20px",
      gap: "14px",
      borderRight: "1px solid #e6caf9", // light border
    },

    link: {
      textDecoration: "none",
      color: "#b172d6", // softer pastel purple
      background: "#ffffff",
      padding: "10px 15px",
      borderRadius: "10px",
      fontWeight: "500",
      textAlign: "center",
      boxShadow: "0 3px 8px rgba(190,150,230,0.12)", // light shadow
      transition: "0.3s ease",
      border: "1px solid #ecdafe", // very light purple border
    },

    linkHover: {
      background: "#f7e8ff", // ✅ super light purple hover
      color: "#9c63c5",
      boxShadow: "0 3px 10px rgba(175,130,215,0.22)",
    },

    content: {
      minHeight: "100vh",
      flex: 1,
      background: "#ffffff",
      borderRadius: "20px",
      margin: "10px",
      padding: "20px",
      color: "#333",
      boxShadow: "0 8px 20px rgba(180,140,230,0.15)",
      overflowY: "auto",

      display: "flex", // ✅ REQUIRED
      flexDirection: "column", // ✅ keep normal flow
      width: "100%", // ✅ allow full horizontal stretch
      alignItems: "stretch", // ✅ make children full width
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>Admin Dashboard</div>

      <div style={styles.contentArea}>
        <div style={styles.sidebar}>
          <Link
            to="/admin-dashboard"
            style={styles.link}
            onMouseOver={(e) => {
              Object.assign(e.target.style, styles.linkHover);
            }}
            onMouseOut={(e) => {
              Object.assign(e.target.style, styles.link);
            }}
          >
            📊 Admin Home
          </Link>

          <Link
            to="create-user"
            style={styles.link}
            onMouseOver={(e) => {
              Object.assign(e.target.style, styles.linkHover);
            }}
            onMouseOut={(e) => {
              Object.assign(e.target.style, styles.link);
            }}
          >
            ➕ Create User
          </Link>

          <Link
            to="assign-task"
            style={styles.link}
            onMouseOver={(e) => {
              Object.assign(e.target.style, styles.linkHover);
            }}
            onMouseOut={(e) => {
              Object.assign(e.target.style, styles.link);
            }}
          >
            👥 Assign Task
          </Link>

          <Link
            to="view-report"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            📑 View Report
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
