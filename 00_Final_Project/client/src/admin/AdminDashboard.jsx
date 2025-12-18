import "./AdminDashboard.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Treemap,
} from "recharts";

/* ================= DATA ================= */

/* 1️⃣ Products by Category (Donut) */
const productCategoryData = [
  { name: "Electronics", value: 420 },
  { name: "Fashion", value: 300 },
  { name: "Furniture", value: 180 },
  { name: "Books", value: 100 },
];

/* 2️⃣ Weekly Orders (Bar) */
const weeklyOrdersData = [
  { day: "Mon", orders: 120 },
  { day: "Tue", orders: 98 },
  { day: "Wed", orders: 140 },
  { day: "Thu", orders: 110 },
  { day: "Fri", orders: 170 },
  { day: "Sat", orders: 200 },
];

/* 3️⃣ Revenue Overview (Line) */
const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 150000 },
  { month: "Apr", revenue: 220000 },
  { month: "May", revenue: 300000 },
  { month: "Jun", revenue: 345000 },
];

/* 4️⃣ Order Trend (Area) */
const orderTrendData = [
  { day: "Mon", orders: 120 },
  { day: "Tue", orders: 98 },
  { day: "Wed", orders: 140 },
  { day: "Thu", orders: 110 },
  { day: "Fri", orders: 170 },
  { day: "Sat", orders: 200 },
];

/* 5️⃣ Category Performance (Radar) */
const categoryPerformanceData = [
  { category: "Electronics", score: 90 },
  { category: "Fashion", score: 75 },
  { category: "Furniture", score: 65 },
  { category: "Books", score: 50 },
];

/* 6️⃣ Revenue by Category (TreeMap) */
const revenueTreeData = [
  { name: "Electronics", size: 400000 },
  { name: "Fashion", size: 250000 },
  { name: "Furniture", size: 180000 },
  { name: "Books", size: 90000 },
  { name: "Accessories", size: 120000 },
];

const COLORS = ["#5b21b6", "#7c3aed", "#a78bfa", "#ddd6fe"];

/* ================= COMPONENT ================= */

const AdminDashboard = () => {
  const location = useLocation();

  // Show charts only on /admin-dashboard
  const showDashboard = location.pathname === "/admin-dashboard";

  return (
    <div className="admin-layout">
      {/* ========== SIDEBAR ========== */}
      <aside className="admin-sidebar">
        <h2 className="brand">AdminPanel</h2>
        <nav>
          <NavLink to="/admin-dashboard" end>
            Dashboard
          </NavLink>
          <NavLink to="add-product">Add Product</NavLink>
        </nav>
      </aside>

      {/* ========== MAIN ADMIN AREA ========== */}
      <section className="admin-main">
        {/* Header (ONLY on dashboard) */}
        {showDashboard && (
          <header className="admin-header">
            <h1>Admin Dashboard</h1>
          </header>
        )}

        {/* ========== DASHBOARD CONTENT ========== */}
        {showDashboard && (
          <div className="charts-grid">
            {/* 1️⃣ Donut */}
            <div className="content-card">
              <h3>Products by Category</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={productCategoryData}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={90}
                  >
                    {productCategoryData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* 2️⃣ Bar */}
            <div className="content-card">
              <h3>Weekly Orders</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={weeklyOrdersData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#5b21b6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 3️⃣ Line */}
            <div className="content-card">
              <h3>Revenue Overview</h3>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="revenue" stroke="#5b21b6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* 4️⃣ Area */}
            <div className="content-card">
              <h3>Order Trend</h3>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={orderTrendData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="orders" stroke="#7c3aed" fill="#ddd6fe" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* 5️⃣ Radar */}
            <div className="content-card">
              <h3>Category Performance</h3>
              <ResponsiveContainer width="100%" height={240}>
                <RadarChart data={categoryPerformanceData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis />
                  <Radar
                    dataKey="score"
                    stroke="#5b21b6"
                    fill="#a78bfa"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* 6️⃣ TreeMap */}
            <div className="content-card">
              <h3>Revenue by Category</h3>
              <ResponsiveContainer width="100%" height={240}>
                <Treemap
                  data={revenueTreeData}
                  dataKey="size"
                  stroke="#ffffff"
                  fill="#5b21b6"
                />
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ========== CHILD ROUTES (AddProduct etc.) ========== */}
        <Outlet />
      </section>
    </div>
  );
};

export default AdminDashboard;
