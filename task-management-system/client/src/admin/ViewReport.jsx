import { useEffect, useState } from "react";
import axios from "axios";

const ViewReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admin/viewreport`)
      .then((res) => {
        if (res.data.success) {
          setReports(res.data.reports);
        }
      })
      .catch((err) => console.error("Report Fetch Error:", err));
  }, []);

  const styles = {
    page: {
      width: "100%",
      background: "#ffffff",
    },
    title: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#8b5db8",
      textAlign: "center",
      marginBottom: 20,
    },
    tableBox: {
      width: "100%",
      overflowX: "auto",
      padding: "10px",
      borderRadius: "15px",
      background: "#faf6ff",
      boxShadow: "0 4px 14px rgba(180,140,230,0.15)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "15px",
    },
    th: {
      background: "#e8d9fc",
      color: "#663a8e",
      padding: "12px",
      borderBottom: "2px solid #d4b6f7",
      textAlign: "left",
    },
    td: {
      padding: "10px 12px",
      borderBottom: "1px solid #e8d8fb",
      color: "#4c4c4c",
    },
    row: {
      transition: "0.2s ease",
    },
    rowHover: {
      background: "#f7efff",
    },
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>📑 View Report</h2>

      <div style={styles.tableBox}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Employee Name</th>
              <th style={styles.th}>Designation</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Task</th>
              <th style={styles.th}>Duration</th>
              <th style={styles.th}>Priority</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Completion Day</th>
              <th style={styles.th}>Submit Status</th>
              <th style={styles.th}>Reassign Task</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((item, i) => (
              <tr
                key={i}
                style={styles.row}
                onMouseOver={(e) => (e.currentTarget.style.background = "#f7efff")}
                onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td style={styles.td}>{item.empid?.name || "N/A"}</td>
                <td style={styles.td}>{item.empid?.designation || "N/A"}</td>
                <td style={styles.td}>{item.empid?.email || "N/A"}</td>
                <td style={styles.td}>{item.task}</td>
                <td style={styles.td}>{item.duration}</td>
                <td style={styles.td}>{item.priority}</td>
                <td style={styles.td}>{item.taskstatus}</td>
                <td style={styles.td}>{item.completionday || "-"}</td>
                <td style={styles.td}>{item.submitstatus ? "✅ Submitted" : "❌ Not Submitted"}</td>
                <td style={styles.td}><button>Reassign Task</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReport;
