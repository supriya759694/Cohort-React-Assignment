import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
 <nav style={{ display: "flex", gap: "20px" }}>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  <Link to='/user/1'>Profile</Link>

</nav>


    <hr />

    <Outlet />

    <hr />
    
    <p> Footer @ 2026 </p>
    </>
  )
}

export default Layout