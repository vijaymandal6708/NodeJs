import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewReport = () => {
  const [groupedReports, setGroupedReports] = useState({});

  // ------------------------------
  // 🔥 FETCH REPORTS FUNCTION
  // ------------------------------
  const loadReports = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/viewreport`
      );

      if (res.data.success) {
        const reports = res.data.reports;

        // GROUP REPORTS BY EMPLOYEE
        const grouped = {};
        reports.forEach((r) => {
          const id = r.empid._id;

          if (!grouped[id]) {
            grouped[id] = {
              employee: r.empid,
              reports: [],
            };
          }
          grouped[id].reports.push(r);
        });

        setGroupedReports(grouped);
      }
    } catch (err) {
      console.error("Report Fetch Error:", err);
    }
  };

  // Load on mount
  useEffect(() => {
    loadReports();
  }, []);

  // ------------------------------
  // 🔄 REASSIGN FUNCTION + TOASTIFY
  // ------------------------------
  const reassignTask = async (taskid) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/admin/reassigntask`,
        { taskid, submitstatus: false }
      );

      toast.success("Task Reassigned Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      // 🔥 Reload data
      loadReports();
    } catch (err) {
      toast.error("Reassign failed!", {
        position: "top-right",
        autoClose: 2000,
      });
      console.error(err);
    }
  };

  // ------------------------------
  // 🔥 STYLES
  // ------------------------------
  const card = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(150,120,230,0.18)",
    marginBottom: "25px",
  };

  const grid4 = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px 25px",
    marginBottom: "22px",
  };

  const label = {
    fontWeight: 600,
    color: "#7a4bd9",
    fontSize: "14px",
  };

  const value = {
    background: "#f3eaff",
    padding: "8px 12px",
    borderRadius: "8px",
    marginTop: "6px",
    color: "#4b3b70",
    fontSize: "14px",
  };

  return (
    <div style={{ padding: "25px 30px", background: "#faf6ff" }}>
      <h2
        style={{
          fontSize: "26px",
          fontWeight: 600,
          color: "#8b5db8",
          textAlign: "center",
          marginBottom: "25px",
          marginTop:"5px"
        }}
      >
        View Report
      </h2>

      {/* LOOP EMPLOYEE GROUPS */}
      {Object.values(groupedReports).map((empGroup, index) => (
        <div key={index}>
          {/* EMPLOYEE HEADER */}
          <h3
            style={{
              marginBottom: "10px",
              marginTop: "25px",
              color: "#7a4bd9",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            👤 {empGroup.employee.name} ({empGroup.employee.designation})
          </h3>

          <p
            style={{
              marginTop: "-10px",
              marginBottom: "18px",
              color: "#6f55a3",
              fontSize: "14px",
            }}
          >
            ✉ {empGroup.employee.email}
          </p>

          {/* ALL REPORTS OF THIS EMPLOYEE */}
          {empGroup.reports.map((item, i) => (
            <div key={i} style={card}>
              <h4
                style={{
                  marginBottom: "18px",
                  color: "#8b5db8",
                  fontWeight: 600,
                }}
              >
                Report on ({item.task})
              </h4>

              {/* 4 FIELDS PER ROW */}
              <div style={grid4}>
                <div>
                  <div style={label}>Task</div>
                  <div style={value}>{item.task}</div>
                </div>

                <div>
                  <div style={label}>Duration</div>
                  <div style={value}>{item.duration} days</div>
                </div>

                <div>
                  <div style={label}>Priority</div>
                  <div style={value}>{item.priority}</div>
                </div>

                <div>
                  <div style={label}>Completion Day</div>
                  <div style={value}>{item.completionday}</div>
                </div>

                <div>
                  <div style={label}>Status</div>
                  <div style={value}>{item.taskstatus}</div>
                </div>

                <div>
                  <div style={label}>Submit Status</div>
                  <div style={value}>
                    {item.submitstatus ? "✅ Submitted" : "❌ Not Submitted"}
                  </div>
                </div>

                {/* REPORT DESCRIPTION */}
                <div>
                  <div style={label}>Report Description</div>
                  <div style={value}>{item.reportdescription || "-"}</div>
                </div>

                {/* REASSIGN BUTTON */}
                <div>
                  <div style={label}>Reassign Task</div>
                  <button
                    onClick={() => reassignTask(item._id)}
                    style={{
                      padding: "8px 14px",
                      marginTop: "6px",
                      borderRadius: "8px",
                      background: "#b689f0",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Reassign Task
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default ViewReport;
