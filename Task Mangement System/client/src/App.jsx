import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";

// ✅ Admin
import AdminDashBoard from "./admin/AdminDashBoard";
import CreateUser from "./admin/CreateUser";
import ViewUser from "./admin/AssignTask";
import AdminHome from "./admin/AdminDashBoardHome";

// ✅ Employee
import EmployeeDashboard from "./employee/EmployeeDashBoard";
import EmployeeTasks from "./employee/EmployeeTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ Login */}
        <Route path="/" element={<Login />} />

        {/* ✅ Admin Routes */}
        <Route element={<Layout />}>
          <Route path="admin-dashboard" element={<AdminDashBoard />}>
            <Route index element={<AdminHome />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="assign-task" element={<ViewUser />} />
          </Route>
        </Route>

        {/* ✅ Employee Routes */}
        <Route element={<Layout />}>
          <Route path="employee-dashboard" element={<EmployeeDashboard />}>
            {/* employee sees task list on dashboard home */}
            <Route index element={<EmployeeTasks />} />

            {/* same page if you use sidebar link */}
            {/* <Route path="my-tasks" element={<EmployeeTasks />} /> */}
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
