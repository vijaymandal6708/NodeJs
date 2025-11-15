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
import EmpLayout from "./EmployeeLayout";
import EmployeeHome from "./employee/EmployeeHome";
import EmployeeCompletedTasks from "./employee/EmployeeCompletedTask";
import EmployeeTotalTask from "./employee/EmployeeTotalTask";
import EmployeePartiallyCompletedTasks from "./employee/EmployeePartiallyCompletedTasks";
import EmployeeProfile from "./employee/EmployeeProfile";
import ViewReport from "./admin/ViewReport";
import AdminProfile from "./admin/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />

      
        <Route element={<Layout />}>
          <Route path="admin-dashboard" element={<AdminDashBoard />}>
            <Route index element={<AdminHome />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="assign-task" element={<ViewUser />} />
            <Route path="view-report" element={<ViewReport/>} />
            <Route path="admin-profile" element={<AdminProfile/>} />
          </Route>
        </Route>

        {/* ✅ Employee Routes */}
        <Route element={<EmpLayout />}>
          <Route path="employee-dashboard" element={<EmployeeDashboard />}>
            <Route index element={<EmployeeHome />} />
            <Route path="employee-task" element={<EmployeeTasks />} />
            <Route path="employee-completedtask" element={<EmployeeCompletedTasks />} />
            <Route path="employee-totaltask" element={<EmployeeTotalTask />} />
            <Route path="employee-partiallycompletedtask" element={<EmployeePartiallyCompletedTasks />} />
            <Route path="employee-profile" element={<EmployeeProfile />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
