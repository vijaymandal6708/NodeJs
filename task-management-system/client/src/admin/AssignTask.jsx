// ✅ ONLY NEW ADDITIONS: Toastify imports + toast in submit

import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// ✅ Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignTask = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState({});
  const [slideIn, setSlideIn] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 120);
    return () => clearTimeout(timer);
  }, []);

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
  };

  const handleClose = () => {
    setShow(false);
    setInput({});
  };

  // ✅ Toastify integrated here
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/tasksave`;
      await axios.post(api, { id: selectedUser._id, ...input });

      toast.success(" Task Assigned Successfully!", {
        style: {
          background: "white",
          color: "#4CAF50",
          fontWeight: "500",
          borderRadius: "10px",
          marginTop:"50px",
          paddingLeft:"20px",
          fontSize:"14px"
        },
      });

      handleClose();
    } catch (error) {
      toast.error(" Failed To Assign Task!", {
        style: {
          background: "#ffdfdf",
          color: "#c30000",
          fontWeight: "600",
          marginTop:"50px",
        },
      });
    }
  };

  const rows = users.map((user, index) => (
    <tr
      key={user._id}
      style={{
        height: "70px",
        background: "#ffffff",
        transition: "0.25s ease",
        textAlign: "center",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "#e4c1ff";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <td
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          paddingTop: "26px",
          paddingLeft: "35px",
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
            background: "linear-gradient(90deg, #b689f0, #cba3ff)",
            border: "none",
            borderRadius: "8px",
            padding: "10px 14px",
            fontWeight: "550",
            color: "white",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #a875eb, #bc95fa)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #b689f0, #cba3ff)")
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
      {/* ✅ Toast container */}
      <ToastContainer position="top-right" theme="colored" />

      <h2
        className="mb-4 fw-bold"
        style={{
          color: "#b683d8",
          fontSize: "23px",
          fontStyle: "italic",
          marginLeft: "350px",
          marginTop: "0px",
        }}
      >
        Assign Task to Employees
      </h2>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          padding: "20px 25px",
          boxShadow: "0 6px 20px rgba(122,108,245,0.20)",
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
            borderRadius: "12px",
          }}
        >
          <thead
            style={{
              background: "linear-gradient(90deg, #b689f0, #cba3ff)",
              color: "white",
              fontStyle: "italic",
            }}
          >
            <tr style={{ height: "55px" }}>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </Table>
      </div>

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
              boxShadow: "0 10px 25px rgba(122,108,245,0.25)",
              animation: "popupScale 0.25s ease",
            }}
          >
            <div
              style={{
                background: "linear-gradient(90deg, #7a6cf5a7, #9a8bff92)",
                padding: "14px 20px",
                color: "white",
                fontWeight: 600,
                fontSize: "18px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
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
                }}
              >
                ×
              </span>
            </div>

            <div style={{ padding: "25px 30px" }}>
              <Form onSubmit={handleSubmit}>
                <style>
                  {`
                    .popup-input {
                      padding: 10px 12px;
                      border-radius: 5px;
                      border: 1px solid #d6ccff;
                      font-size: 14px;
                      transition: 0.25s;
                    }
                    .popup-input:focus {
                      border-color: #7a6cf5;
                      box-shadow: 0 0 6px rgba(122,108,245,0.4);
                    }
                  `}
                </style>

                <Form.Group className="mb-3">
                  <Form.Label style={{marginRight:"80px"}}>Task Title</Form.Label>
                  <Form.Control
                    className="popup-input"
                    type="text"
                    name="task"
                    onChange={handleInput}
                    required
                  />
                </Form.Group> <br />

                <Form.Group className="mb-3">
                  <Form.Label style={{marginRight:"20px"}}>Duration (in days)</Form.Label>
                  <Form.Control
                    className="popup-input"
                    type="number"
                    name="duration"
                    onChange={handleInput}
                    required
                  />
                </Form.Group> <br />

                <Form.Group className="mb-3">
                  <Form.Label style={{marginRight:"130px"}}>Priority</Form.Label>
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
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: "linear-gradient(90deg, #6d5df7bd, #9a8bff7d)",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    fontWeight: 600,
                    marginTop: "10px",
                    marginLeft: "120px",
                  }}
                >
                  Assign Task
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTask;
