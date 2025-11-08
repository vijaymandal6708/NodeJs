import { Link, Outlet } from "react-router-dom";

const EmployeeDashboard = () => {
  
  const styles = {
    page: {
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #faf2ff, #f3eaff)", 
      color: "#8b5db8",
      position: "relative",
      marginTop: "70px",
    },

    header: {
      background: "white",
      padding: "18px 40px",
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      fontStyle: "italic",
      color: "#b683d8",
      letterSpacing: "0.5px",
      borderBottom: "1px solid #e3c7f7",
      boxShadow: "0 2px 12px rgba(190,150,230,0.25)",
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
      background: "#faefff",
      display: "flex",
      flexDirection: "column",
      padding: "25px 20px",
      gap: "14px",
      borderRight: "1px solid #e6caf9",
    },

    link: {
      textDecoration: "none",
      color: "#b172d6",
      background: "#ffffff",
      padding: "10px 15px",
      borderRadius: "10px",
      fontWeight: "500",
      textAlign: "center",
      boxShadow: "0 3px 8px rgba(190,150,230,0.12)",
      transition: "0.3s ease",
      border: "1px solid #ecdafe",
    },

    linkHover: {
      background: "#f7e8ff",
      color: "#9c63c5",
      boxShadow: "0 3px 10px rgba(175,130,215,0.22)",
    },

    content: {
      flex: 1,
      background: "#ffffff",
      borderRadius: "20px",
      margin: "10px",
      padding: "20px",
      color: "#333",
      boxShadow: "0 8px 20px rgba(180,140,230,0.15)",
      overflowY: "auto",

      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "stretch",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>Employee Dashboard</div>

      <div style={styles.contentArea}>
        
        {/* ✅ Sidebar */}
        <div style={styles.sidebar}>

          <Link
            to="/employee-dashboard"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            🏠 Homepage
          </Link>

          <Link
            to="employee-task"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            📋 My Current Tasks
          </Link>

          <Link
            to="employee-totaltask"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            📊 Assigned All Tasks
          </Link>

          <Link
            to="employee-completedtask"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            ✅ Completed Tasks
          </Link>

          <Link
            to="employee-partiallycompletedtask"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            🌗 Partially Completed
          </Link>

          <Link
            to="employee-profile"
            style={styles.link}
            onMouseOver={(e) => Object.assign(e.target.style, styles.linkHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.link)}
          >
            👤 My Profile
          </Link>
        </div>

        {/* ✅ Page Area */}
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
