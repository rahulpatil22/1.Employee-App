import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//  import './AddEmployee.style.css';
import { IEmployee } from '../Type/Employee.type';
import Navbar from '../NavBar/Navbar';


type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props:Props) => {
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
   {/* <div className='employeepage'></div>  */}
    {/* <Navbar /> */}
    <div className="form-container">
      <div>
        <h3 className="heading"> Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>

        <label htmlFor="fname"><b>First name :</b> </label>
        <input type="text"  value={firstName} onChange={onFirstNameChangeHnd} required pattern={"[A-Za-z]+"} title="Must contain alphabets only, numbers not allowed"  />

        <label htmlFor="lname"><b>Last Name :</b> </label>
        <input type="text"  value={lastName} onChange={onLastNameChangeHnd} required pattern="[A-Za-z]+" title="Must contain alphabets only, numbers not allowed"  />

        <label htmlFor="email"><b>Email :</b> </label>
        <input type="text"  value={email} onChange={onEmailChangeHnd} required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" title="Must contain alphabets followed by @ and ." />

        <label htmlFor="designation"><b>Designation :</b> </label>
        <input type="text"  value={designation} onChange={OnDesignationChangeHnd} required pattern="[A-Za-z0-9-]+" title="Must contain alphabets or numbers are allowed"  />

        <input type="button" className="back-btn" value="Back" aria-label="BackButton" onClick={onBack} />
        <input type="submit" className="btn" value="Submit" aria-label="SubmitButton"/>

      </form>
    </div>
    </>
  );
};

export default AddEmployee;






