import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminHome = () => {
  const [taskStats, setTaskStats] = useState([]);
  const [employeeStats, setEmployeeStats] = useState([]);

  const COLORS = ["#b683d8", "#d3b1f7", "#9c63c5", "#e4c1ff"];

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/taskdisplay`)
      .then(res => {
        const t = res.data.tasks;

        setTaskStats([
          { name: "Completed", value: t.Completed },
          { name: "Partial", value: t.Partial },
          { name: "Pending", value: t.Pending },
          { name: "Not Started", value: t.NotStarted },
        ]);

        setEmployeeStats([{ name: "Employees", value: res.data.employees }]);
      })
      .catch(err => console.error(err));
  }, []);

  const styles = {
    page: {
      width: "100%",
      height: "100%",
      padding: 20,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",   // ← EXACT same as before
      gap: 24,
    },
    card: {
      minWidth: 0,
      background: "#fff",
      border: "1px solid #ecdafe",
      borderRadius: 16,
      boxShadow: "0 8px 20px rgba(180,140,230,0.15)",
      padding: 24,
    },
    title: {
      marginBottom: 16,
      textAlign: "center",
      color: "#8b5db8",
      fontSize: 20,
      fontWeight: 600,
    },
    chartBoxTall: {
      width: "100%",
      height: 320,
    },
    chartBoxShort: {
      width: "100%",
      height: 260,
    },
    spanFull: {
      gridColumn: "1 / -1",
    },
  };

  return (
    <div style={styles.page}>

      {/* LEFT PIE CHART */}
      <div style={styles.card}>
        <h3 style={styles.title}>Task Completion Status</h3>
        <div style={styles.chartBoxTall}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={taskStats}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {taskStats.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT BAR CHART */}
      <div style={styles.card}>
        <h3 style={styles.title}>Task Breakdown Chart</h3>
        <div style={styles.chartBoxTall}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={taskStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#b683d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* FULL WIDTH EMPLOYEE CHART */}
      <div style={{ ...styles.card, ...styles.spanFull }}>
        <h3 style={styles.title}>Total Employees</h3>
        <div style={styles.chartBoxShort}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={employeeStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#cba3ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default AdminHome;
