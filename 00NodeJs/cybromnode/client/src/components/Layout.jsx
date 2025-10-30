import React from "react";
import {Link, Outlet} from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <Link to="/home">Home</Link> |
      <Link to="/insert">Insert</Link> |
      <Link to="/display">Display</Link> |
      <Link to="/search">Search</Link> |
      <Link to="/update">Update</Link>
      <hr />
      <Outlet />
    </div>
  )
}
