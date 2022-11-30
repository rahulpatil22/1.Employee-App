import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-dashboard-title">
        <NavLink to="/" className="link">
          Dashboard
        </NavLink>
      </div>

      <NavLink to="/addemployee" className="link">
        Add Employee
      </NavLink>
    </div>
  );
};

export default Navbar;
