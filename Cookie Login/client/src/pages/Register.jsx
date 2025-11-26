import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      nav("/login");
    } catch (err) {
      setError(err.response?.data?.error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submit}>
        <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button>Register</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
