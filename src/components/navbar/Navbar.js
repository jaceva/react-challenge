import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <h3>Navigation Bar Component</h3>
      <span>Route Links  </span>
      <Link to="/">/</Link>
      <span>  ---  </span>
      <Link to="login">/login</Link>
      <span>  ---  </span>
      <Link to="patient">/patients</Link>
      <span>  ---  </span>
      <Link to="provider">/provider</Link>
    </div>
  )
}