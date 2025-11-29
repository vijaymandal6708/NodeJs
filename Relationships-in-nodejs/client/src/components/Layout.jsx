import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Link to="home">Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        <Link to="display2">Display2</Link>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>  
    </div>
  )
}

export default Layout
