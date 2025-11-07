import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AdminHome = () => {
  const taskStats = [
    { name: "Completed", value: 40 },
    { name: "Partial", value: 25 },
    { name: "Pending", value: 15 },
    { name: "Not Started", value: 20 },
  ];
  const employeeStats = [{ name: "Employees", value: 50 }];
  const COLORS = ["#b683d8", "#d3b1f7", "#9c63c5", "#e4c1ff"];

  const styles = {
    page: {
      width: "100%",
      height: "100%",
      padding: 20,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", // ← two equal columns that can shrink
      gap: 24,
    },
    card: {
      minWidth: 0, // ← critical for grid children so contents can shrink
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
      height: 320, // ← definite height for ResponsiveContainer
    },
    chartBoxShort: {
      width: "100%",
      height: 260,
    },
    spanFull: {
      gridColumn: "1 / -1", // ← spans both columns
    },
  };

  return (
    <div style={styles.page}>
      {/* LEFT: PIE */}
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

      {/* RIGHT: BAR */}
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

      {/* FULL-WIDTH EMPLOYEE CHART */}
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
