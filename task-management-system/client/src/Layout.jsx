import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default Layout
