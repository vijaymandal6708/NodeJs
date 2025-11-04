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
        setMessage(response.data.msg);
        e.target.reset();
      } else {
        setMessage("⚠️ Something went wrong: " + (response.data.msg || ""));
      }
    } catch (error) {
      console.error("❌ Axios Error:", error);
      setMessage("❌ Server Error. Check console for details.");
    }
  };

  const styles = {
    page: {
      minHeight: "60vh",
      background: "linear-gradient(135deg, #f8f6ff, #f3f0ff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Poppins, sans-serif",
      paddingTop: "40px",
      overflow: "hidden",
    },
    form: {
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "380px",
      padding: "23px 22px",
      display: "flex",
      flexDirection: "column",
      transform: slideIn ? "translate(0, 0)" : "translate(-100vw, 0)",
      opacity: slideIn ? 1 : 0,
      transition:
        "transform 1.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.3s ease-in-out",
    },
    heading: {
      color: "#6c63ff",
      textAlign: "center",
      marginBottom: "20px",
      fontWeight: "700",
    },
    label: {
      marginBottom: "5px",
      fontWeight: "500",
      color: "#333",
    },
    input: {
      padding: "9px 11px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      marginBottom: "18px",
      fontSize: "15px",
      transition: "0.3s",
      outline: "none",
    },
    select: {
      padding: "9px 11px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      marginBottom: "18px",
      fontSize: "15px",
      transition: "0.3s",
      outline: "none",
    },
    button: {
      background: "#6c63ff",
      color: "#fff",
      border: "none",
      padding: "9px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <form
        style={styles.form}
        onSubmit={handleSubmit}
        onFocus={(e) => {
          if (["INPUT", "SELECT"].includes(e.target.tagName)) {
            e.target.style.borderColor = "#6c63ff";
            e.target.style.boxShadow = "0 0 5px rgba(108,99,255,0.3)";
          }
        }}
        onBlur={(e) => {
          if (["INPUT", "SELECT"].includes(e.target.tagName)) {
            e.target.style.borderColor = "#ccc";
            e.target.style.boxShadow = "none";
          }
        }}
      >
        <h2 style={styles.heading}>Create New User</h2>

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

        {message && (
          <p
            style={{
              color: message.includes("successfully") ? "green" : "red",
              marginTop: "12px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default CreateUser;
