import axios from "axios";
import { useState, useEffect } from "react";

const CreateUser = () => {
  const [input, setInput] = useState({});
  const [slideIn, setSlideIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/usercreate`;
      const response = await axios.post(api, input);
      console.log("✅ Response:", response.data);

      if (response.data.success) {
        setMessage("✅ User created successfully!");
        e.target.reset();
      } else {
        setMessage("⚠️ Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Axios Error:", error);
      setMessage("❌ Server Error. Check console for details.");
    }
  };

  // 🎨 --- Styles ---
  const styles = {
    wrapper: {
      minHeight: "63vh",
      background: "linear-gradient(135deg, #e0e7ff, #f3f0ff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Poppins, sans-serif",
      paddingTop: "60px",
      overflow: "hidden",
    },
    card: {
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "420px",
      padding: "45px 32px",
      marginTop: "-30px", // 🔼 form shifted upward
      display: "flex",
      flexDirection: "column",
      transform: slideIn
        ? "translateX(0)"
        : "translateX(-100vw)", // ⬅️ previous left-slide animation restored
      opacity: slideIn ? 1 : 0,
      transition:
        "transform 1.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.3s ease-in-out",
    },
    title: {
      textAlign: "center",
      fontSize: "26px",
      color: "#6c63ff",
      fontWeight: "700",
      marginBottom: "20px",
      letterSpacing: "0.5px",
      marginTop: "-10px",
    },
    label: {
      marginBottom: "6px",
      color: "#333",
      fontWeight: "500",
    },
    input: {
      padding: "10px 12px",
      borderRadius: "10px",
      border: "2px solid #ddd",
      fontSize: "15px",
      marginBottom: "18px",
      transition: "all 0.25s ease",
      outline: "none",
    },
    select: {
      padding: "10px 12px",
      borderRadius: "10px",
      border: "2px solid #ddd",
      fontSize: "15px",
      marginBottom: "22px",
      transition: "all 0.25s ease",
      outline: "none",
    },
    button: {
      background: "#6c63ff",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
    message: {
      marginTop: "15px",
      textAlign: "center",
      fontWeight: "500",
      color: message.includes("✅") ? "green" : "red",
    },
    glowFocus: {
      borderColor: "#6c63ff",
      boxShadow: "0 0 6px rgba(108,99,255,0.3)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <form
        style={styles.card}
        onSubmit={handleSubmit}
        onFocus={(e) => {
          if (["INPUT", "SELECT"].includes(e.target.tagName)) {
            Object.assign(e.target.style, styles.glowFocus);
          }
        }}
        onBlur={(e) => {
          if (["INPUT", "SELECT"].includes(e.target.tagName)) {
            e.target.style.borderColor = "#ddd";
            e.target.style.boxShadow = "none";
          }
        }}
      >
        <h2 style={styles.title}>Create New User</h2>

        <label style={styles.label}>Employee Name</label>
        <input
          type="text"
          name="empname"
          placeholder="Enter employee name"
          style={styles.input}
          onChange={handleInput}
          required
        />

        <label style={styles.label}>Employee Email</label>
        <input
          type="email"
          name="empemail"
          placeholder="Enter employee email"
          style={styles.input}
          onChange={handleInput}
          required
        />

        <label style={styles.label}>Designation</label>
        <select
          name="designation"
          style={styles.select}
          onChange={handleInput}
          required
        >
          <option value="">Select designation</option>
          <option value="Programmer">Programmer</option>
          <option value="Tester">Tester</option>
          <option value="Designer">Designer</option>
          <option value="DB Designer">Database Designer</option>
          <option value="Analyst">Analyst</option>
        </select>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.background = "#7f5af0")}
          onMouseOut={(e) => (e.target.style.background = "#6c63ff")}
        >
          Submit
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

export default CreateUser;
