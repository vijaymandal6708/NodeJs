import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      
      <nav style={{textAlign:"left", backgroundColor:"rgb(137,207,240)", padding:"15px", display:"flex", gap:"10px"}}>
        <Link to="home" style={linkStyle}>Home</Link>
        <Link to="home2" style={linkStyle}>Home2</Link>
        <Link to="registration" style={linkStyle}>Registration</Link>
        <Link to="login" style={linkStyle}>Login</Link>
        <Link to="dashboard" style={linkStyle}>Dashboard</Link>
      </nav>
       
      <Outlet></Outlet>
    </>
  )
};

const linkStyle = {
  textDecoration: "none",
  color: "rgb(23,23,23)",
  margin: "0px 4px",
  fontWeight:"600",
  fontSize:"18px",
  fontStyle:"italic",
}

export default Layout
