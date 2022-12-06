import React, { useState } from 'react';
import '../AddEmployee/AddEmployee'
import { IEmployee } from '../EmployeeType/Employee.type';
import { useSelector, useDispatch } from 'react-redux';
import { EmpState } from '../redux/empReducer';
type Props = {
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const data = useSelector<EmpState, EmpState['editEmp']>(
    (state) => state.editEmp
  );
  const { onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [email, setEmail] = useState(data?.email);
  const [designation, setDesignation] = useState(data?.designation);
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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      designation: designation,
      
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };
  return (
    <div className="container">
      <div>
        <h3 style={{ textAlign: 'center' }}>Edit Employee Form</h3>
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
        </div>
        <div className="button-container">
          <input
            type="button"
            className="card-button"
            value="Back"
            onClick={onBackBtnClickHnd}
          />
          <input
            type="submit"
            className="card-button"
            value="Update Employee"
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
