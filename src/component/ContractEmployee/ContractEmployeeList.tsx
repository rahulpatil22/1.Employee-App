import React from "react";
import ContractEmployee from "./ContractEmployee";
import { IContract, UserContextType } from "../Type/Employee.type";
import { UserContext } from "../Context/EmployeeContext";
import "../ContractEmployee/AddContractEmployee";
import Navbar from "../NavBar/Navbar";



const ContractEmployeeList = () => {
  const { users } = React.useContext(UserContext) as UserContextType;
 

  return (
    <>
      <Navbar />
      <div className="column">
        <div className="card-container">
          {users.map((user: IContract) => {
            return (
              <div key={""}>
                <div className="row">
                  <div className="card green">
                    <div className="card-info-container">
                      <div className="card-title">
                        {"First Name : " + user.firstname}
                      </div>
                      <div className="card-title">
                        {"Last Name : " + user.lastname}
                      </div>
                      <div className="card-title">
                        {"Email : " + user.email}
                      </div>
                      <div className="card-title">
                        {"Designation : " + user.designation}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContractEmployeeList;
