import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContract } from "../Type/Employee.type"

type Props = {
    users: IContract;
    onEditClickHnd:(users: IContract) => void
}

const UpdateContractEmployee = (props: Props) => {

    const { users, onEditClickHnd } = props;

    // let navigate = useNavigate();


    const [firstname, setfirstName] = useState(users.firstname);
    const [lastname, setlastName] = useState(users.lastname);
    const [emailAdd, setEmailAdd] = useState(users.email);
    const [designationName, setDesignationName] = useState(users.designation);

    const onfirstNameChangeHnd = (e:any) => {
        setfirstName(e.target.value);
    };
    const onlastNameChangeHnd = (e:any) => {
        setlastName(e.target.value);
    };

    const onEmailAddChangeHnd = (e:any) => {
        setEmailAdd(e.target.value);
    };

    const onDesignationNameChangeHnd = (e:any) => {
        setDesignationName(e.target.value);
    }

    const onUpdateBtnClick = (e:any) => {
        e.preventDefault();

        const updatedUsersData:IContract = {
            id: users.id,
           firstname: firstname,
           lastname: lastname,
            email:emailAdd,
            designation:designationName
        }

        onEditClickHnd(updatedUsersData);
        // contractUserPage();
    }

    

    return (
       
        <>
        <div className="form">
        <div>
          <h3 className="heading">Update Employee Form</h3>
        </div>
        <form onSubmit={onUpdateBtnClick}>
          <label htmlFor="fname">
            <b>First name :</b>{" "}
          </label>
          <input
            type="text"
            onChange={onfirstNameChangeHnd}
            id="firstname"
            value={firstname}
            required
            pattern={"[A-Za-z]+"}
            title="Must contain alphabets only, numbers not allowed"
          />

          <label htmlFor="lname">
            <b>Last Name :</b>{" "}
          </label>
          <input
            type="text"
            onChange={onlastNameChangeHnd}
            id="lastname"
            value={lastname}
            required
            pattern="[A-Za-z]+"
            title="Must contain alphabets only, numbers not allowed"
          />

          <label htmlFor="email">
            <b>Email :</b>{" "}
          </label>
          <input
            type="text"
            onChange={onEmailAddChangeHnd}
            id="email"
            value={emailAdd}
            required
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            title="Must contain alphabets followed by @ and ."
          />

          <label htmlFor="designation">
            <b>Designation :</b>{" "}
          </label>
          <input
            type="text"
            onChange={onDesignationNameChangeHnd}
            id="designation"
            value={designationName}
            required
            pattern="[A-Za-z0-9-]+"
            title="Must contain alphabets or numbers are allowed"
          />

          {/* <input type="button" className="back-btn" value="Add Employee" /> */}
          {/* <input type="submit" className="btn" value="Submit" /> */}
          {/* <button className="back-btn">Add Employee</button> */}

          <input type="submit" className="btn" value="Update" />
        </form>
      </div>
        </>
    )
}

export default UpdateContractEmployee