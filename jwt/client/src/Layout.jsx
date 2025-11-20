import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{fontFamily:"system-ui"}}>
      
      <nav style={{textAlign:"left", backgroundColor:"rgba(77, 178, 224, 1)", padding:"18px", display:"flex", gap:"10px"}}>
        <Link to="home" style={linkStyle}>Home</Link>
        <Link to="home2" style={linkStyle}>Home2</Link>
        <Link to="home3" style={linkStyle}>Home3</Link>
        <Link to="registration" style={linkStyle}>Registration</Link>
        <Link to="login" style={linkStyle}>Login</Link>
        <Link to="dashboard" style={linkStyle}>Dashboard</Link>
      </nav>
       
      <Outlet></Outlet>
    </div>
  )
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  margin: "0px 4px",
  fontWeight:"600",
  fontSize:"15px",
  fontStyle:"italic",
}

export default Layout
