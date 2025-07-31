import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';  // if you have a NavBar, include it

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
export default Layout;