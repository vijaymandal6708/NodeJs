import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import AdminDashBoard from "./admin/AdminDashBoard";
import CreateUser from "./admin/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone Login Page (no header/footer) */}
        <Route path="/" element={<Login />} />

        {/* Routes with Layout (header/footer visible) */}
        <Route element={<Layout />}>
          <Route path="admin-dashboard" element={<AdminDashBoard />} />
          <Route path="create-user" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
