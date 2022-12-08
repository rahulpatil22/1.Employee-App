import React, { useState } from "react";
import { IContract, UserContextType } from "../Type/Employee.type";
import { UserContext } from "../Context/EmployeeContext";
import Navbar from "../NavBar/Navbar";
import "../ContractEmployee/AddContractEmployee.style.css";
import { useNavigate } from "react-router-dom";

const AddContractEmployee = () => {
  const { saveUser } = React.useContext(UserContext) as UserContextType;

  const [userData, setUserData] = useState<IContract | {}>();

  let navigate = useNavigate();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setUserData({
      ...userData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveUser = (e: React.FormEvent, userData: IContract | any) => {
    e.preventDefault();
    saveUser(userData);
    navigateEmployeeList();
  };

  const navigateEmployeeList = () => {
    navigate("/contractemployeelist");
  };

  return (
    <>
      <Navbar />

      <div className="form">
        <div>
          <h3 className="heading"> Employee Form</h3>
        </div>
        <form onSubmit={(e) => handleSaveUser(e, userData)}>
          <label htmlFor="fname">
            <b>First name :</b>{" "}
          </label>
          <input
            type="text"
            onChange={handleForm}
            id="firstname"
            required
            pattern={"[A-Za-z]+"}
            title="Must contain alphabets only, numbers not allowed"
          />

          <label htmlFor="lname">
            <b>Last Name :</b>{" "}
          </label>
          <input
            type="text"
            onChange={handleForm}
            id="lastname"
            required
            pattern="[A-Za-z]+"
            title="Must contain alphabets only, numbers not allowed"
          />

          <label htmlFor="email">
            <b>Email :</b>{" "}
          </label>
          <input
            type="text"
            onChange={handleForm}
            id="email"
            required
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            title="Must contain alphabets followed by @ and ."
          />

          <label htmlFor="designation">
            <b>Designation :</b>{" "}
          </label>
          <input
            type="text"
            onChange={handleForm}
            id="designation"
            required
            pattern="[A-Za-z0-9-]+"
            title="Must contain alphabets or numbers are allowed"
          />

          {/* <input type="button" className="back-btn" value="Add Employee" /> */}
          {/* <input type="submit" className="btn" value="Submit" /> */}
          <button className="back-btn">Add Employee</button>
        </form>
      </div>
    </>
  );
};

export default AddContractEmployee;
