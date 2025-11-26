import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/dashboard");
        setUser(res.data.user);
      } catch {
        nav("/login");
      }
    })();
  }, []);

  const logout = async () => {
    await api.post("/logout");
    nav("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Hello {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
