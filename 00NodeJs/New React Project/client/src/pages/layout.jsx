import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/insert">Insert</Link>
      <Link to="/display">Display</Link>
      <Link to="/update">Update</Link>
      <hr />
      <Outlet/>
    </>
  )
}

export default Layout
