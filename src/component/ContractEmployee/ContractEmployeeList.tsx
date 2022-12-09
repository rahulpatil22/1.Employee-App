import React,{ useState } from "react";
import ContractEmployee from "./ContractEmployee";
import { IContract, UserContextType } from "../Type/Employee.type";
import { UserContext } from "../Context/EmployeeContext";
import "../ContractEmployee/AddContractEmployee";
import Navbar from "../NavBar/Navbar";






const ContractEmployeeList = () => {
  const { users } = React.useContext(UserContext) as UserContextType;
  const [userList, setUserList] = useState(users);
    console.log(userList);

    const deleteUser = (id: number) => {
      const newList = userList.filter((l) => l.id !== id) 
      setUserList(newList);
  }



  return (
    <>
      <Navbar />
      {/* <div className="column">
        <div className="card-container">
          {users.map((user: IContract) => { <ContractEmployee key={user.id} user={user} onRemove={deleteUser} />
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
                    <input type="button" value="Update" className="back-btn" />
                    <input type="button" value="Delete" className="back-btn" onClick={() => onRemove(user.id)}  />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default ContractEmployeeList;

