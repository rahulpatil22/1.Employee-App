import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.style.css';
import { IEmployee, contractualEmployee } from '../EmployeeType/Employee.type';
import Navbar from '../NavBar/Navbar';
import { TodoContext } from '../../ContractualEmp/NewContractEmployee/TodoProvider';
import {
  TodoContextType,
  ITodo,
} from '../../ContractualEmp/NewContractEmployee/contractEmployeeTypes';
type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  let navigate = useNavigate();

  const dispatch = useDispatch();
  // const ok1 = React.useContext(TodoContext) as TodoContextType;
  // console.log(ok1, 'todos1');
  const { todos } = useContext(TodoContext) as TodoContextType;
  console.log(todos, 'todos from Add Employee');
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  // var contextData = React.useContext(TodoContext) as TodoContextType;

  // const userContext = useContext(UserContext);
  // console.log(userContext, 'userContext');
  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const OnDesignationChangeHnd = (e: any) => {
    setDesignation(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      designation: designation,
    };
    console.log(firstName, 'ee1');
    // onSubmitClickHnd(data);
    dispatch({ type: 'ADD_EMP', payload: data });
    onBack();
    // onBackBtnClickHnd();
  };

  const submitContractualEmployee = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      designation: designation,
    };
    console.log(firstName, 'ee1', data);

    const onBack = () => {
      navigate('/contractEmployeeList');
    };
  };

  const onBack = () => {
    navigate('/');
  };
 
  return (
    <>
      <div className="employeepage"></div>
      <Navbar />
      <div className="container">
        <div>
          <h3 className='add'>Add Employee </h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
          <div>
            <div className='first'>
              <label>First Name: </label>
            </div>
            <div className='inputfirst' > 
              <input
                type="text"
                value={firstName}
                onChange={onFirstNameChangeHnd}
                pattern="[A-Za-z]+"
                required
                title="Must contain alphabets only, numbers not allowed"
              />
            </div>
          </div>
          <div>
            <div className='last'>
              <label>Last Name: </label>
            </div>
            <div className='inputlast'>
              <input
                type="text"
                value={lastName}
                onChange={onLastNameChangeHnd}
                pattern="[A-Za-z]+"
                required
                title="Must contain alphabets only, numbers not allowed"
              />
            </div>
          </div>
          <div>
            <div className='email'>
              <label>Email: </label>
            </div>
            <div className='inputemail'>
              <input
                type="text"
                value={email}
                onChange={onEmailChangeHnd}
                required
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                title="Must contain alphabets followed by @ and ."
              />
            </div>
          </div>
          <div>
            <div className='designation'>
              <label>Designation: </label>
            </div>
            <div className='inputdesignation'>
              <input
                type="text"
                value={designation}
                onChange={OnDesignationChangeHnd}
                required
                title="Must contain alphabets "
              />
            </div>
          </div>{' '}
          <br />
          <div className="button-container">
            <input
              type="button"
              className="card-button"
              value="Back"
              onClick={onBack}
            />
            <input
              type="submit"
              className="card-button"
              value="Permanant Employee"
            />
            <input
              className="card-button"
              value="Contractual Employee"
              onClick={submitContractualEmployee}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
