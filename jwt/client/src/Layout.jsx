import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      
      <nav style={{textAlign:"center"}}>
        <Link to="home">Home |</Link>
        <Link to="login"> Login |</Link>
        <Link to="registration"> Registration</Link>
      </nav>
       
      <Outlet></Outlet>
    </>
  )
}

export default Layout
