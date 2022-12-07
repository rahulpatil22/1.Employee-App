import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.style.css';
import { IEmployee } from '../Type/Employee.type';
import Navbar from '../NavBar/Navbar';


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
   {/* <div className='employeepage'></div>  */}
    <Navbar />
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

        <input type="button" className="back-btn" value="Back" onClick={onBack} />
        <input type="submit" className="btn" value="Submit" />

      </form>
    </div>
    </>
  );
};

export default AddEmployee;






// <div className="container">
// <div>
//   <h3 style={{ textAlign: 'center' }}>Add Employee </h3>
// </div>
// <form onSubmit={onSubmitBtnClickHnd}>
//   <div>
//     <div style={{ float: 'left', width: '30%' }}>
//       <label>First Name: </label>
//     </div>
//     <div style={{ float: 'left', width: '70%' }}>
//       <input
//         type="text"
//         value={firstName}
//         onChange={onFirstNameChangeHnd}
//         pattern="[A-Za-z]+"
//         required
//         title="Must contain alphabets only, numbers not allowed"
//       />
//     </div>
//   </div>
//   <div>
//     <div style={{ float: 'left', width: '30%' }}>
//       <label>Last Name: </label>
//     </div>
//     <div style={{ float: 'left', width: '70%' }}>
//       <input
//         type="text"
//         value={lastName}
//         onChange={onLastNameChangeHnd}
//         pattern="[A-Za-z]+"
//         required
//         title="Must contain alphabets only, numbers not allowed"
//       />
//     </div>
//   </div>
//   <div>
//     <div style={{ float: 'left', width: '30%' }}>
//       <label>Email: </label>
//     </div>
//     <div style={{ float: 'left', width: '60%' }}>
//       <input
//         type="text"
//         value={email}
//         onChange={onEmailChangeHnd}
//         required
//         pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
//         title="Must contain alphabets followed by @ and ."
//       />
//     </div>
//   </div>
//   <div>
//     <div style={{ float: 'left', width: '30%' }}>
//       <label>Designation: </label>
//     </div>
//     <div style={{ float: 'left', width: '60%' }}>
//       <input
//         type="text"
//         value={designation}
//         onChange={OnDesignationChangeHnd}
//         required
//         title="Must contain alphabets "
//       />
//     </div>
//   </div>{' '}
//   <br />
//   <div className="button-container">
//     <input
//       type="button"
//       className="card-button"
//       value="Back"
//       onClick={onBack}
//     />
//     <input
//       type="submit"
//       className="card-button"
//       value="Permanant Employee"
//     />
//      <input
//       type="submit"
//       className="card-button"
//       value="Contractual Employee"
//     />
//   </div>
// </form>

// </div>