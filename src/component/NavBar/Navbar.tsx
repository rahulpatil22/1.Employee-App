import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navbar.style.css";

const Navbar = () => {
  return (
    <div data-testid="navbar-list" className="navbar">
      <div className="navbar-dashboard-title" id="link">
        <NavLink to="/" className="link"> Dashboard</NavLink>
      </div>

      <NavLink to="/addemployee" className="link"> Add Employee</NavLink>
      <NavLink  to="/addcontractemployee" className="link">Add Contract Employee</NavLink>
      <NavLink className="link" to="/contractemployeelist">Contract Employee List</NavLink>
    </div>
  );
};

export default Navbar;
