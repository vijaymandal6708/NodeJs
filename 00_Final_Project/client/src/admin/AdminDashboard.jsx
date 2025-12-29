import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
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

/* ================= CONSTANTS ================= */

const COLORS = ["#5b21b6", "#7c3aed", "#a78bfa", "#ddd6fe"];

const CATEGORY_ORDER = [
  "smartphones",
  "laptops",
  "accessories",
  "cameras",
];

/* ================= COMPONENT ================= */

const AdminDashboard = () => {
  const location = useLocation();

  // ✅ SHOW DASHBOARD ONLY ON ROOT ADMIN ROUTE
  const showDashboard = location.pathname === "/admin-dashboard";

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DASHBOARD DATA ================= */
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8000/admin/dashboard-stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("📊 DASHBOARD STATS:", res.data.stats);
        setStats(res.data.stats);
      } catch (err) {
        console.error("Dashboard stats error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  /* ================= SAFE DATA MAPPING ================= */

  // 1️⃣ Products by Category
  const productCategoryData = CATEGORY_ORDER.map((cat) => {
    const found = stats?.productCategories?.find(
      (i) => i._id === cat
    );

    return {
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      value: found ? found.count : 0,
    };
  });

  // 2️⃣ Weekly Orders
  const weekMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeklyOrdersData =
    stats?.weeklyOrders?.map((d) => ({
      day: weekMap[d._id - 1],
      orders: d.orders,
    })) || [];

  // 3️⃣ Monthly Revenue
  const revenueData =
    stats?.monthlyRevenue?.map((m) => ({
      month: new Date(2024, m._id - 1).toLocaleString("default", {
        month: "short",
      }),
      revenue: m.revenue,
    })) || [];

  // 4️⃣ Category Performance (Radar)
  const categoryPerformanceData = productCategoryData.map((c) => ({
    category: c.name,
    score: c.value * 10,
  }));

  // 5️⃣ Revenue by Category (TreeMap – safe)
  const revenueTreeData = CATEGORY_ORDER.map((cat) => {
    const found = stats?.revenueByCategory?.find(
      (i) => i._id === cat
    );

    return {
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      size: found ? found.size : 1, // Treemap needs > 0
    };
  });

  /* ================= UI ================= */

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Inter", system-ui, sans-serif;
        }

        body {
          background: #f6f7fb;
        }

        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .admin-sidebar {
          width: 250px;
          background: #0f172a;
          color: #fff;
          padding: 24px;
        }

        .brand {
          font-size: 22px;
          margin-bottom: 40px;
        }

        .admin-sidebar nav a {
          display: block;
          padding: 12px 14px;
          margin-bottom: 6px;
          border-radius: 8px;
          color: #cbd5f5;
          text-decoration: none;
        }

        .admin-sidebar nav .active,
        .admin-sidebar nav a:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        /* MAIN */
        .admin-main {
          flex: 1;
          padding: 30px;
        }

        .admin-header {
          text-align: center;
          margin-bottom: 30px;
        }

        /* GRID */
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .content-card {
          background: #fff;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }

        .content-card h3 {
          font-size: 16px;
          margin-bottom: 12px;
        }

        .loading {
          text-align: center;
          margin-top: 100px;
          font-size: 18px;
          color: #555;
        }

        @media (max-width: 1024px) {
          .charts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
          .admin-layout {
            flex-direction: column;
          }
          .admin-sidebar {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-layout">
        {/* SIDEBAR */}
        <aside className="admin-sidebar">
          <h2 className="brand">AdminPanel</h2>
          <nav>
            <NavLink to="products">Products and Stocks</NavLink>
            <NavLink to="/admin-dashboard" end>Dashboard</NavLink>
            <NavLink to="add-product">Add Product</NavLink>
            <NavLink to="orders">Orders</NavLink>
          </nav>
        </aside>

        {/* MAIN */}
        <section className="admin-main">
          {showDashboard && (
            <header className="admin-header">
              <h1>Admin Dashboard</h1>
            </header>
          )}

          {/* ✅ DASHBOARD ONLY */}
          {showDashboard && (
            loading ? (
              <p className="loading">Loading dashboard data...</p>
            ) : (
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
                      <Line
                        dataKey="revenue"
                        stroke="#5b21b6"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* 4️⃣ Area */}
                <div className="content-card">
                  <h3>Order Trend</h3>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={weeklyOrdersData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        dataKey="orders"
                        stroke="#7c3aed"
                        fill="#ddd6fe"
                      />
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
                      stroke="#fff"
                      fill="#5b21b6"
                    />
                  </ResponsiveContainer>
                </div>
              </div>
            )
          )}

          {/* CHILD ROUTES */}
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
