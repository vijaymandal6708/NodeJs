import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const employeeEmail = localStorage.getItem("employeeemail"); // ✅ identify employee

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const api = `${import.meta.env.VITE_BACKEND_URL}/employee/tasks/${employeeEmail}`;
        const response = await axios.get(api);

        setTasks(response.data.tasks || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const styles = {
    title: {
      fontSize: "24px",
      color: "#b065d6",
      fontWeight: "700",
      marginBottom: "20px",
      fontStyle: "italic",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 8px 18px rgba(180,140,230,0.15)",
    },
    th: {
      background: "#f5e3ff",
      padding: "12px",
      fontSize: "15px",
      color: "#7b3ea6",
      borderBottom: "1px solid #e8cffb",
    },
    td: {
      padding: "12px",
      fontSize: "14px",
      borderBottom: "1px solid #f1e4ff",
    },
    status: {
      padding: "6px 12px",
      borderRadius: "8px",
      fontSize: "13px",
      fontWeight: "600",
    },
    pending: {
      background: "#fff0c2",
      color: "#b68a00",
    },
    working: {
      background: "#d8e8ff",
      color: "#2058a8",
    },
    completed: {
      background: "#c4f5d0",
      color: "#1b7a36",
    },
  };

  const getStatusStyle = (status) => {
    if (status === "Pending") return { ...styles.status, ...styles.pending };
    if (status === "Working") return { ...styles.status, ...styles.working };
    if (status === "Completed") return { ...styles.status, ...styles.completed };
    return styles.status;
  };

  return (
    <div>
      <h2 style={styles.title}>My Assigned Tasks</h2>

      {loading ? (
        <p style={{ fontSize: "16px", color: "#8c55b8" }}>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p style={{ color: "#9c63c5", fontSize: "16px" }}>
          No tasks assigned to you yet.
        </p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Task Title</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Assigned By</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Deadline</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td style={styles.td}>{task.title}</td>
                <td style={styles.td}>{task.description}</td>
                <td style={styles.td}>{task.assignedBy}</td>
                <td style={styles.td}>
                  <span style={getStatusStyle(task.status)}>
                    {task.status}
                  </span>
                </td>
                <td style={styles.td}>{task.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTasks;
