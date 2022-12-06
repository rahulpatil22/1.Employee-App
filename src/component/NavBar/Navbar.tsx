import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.style.css';
import { TodoContext } from '../../ContractualEmp/NewContractEmployee/TodoProvider';
import {
  TodoContextType,
  ITodo,
} from '../../ContractualEmp/NewContractEmployee/contractEmployeeTypes';
const Navbar = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;
  console.log(todos, 'todos from navbar');
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
