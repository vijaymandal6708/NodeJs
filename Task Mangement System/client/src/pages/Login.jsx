import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      @keyframes glowPulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }
      @keyframes waveGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.95); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes sparkleMove {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes rotateOrb {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes lightRays {
        0%, 100% { opacity: 0.3; transform: rotate(0deg); }
        50% { opacity: 0.8; transform: rotate(180deg); }
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 10px rgba(156, 39, 176, 0.5); }
        50% { box-shadow: 0 0 25px rgba(156, 39, 176, 0.8); }
        100% { box-shadow: 0 0 10px rgba(156, 39, 176, 0.5); }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usertype === "admin") {
      try {
        const api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email, password });
        alert(response.data.msg);
      } catch (error) {
        alert(error.response?.data?.msg || "Login failed");
      }
    } else if (usertype === "employee") {
      alert("Employee login coming soon!");
    } else {
      alert("Please select a valid user type.");
    }
  };

  const container = {
    display: "flex",
    height: "97.8vh",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
    backgroundColor: "#f9f3fa",
  };

  const leftPanel = {
    position: "relative",
    width: "55%",
    background:
      "linear-gradient(270deg, #6a1b9a, #8e24aa, #ba68c8, #ab47bc, #7b1fa2)",
    backgroundSize: "600% 600%",
    animation: "waveGradient 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)", // reduced diagonal angle
    overflow: "hidden",
  };

  const glowingCircle = {
    position: "absolute",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 70%)",
    animation: "glowPulse 6s ease-in-out infinite",
    filter: "blur(70px)",
  };

  const orb = {
    position: "absolute",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.6), rgba(255,255,255,0))",
    top: "15%",
    left: "10%",
    animation: "rotateOrb 12s linear infinite",
    filter: "blur(4px)",
  };

  const lightRay = {
    position: "absolute",
    width: "600px",
    height: "2px",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0))",
    animation: "lightRays 8s ease-in-out infinite",
    transformOrigin: "center",
    opacity: 0.6,
  };

  const sparkle = (top, left, delay) => ({
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.9)",
    top,
    left,
    animation: `sparkleMove 6s ease-in-out infinite`,
    animationDelay: delay,
  });

  const heading = {
    fontSize: "42px",
    fontWeight: "700",
    zIndex: 2,
    textAlign: "center",
    letterSpacing: "0.5px",
    textShadow: "0 0 15px rgba(255,255,255,0.4)",
    animation: "fadeInUp 1.2s ease-out",
    fontStyle: "italic",
  };

  const tagline = {
    marginTop: "20px",
    fontSize: "18px",
    opacity: "0.9",
    textAlign: "center",
    maxWidth: "380px",
    lineHeight: "1.6",
    zIndex: 2,
    animation: "float 6s ease-in-out infinite",
    fontStyle: "italic",
  };

  const rightPanel = {
    flex: 1,
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "-8%",
  };

  const formBox = {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    padding: "50px 45px",
    width: "380px",
    textAlign: "center",
    animation: "fadeInUp 1s ease-out",
    backdropFilter: "blur(10px)",
  };

  const title = {
    fontSize: "26px",
    fontWeight: "700",
    color: "#6a1b9a",
    marginBottom: "25px",
    fontStyle: "italic",
  };

  const label = {
    display: "block",
    textAlign: "left",
    color: "#4a148c",
    fontWeight: "500",
    fontSize: "14px",
    marginBottom: "6px",
  };

  const input = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1c4e9",
    marginBottom: "18px",
    fontSize: "15px",
    backgroundColor: "#f9f3fa",
    outline: "none",
    transition: "0.3s ease",
  };

  const select = { ...input, cursor: "pointer" };

  const button = {
    backgroundColor: "#8e24aa",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontSize: "16px",
    width: "100%",
    cursor: "pointer",
    fontWeight: "600",
    animation: "pulse 2.5s infinite",
    transition: "all 0.3s ease",
    fontStyle: "italic",
  };

  const handleFocus = (e) => {
    e.target.style.border = "1px solid #8e24aa";
    e.target.style.boxShadow = "0 0 10px rgba(142,36,170,0.3)";
  };

  const handleBlur = (e) => {
    e.target.style.border = "1px solid #d1c4e9";
    e.target.style.boxShadow = "none";
  };

  const handleHover = (e, enter) => {
    e.target.style.backgroundColor = enter ? "#9c27b0" : "#8e24aa";
    e.target.style.transform = enter ? "scale(1.05)" : "scale(1)";
  };

  return (
    <div style={container}>
      {/* Left Animated Section */}
      <div style={leftPanel}>
        <div style={glowingCircle}></div>
        <div style={orb}></div>
        <div style={{ ...lightRay, top: "30%" }}></div>
        <div style={{ ...lightRay, top: "70%", animationDelay: "3s" }}></div>
        {[
          ["10%", "15%"],
          ["30%", "60%"],
          ["70%", "25%"],
          ["85%", "80%"],
          ["50%", "40%"],
          ["20%", "80%"],
        ].map(([top, left], i) => (
          <div key={i} style={sparkle(top, left, `${i}s`)}></div>
        ))}

        <h1 style={heading}>Empower Your Workflow&nbsp; &nbsp; &nbsp; &nbsp;</h1>
        <p style={tagline}>
          Stay organized, collaborate effortlessly, and achieve more with clarity and confidence.
          Your productivity journey begins here.
        </p>
      </div>

      {/* Right Form Section */}
      <div style={rightPanel}>
        <form style={formBox} onSubmit={handleSubmit}>
          <h2 style={title}>Login to Continue</h2>

          <label style={label}>Email Address</label>
          <input
            type="email"
            style={input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label style={label}>Password</label>
          <input
            type="password"
            style={input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <label style={label}>Select User Type</label>
          <select
            style={select}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select user type</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            style={button}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
