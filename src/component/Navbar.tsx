import { NavLink } from 'react-router-dom';
import './Navbar.style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <NavLink to="/">Home</NavLink> */}
      <div className="dashboard-title"> Dashboard</div>
      <NavLink to="/addemployee" className="navlink-button">
        Add Employee
      </NavLink>
    </div>
  );
};

export default Navbar;
