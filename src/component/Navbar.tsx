import { NavLink } from 'react-router-dom';
import './Navbar.style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-dashboard-title'>
      <NavLink to="/"     className="link" style={({ isActive }) => { return { color: isActive ? "red" : "" } }}>Dashboard</NavLink>
      </div>
      

      {/* <div className="dashboard-title"></div> */}
      <NavLink to="/addemployee" className="link" style={({ isActive }) => { return { color: isActive ? "red" : "" } }} >
        Add Employee
      </NavLink>
    </div>
  );
};

export default Navbar;
