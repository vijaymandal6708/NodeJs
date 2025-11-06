import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AssignTask = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState({});
  const [message, setMessage] = useState("");
  const [slideIn, setSlideIn] = useState(false);

  // ✅ Add popup animation styles only once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes popupScale { 
        0% { transform: scale(0.7); opacity: 0; } 
        100% { transform: scale(1); opacity: 1; } 
      }
      @keyframes fadeIn { 
        0% { opacity: 0; } 
        100% { opacity: 1; } 
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ✅ Slide animation
  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Fetch employees
  const loadUsers = async () => {
    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/empdisplay`;
      const response = await axios.get(api);
      setUsers(response.data);
    } catch (error) {
      console.error("❌ Error Loading Users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
    setMessage("");
  };

  const handleClose = () => {
    setShow(false);
    setInput({});
  };

  // ✅ Submit Task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/tasksave`;
      await axios.post(api, { id: selectedUser._id, ...input });

      setMessage("✅ Task assigned successfully!");
      setTimeout(() => handleClose(), 1500);
    } catch (error) {
      setMessage("❌ Failed to assign task.");
    }
  };

  const rows = users.map((user, index) => (
    <tr
      key={user._id}
      style={{
        height: "70px",
        background: "#fff",
        transition: "0.3s ease",
        textAlign: "center",
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "#f3f0ff")}
      onMouseOut={(e) => (e.currentTarget.style.background = "#ffffff")}
    >
      <td></td>
      <td
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingTop: "26px",
        }}
      >
        <span style={{ color: "#7a6cf5", fontWeight: "600" }}>
          {index + 1}.
        </span>
        <span>{user.name}</span>
      </td>
      <td>{user.email}</td>
      <td>{user.designation}</td>

      <td>
        <Button
          size="sm"
          style={{
            background: "linear-gradient(90deg, #7a6cf5, #9a8bff)",
            border: "none",
            borderRadius: "8px",
            padding: "10px 14px",
            fontWeight: "550",
            color: "white",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #6e5ff3, #8e7efb)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #7a6cf5, #9a8bff)")
          }
          onClick={() => handleShow(user)}
        >
          Assign Task
        </Button>
      </td>
    </tr>
  ));

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f3f0ff, #ebe6ff)",
        padding: "20px 50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        className="mb-4 fw-bold"
        style={{ color: "#6c63ff", fontSize: "23px", fontStyle: "italic", marginLeft:"350px", marginTop:"0px"}}
      >
        Assign Task to Employees
      </h2>

      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "20px 25px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transform: slideIn ? "translateY(0)" : "translateY(60px)",
          opacity: slideIn ? 1 : 0,
          transition: "0.8s ease",
        }}
      >
        <Table
          bordered
          hover
          responsive="md"
          className="shadow-sm text-center align-middle"
          style={{
            width: "100%",
            borderSpacing: "0 10px",
            borderRadius: "12px",
          }}
        >
          <thead
            style={{
              background: "linear-gradient(90deg, #7a6cf5, #9a8bff)",
              color: "#fff",
            }}
          >
            <tr style={{ height: "55px" }}>
              <th></th>
              <th style={{ textAlign: "left" }}>Employee Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>

      {/* ✅ CUSTOM CENTERED POPUP */}
      {show && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.25)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000,
            animation: "fadeIn 0.25s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "420px",
              maxWidth: "92vw",
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              animation: "popupScale 0.25s ease",
            }}
          >
            {/* ✅ Popup Header */}
            <div
              style={{
                background: "linear-gradient(90deg, #6a5ae0, #877af5)",
                padding: "14px 20px",
                color: "white",
                fontWeight: 600,
                fontSize: "18px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Assign Task – {selectedUser?.name}</span>

              <span
                onClick={handleClose}
                style={{
                  fontSize: "22px",
                  cursor: "pointer",
                  opacity: 0.9,
                }}
              >
                ×
              </span>
            </div>

            {/* ✅ Popup Body */}
            <div style={{ padding: "25px 30px" }}>
              <Form onSubmit={handleSubmit}>
                <style>
                  {`
                    .popup-input {
                      padding: 10px 12px;
                      border-radius: 10px;
                      border: 1px solid #d8d4f7;
                      font-size: 14px;
                      transition: 0.2s;
                    }
                    .popup-input:focus {
                      border-color: #7a6cf5;
                      box-shadow: 0 0 6px rgba(122,108,245,0.3);
                    }
                  `}
                </style>

                <Form.Group className="mb-3">
                  <Form.Label>Task Title  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                  <Form.Control
                    className="popup-input"
                    type="text"
                    name="task"
                    onChange={handleInput}
                    required
                  />
                </Form.Group> <br />

                <Form.Group className="mb-3">
                  <Form.Label>Duration (in days) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                  <Form.Control
                    className="popup-input"
                    type="number"
                    name="duration"
                    onChange={handleInput}
                    required
                  />
                </Form.Group> <br />

                <Form.Group className="mb-3">
                  <Form.Label>Priority &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
                  <Form.Select
                    className="popup-input"
                    name="priority"
                    onChange={handleInput}
                    required
                  >
                    <option value="">Select priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group> <br />

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: "linear-gradient(90deg, #6a5ae0, #8a7bf8)",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    marginTop: "10px",
                    marginLeft: "120px"
                  }}
                >
                  Assign Task
                </Button>
              </Form>

              {message && (
                <p
                  className="mt-2 text-center fw-semibold"
                  style={{ color: message.includes("✅") ? "green" : "red" }}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTask;
