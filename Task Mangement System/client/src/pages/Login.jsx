import { useState } from "react";
import axios from "axios";
import "../css/login.css"; // ✅ Import external CSS file

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usertype === "admin") {
      try {
        const api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email, password });
        console.log(response);
        alert(response.data.msg);
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.msg || "Login failed");
      }
    } else if (usertype === "employee") {
      alert("Employee login functionality coming soon!");
    } else {
      alert("Please select a valid user type.");
    }
  };

  return (
    <div className="home-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <h2 className="home-heading">User Login</h2>

        <label className="home-label">Email Address</label>
        <input
          type="email"
          className="home-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label className="home-label">Password</label>
        <input
          type="password"
          className="home-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <label className="home-label">Select User Type</label>
        <select
          className="home-select"
          value={usertype}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="">Select user type</option>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="home-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
