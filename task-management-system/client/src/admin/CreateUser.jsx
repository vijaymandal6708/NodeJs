import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    if (response.data.success) {
      toast.success("✅ User created successfully!");
      e.target.reset();
      setInput({});
    } else {
      toast.warning("⚠️ Something went wrong.");
    }
  } catch (error) {
    console.error("Axios Error:", error);
    toast.error("❌ wrong email or user already found");
  }
};


  const styles = {
    wrapper: {
      minHeight: "63vh",
      background: "linear-gradient(135deg, #fbf4ff, #f6edff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Poppins, sans-serif",
      paddingTop: "60px",
      overflow: "hidden",
    },

    card: {
      background: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(160, 100, 200, 0.18)", // 🌸 lighter purple shadow
      width: "100%",
      maxWidth: "420px",
      padding: "45px 32px",
      marginTop: "-30px",
      display: "flex",
      flexDirection: "column",
      transform: slideIn ? "translateX(0)" : "translateX(-100vw)",
      opacity: slideIn ? 1 : 0,
      transition:
        "transform 1.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.3s ease-in-out",
      border: "1px solid rgba(180,150,230,0.25)", // lighter border
    },

    title: {
      textAlign: "center",
      fontSize: "23px",
      color: "#b065d6", // 🌸 lighter purple title
      fontWeight: "700",
      marginBottom: "20px",
      letterSpacing: "0.5px",
      marginTop: "-10px",
      fontStyle: "italic",
    },

    label: {
      marginBottom: "6px",
      color: "#8c55b8", // light violet
      fontWeight: "500",
    },

    input: {
      padding: "10px 12px",
      borderRadius: "10px",
      border: "2px solid #e5d4f7", // 🌸 very light purple border
      fontSize: "15px",
      marginBottom: "18px",
      transition: "all 0.25s ease",
      outline: "none",
      background: "#f8efff", // softer lavender
    },

    select: {
      padding: "10px 12px",
      borderRadius: "10px",
      border: "2px solid #e5d4f7",
      fontSize: "15px",
      marginBottom: "22px",
      transition: "all 0.25s ease",
      outline: "none",
      background: "#f8efff",
    },

    button: {
      background: "#b065d6", // 🌸 soft purple button
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 4px 10px rgba(176,120,220,0.3)",
      fontStyle: "italic",
    },

    message: {
      marginTop: "15px",
      textAlign: "center",
      fontWeight: "500",
      color: message.includes("✅") ? "#2e7d32" : "#c62828",
    },

    glowFocus: {
      borderColor: "#b065d6",
      boxShadow: "0 0 6px rgba(176,120,220,0.35)", // light glow
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
  onMouseOver={(e) => (e.target.style.opacity = "0.85")}
  onMouseOut={(e) => (e.target.style.opacity = "1")}
>
  Submit
</button>


        {message && <p style={styles.message}>{message}</p>}
      </form>
      <ToastContainer position="top-right" autoClose={2000} style={{ marginTop: "50px" }} icon={false}/>
    </div>
  );
};

export default CreateUser;
