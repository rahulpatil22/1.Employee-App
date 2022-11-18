import React, { useState } from "react";
import "./AddEmployee.style.css";
import { IEmployee } from "./Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

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
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };
  return (
    <div className="container">
      <div>
        <h3 style={{ textAlign: "center" }}>Add Employee</h3>
        <hr></hr>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <div style={{ float: "left", width: "30%" }}>
            <label>First Name: </label>
          </div>
          <div style={{ float: "left", width: "70%" }}>
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
          <div style={{ float: "left", width: "30%" }}>
            <label>Last Name: </label>
          </div>
          <div style={{ float: "left", width: "70%" }}>
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
          <div style={{ float: "left", width: "30%"}}>
            <label>Email:</label>
          </div>
          <div style={{ float: "left", width: "60%"}}>
            <input type="email" value={email} onChange={onEmailChangeHnd} required/>
          </div>
        </div>
        <div>
          <div style={{ float: "left", width: "30%" }}>
            <label>Designation: </label>
          </div>
          <div style={{ float: "left", width: "60%" }}>
            <input
              type="text"
              value={designation}
              onChange={OnDesignationChangeHnd}
              pattern="[A-Za-z]+"
              required
            />
          </div>
        </div>
        <div className="button-view">
          <input type="button" className="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit"  className="button" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
