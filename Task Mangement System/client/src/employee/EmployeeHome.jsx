import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const EmployeeHome = () => {
  const [taskStats, setTaskStats] = useState([]);
  const [employeeStats, setEmployeeStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const empid = localStorage.getItem("empid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9002/employee/homeshowtask?id=${empid}`
        );

        const d = res.data;

        setTaskStats([
          { name: "Completed", value: Number(d.completed) },
          { name: "Partial", value: Number(d.partial) },
          { name: "Pending", value: Number(d.pending) },
          { name: "Not Started", value: Number(d.notStarted) },
        ]);

        setEmployeeStats([{ name: "Your Tasks", value: Number(d.total) }]);

        setLoading(false);
      } catch (err) {
        console.log("Error loading employee stats", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [empid]);

  const COLORS = ["#b683d8", "#d3b1f7", "#9c63c5", "#e4c1ff"];

  const styles = {
    page: {
      width: "100%",
      height: "100%",
      padding: 20,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
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
      margin: 0,
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

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: "center", fontSize: 20 }}>
        Loading charts...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* PIE CHART */}
      <div style={styles.card}>
        <h3 style={styles.title}>Your Task Status</h3>
        <div style={styles.chartBoxTall}>
          {taskStats.length > 0 && (
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
          )}
        </div>
      </div>

      {/* BAR CHART */}
      <div style={styles.card}>
        <h3 style={styles.title}>Task Breakdown</h3>
        <div style={styles.chartBoxTall}>
          {taskStats.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taskStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#b683d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* TOTAL TASKS */}
      <div style={{ ...styles.card, ...styles.spanFull }}>
        <h3 style={styles.title}>Total Tasks Assigned</h3>
        <div style={styles.chartBoxShort}>
          {employeeStats.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={employeeStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#cba3ff" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
