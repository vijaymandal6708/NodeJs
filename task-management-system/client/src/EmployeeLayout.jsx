import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import EmpHeader from './components/EmpHeader';
import Footer from './components/Footer';

const EmpLayout = () => {
  return (
    <>
      <EmpHeader></EmpHeader>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default EmpLayout
