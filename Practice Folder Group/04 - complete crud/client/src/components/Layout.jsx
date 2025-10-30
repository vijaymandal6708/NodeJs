import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/home"> Home</Link> | 
        <Link to="/insert"> Insert</Link> | 
        <Link to="/display"> Display</Link> |
        <Link to="/search"> Search</Link> |
        <Link to="/edit"> Edit</Link> |
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default Layout

