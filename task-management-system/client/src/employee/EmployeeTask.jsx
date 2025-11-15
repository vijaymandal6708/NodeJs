import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [report, setReport] = useState({
    description: "",
    status: "",
    durationDone: "",
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn { 
        0% { opacity: 0; transform: translateY(40px); } 
        100% { opacity: 1; transform: translateY(0); } 
      }
      @keyframes popupScale {
        0% { transform: scale(0.7); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 120);
  }, []);

  useEffect(() => {
  loadTasks();
}, []);

const loadTasks = async () => {
  try {
    const api = `${
      import.meta.env.VITE_BACKEND_URL
    }/employee/showtask?id=${localStorage.getItem("empid")}`;

    const res = await axios.get(api);

    setTasks((res.data.tasks || []).filter(task => task.submitstatus === false));
  } finally {
    setLoading(false);
  }
};


  const submitReport = async () => {
    try {
      const mapStatus = (value) => {
        switch (value) {
          case "Fully Complete":
            return "completed";
          case "Partially Complete":
            return "partial";
          case "Not Complete":
            return "pending";
          default:
            return "not started";
        }
      };

      const api = `${import.meta.env.VITE_BACKEND_URL}/employee/sendreport`;

      await axios.post(api, {
        taskid: selectedTask._id,
        taskstatus: mapStatus(report.status),
        completionday: report.durationDone,
        submitstatus: true,
        reportdescription: report.description,
      });

      toast.success("Report submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      await loadTasks();

      setReport({ description: "", status: "", durationDone: "" });
      setShowModal(false);
    } catch (error) {
      toast.error("Report submission failed!", {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  const rows = tasks.map((task, index) => (
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
        <span style={{ color: "#7a6cf5", fontWeight: 600 }}>{index + 1}.</span>
        <span>{task.task}</span>
      </td>

      <td>{task.duration} days</td>
      <td>{task.priority}</td>

      <td>
        <Button
          size="sm"
          style={{
            background: "linear-gradient(90deg, #b689f0, #cba3ff)",
            border: "none",
            borderRadius: "8px",
            padding: "8px 14px",
            fontWeight: "550",
            color: "white",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #a875eb, #bc95fa)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #b689f0, #cba3ff)")
          }
          onClick={() => {
            setSelectedTask(task);
            setShowModal(true);
          }}
        >
          Send Report
        </Button>
      </td>
    </tr>
  ));

  return (
    <div
      style={{
        minHeight: "100vh", // ✅ Full-page height
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
        My Assigned Tasks
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
            Loading tasks...
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
            No tasks assigned yet.
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
                <th>Task Description</th>
                <th>Duration</th>
                <th>Priority</th>
                <th>Send Report</th>
              </tr>
            </thead>

            <tbody>{rows}</tbody>
          </Table>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.38)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000,
            animation: "fadeIn 0.3s ease",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "470px",
              background: "#ffffff",
              borderRadius: "18px",
              padding: "28px 32px",
              boxShadow: "0 12px 30px rgba(150,110,250,0.35)",
              animation: "popupScale 0.3s ease",
            }}
          >
            <h4
              style={{
                color: "#7a4bd9",
                fontWeight: "700",
                marginBottom: "18px",
                textAlign: "center",
              }}
            >
              Submit Report – {selectedTask?.task}
            </h4>

            <label style={{ fontSize: "14px", fontWeight: 600 }}>
              Task Description
            </label>
            <textarea
              rows="4"
              placeholder="Write what you completed..."
              value={report.description}
              onChange={(e) =>
                setReport({ ...report, description: e.target.value })
              }
              style={{
                width: "95.6%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #d6ccff",
                marginBottom: "12px",
                fontSize: "14px",
              }}
            />

            <label style={{ fontSize: "14px", fontWeight: 600 }}>
              Task Status
            </label>
            <select
              value={report.status}
              onChange={(e) => setReport({ ...report, status: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #d6ccff",
                marginBottom: "12px",
                fontSize: "14px",
              }}
            >
              <option value="">Select status</option>
              <option value="Fully Complete">Fully Complete</option>
              <option value="Partially Complete">Partially Complete</option>
              <option value="Not Complete">Not Complete</option>
            </select>

            <label style={{ fontSize: "14px", fontWeight: 600 }}>
              Duration Completed (in days)
            </label>
            <input
              type="number"
              value={report.durationDone}
              onChange={(e) =>
                setReport({ ...report, durationDone: e.target.value })
              }
              style={{
                width: "95.6%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #d6ccff",
                marginBottom: "14px",
                fontSize: "14px",
              }}
            />

            <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
              <button
                style={{
                  flex: 1,
                  background: "linear-gradient(90deg, #b689f0, #cba3ff)",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={submitReport}
              >
                Submit
              </button>

              <button
                style={{
                  flex: 1,
                  background: "#f1f1f1",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EmployeeTasks;
