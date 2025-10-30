import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/insert">Insert</Link> <br />
        <Link to="/display">Display</Link>
      </nav>

      <Outlet></Outlet>
    </div>
  )
}

export default Layout
