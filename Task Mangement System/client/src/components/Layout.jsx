import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/home"> Home</Link> |
        <Link to="/about"> About</Link> |
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
