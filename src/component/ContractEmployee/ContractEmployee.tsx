// import "./ContractEmployee.style.css"
import React from 'react';
import { IContract } from "../Type/Employee.type";


type Props = {
  user: IContract;
  onRemove: (id: number) => void;
  onUpdate: (users: IContract) => void;
};

const ContractEmployee = (props: Props) => {
  const { user, onRemove, onUpdate } = props;

  return (
    <>
      <div key={""}>
        <div className="row">
          <div className="card green">
            <div className="card-info-container">
              <div className="card-title">
                {"First Name : " + user.firstname}
              </div>
              <div className="card-title">{"Last Name : " + user.lastname}</div>
              <div className="card-title">{"Email : " + user.email}</div>
              <div className="card-title">
                {"Designation : " + user.designation}
              </div>
            </div>
            {/* <input type="button" value="Update" className="back-btn" /> */}
            <input
              type="button"
              value="Update"
              className="back-btn"
              onClick={() => onUpdate(user)}
            />
            <input
              type="button"
              value="Delete"
              className="back-btn"
              onClick={() => onRemove(user.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractEmployee;
