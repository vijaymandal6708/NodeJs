import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/");
        }
    }, []);
    
    const logout=()=>{
        localStorage.clear();
        navigate("/")
    }

  return (
    <>
      <h1>This the Dashboard Page</h1>
      <div style={{backgroundColor:"lightblue", padding:"10px", textAlign:"right    "}}>
        Welcome {localStorage.getItem("name")} ! Email: {localStorage.getItem("email")}

        <button onClick={logout}>Logout</button>
      </div>
    </>
  )
}

export default Dashboard
