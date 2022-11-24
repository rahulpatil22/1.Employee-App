import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.style.css';
import { IEmployee } from './Employee.type';
import Navbar from './Navbar';

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

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

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
    // onSubmitClickHnd(data);
    dispatch({ type: 'ADD_EMP', payload: data });
    onBack();
    // onBackBtnClickHnd();
  };

  const onBack = () => {
    navigate('/');
  };
  return (
    <>
      <div className="container">
        <div>
          <h3 style={{ textAlign: 'center' }}>Add Employee </h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
          <div>
            <div style={{ float: 'left', width: '30%' }}>
              <label>First Name: </label>
            </div>
            <div style={{ float: 'left', width: '70%' }}>
              <input
                type="text"
                value={firstName}
                onChange={onFirstNameChangeHnd}
                pattern="[A-Za-z]+"
                required
              />
            </div>
          </div>
          <div>
            <div style={{ float: 'left', width: '30%' }}>
              <label>Last Name: </label>
            </div>
            <div style={{ float: 'left', width: '70%' }}>
              <input
                type="text"
                value={lastName}
                onChange={onLastNameChangeHnd}
                pattern="[A-Za-z]+"
                required
              />
            </div>
          </div>
          <div>
            <div style={{ float: 'left', width: '30%' }}>
              <label>Email: </label>
            </div>
            <div style={{ float: 'left', width: '60%' }}>
              <input
                type="text"
                value={email}
                onChange={onEmailChangeHnd}
                required
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              />
            </div>
          </div>
          <div>
            <div style={{ float: 'left', width: '30%' }}>
              <label>Designation: </label>
            </div>
            <div style={{ float: 'left', width: '60%' }}>
              <input
                type="text"
                value={designation}
                onChange={OnDesignationChangeHnd}
                required
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
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
