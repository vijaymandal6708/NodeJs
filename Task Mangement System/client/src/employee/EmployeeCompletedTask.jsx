import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const EmployeeCompletedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn { 
        0% { opacity: 0; transform: translateY(40px); } 
        100% { opacity: 1; transform: translateY(0); } 
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 120);
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const api = `${import.meta.env.VITE_BACKEND_URL}/employee/showtask?id=${localStorage.getItem("empid")}`;
        const res = await axios.get(api);

        // ✅ Filter completed tasks only
        const completed = (res.data.tasks || []).filter(
          t => t.taskstatus === "completed"
        );

        setTasks(completed);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #f3f0ff, #ebe6ff)",
        padding: "30px 50px",
        fontFamily: "Poppins, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          color: "#b683d8",
          fontSize: "26px",
          marginBottom: "22px",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Completed Tasks
      </h2>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(122,108,245,0.20)",
          transform: slideIn ? "translateY(0)" : "translateY(60px)",
          opacity: slideIn ? 1 : 0,
          transition: "0.8s ease",
        }}
      >
        {loading ? (
          <p
            style={{
              color: "#a98be8",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Loading...
          </p>
        ) : tasks.length === 0 ? (
          <p
            style={{
              color: "#a98be8",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            No completed tasks found.
          </p>
        ) : (
          <Table
            bordered
            hover
            responsive
            className="shadow-sm text-center align-middle"
            style={{ width: "100%", borderRadius: "12px" }}
          >
            <thead
              style={{
                background: "linear-gradient(90deg, #b689f0, #cba3ff)",
                color: "white",
                fontStyle: "italic",
              }}
            >
              <tr style={{ height: "55px" }}>
                <th>Task</th>
                <th>Duration</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={task._id}
                  style={{
                    height: "70px",
                    background: "#ffffff",
                    transition: "0.25s ease",
                    textAlign: "center",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#e4c1ff";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      paddingTop: "25px",
                      paddingLeft: "30px",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "#7a6cf5", fontWeight: 600 }}>
                      {index + 1}.
                    </span>
                    <span>{task.task}</span>
                  </td>

                  <td>{task.duration} days</td>
                  <td>{task.priority}</td>
                  <td style={{ color: "#22c55e", fontWeight: 700 }}>
                    ✅ Completed
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default EmployeeCompletedTasks;
