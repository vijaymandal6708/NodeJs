import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AssignTask = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState({});
  const [message, setMessage] = useState("");
  const [slideIn, setSlideIn] = useState(false);

  // 🎬 Slide-in animation
  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Fetch employees
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

  // 🔹 Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Modal controls
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
    setMessage("");
  };

  const handleClose = () => {
    setShow(false);
    setInput({});
  };

  // 🔹 Submit task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/tasksave`;
      const response = await axios.post(api, {
        id: selectedUser._id,
        ...input,
      });

      setMessage("✅ Task assigned successfully!");
      setTimeout(() => handleClose(), 2000);
    } catch (error) {
      console.error("❌ Error Assigning Task:", error);
      setMessage("❌ Failed to assign task. Try again.");
    }
  };

  // 🔹 Render employee rows
  const rows = users.map((user, index) => (
    <tr
      key={user._id}
      style={{
        height: "70px",
        borderRadius: "12px",
        marginBottom: "12px",
      }}
    >
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.designation}</td>
      <td className="text-center">
        <Button
          size="sm"
          style={{
            backgroundColor: "#6c63ff",
            border: "none",
            borderRadius: "8px",
            padding: "6px 14px",
          }}
          onMouseOver={(e) => (e.target.style.background = "#7f5af0")}
          onMouseOut={(e) => (e.target.style.background = "#6c63ff")}
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
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f3f0ff, #ebe6ff)",
        padding: "10px 50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        className="text-center mb-4 fw-bold"
        style={{ color: "#6c63ff", fontSize: "26px" }}
      >
           Assign Task to Employees
      </h2>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "20px 25px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transform: slideIn ? "translateY(0)" : "translateY(60px)",
          opacity: slideIn ? 1 : 0,
          transition:
            "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.2s ease",
        }}
      >
        <Table
          striped
          bordered
          hover
          responsive="md"
          className="shadow-sm text-center align-middle"
          style={{
            width: "100%",
            margin: "auto",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            borderRadius: "12px",
          }}
        >
          <thead
            style={{
              backgroundColor: "#6c63ff",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            <tr style={{ height: "55px" }}>
              <th></th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ background: "#faf9ff" }}>{rows}</tbody>
        </Table>
      </div>

      {/* 🔹 Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#6c63ff", fontWeight: "600" }}>
            Assign Task to {selectedUser && selectedUser.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="taskName">
              <Form.Label>Enter Task</Form.Label>
              <Form.Control
                type="text"
                name="task"
                placeholder="Task title"
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskDuration">
              <Form.Label>Duration (in days)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                placeholder="e.g. 5"
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskPriority">
              <Form.Label>Select Priority</Form.Label>
              <Form.Select name="priority" onChange={handleInput} required>
                <option value="">Select priority</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#6c63ff",
                border: "none",
              }}
              onMouseOver={(e) => (e.target.style.background = "#7f5af0")}
              onMouseOut={(e) => (e.target.style.background = "#6c63ff")}
            >
              Assign Task
            </Button>
          </Form>

          {message && (
            <p
              className="mt-3 text-center fw-semibold"
              style={{
                color: message.includes("✅") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AssignTask;
