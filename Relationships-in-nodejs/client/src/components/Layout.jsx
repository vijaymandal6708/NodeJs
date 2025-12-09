import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginRight: "20px"
  }

  const navStyle = {
    backgroundColor: "#222",
    padding: "15px"
  }

  return (
    <div>

      <header style={navStyle}>
        <Link to="home" style={linkStyle}> Home </Link>
        <Link to="insert" style={linkStyle}> Insert </Link>
        <Link to="display" style={linkStyle}> Display </Link>
        <Link to="display2" style={linkStyle}> Display2 </Link>
      </header>

      <main style={{padding:"20px", minHeight:"580px"}}>
        <Outlet />
      </main>

      <footer style={{background:"#222", color:"white", textAlign:"center", padding:"10px"}}>
        © 2025 MyBooksApp
      </footer>

    </div>
  )
}

export default Layout;
