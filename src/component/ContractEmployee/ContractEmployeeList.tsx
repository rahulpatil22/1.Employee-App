import React, { useState, useEffect } from "react";
import ContractEmployee from "./ContractEmployee";
import { IContract, PageEnum, UserContextType } from "../Type/Employee.type";
import { UserContext } from "../Context/EmployeeContext";
import "../ContractEmployee/AddContractEmployee";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import UpdateContractEmployee from "./UpdateEmployee";

const ContractEmployeeList = () => {
  var retrieveData = localStorage.getItem("storage");
  var contractemployeelist = JSON.parse(retrieveData || "");

  // const { users } = React.useContext(UserContext) as UserContextType;

  const [userList, setUserList] = useState(contractemployeelist);
  // console.log("ContractEmployeeList",userList);

  const [userData, setUserData] = useState<IContract | {}>();

  const [displayPage, setDisplayPage] = useState(PageEnum.clist);

  const [dataToUpdate, setDataToUpdate] = useState({} as IContract);

  // let navigate = useNavigate();

  const deleteUser = async(id: number) => {
    const newList = userList.filter((l: any) => l.id !== id);
    localStorage.setItem("storage", JSON.stringify(newList));
    setUserList(newList);
    var retrieveData = localStorage.getItem("storage");
    console.log("Hii",retrieveData);
  };

  const updateData = (users: IContract) => {
    setDisplayPage(PageEnum.editcontract);
    setDataToUpdate(users);
  
  };

  const editedData = (users: IContract) => {
    const filteredUserData = userList.filter((x: any) => x.id === users.id)[0];

    const indexOfUserRecord = userList.indexOf(filteredUserData);

    const tempUser = [...userList];
    tempUser[indexOfUserRecord] = users;
    setUserList(tempUser);
    setDisplayPage(PageEnum.clist);
    localStorage.setItem("storage",JSON.stringify(tempUser));
    // contractUserPage();
  };

  // const contractUserPage = () => {
  //   navigate("/contractemployeelist");
  // };

  return (
    <>
      {displayPage === PageEnum.clist && (
        <>
          <div>
            <h3 data-testid="pageheading"className="heading">Contractual Employee</h3>
          </div>
          <div className="column">
        <div className="card-container">
            {userList.map((user: IContract) => (
              <ContractEmployee
                key={user.id}
                user={user}
                onRemove={deleteUser}
                onUpdate={updateData}
              />
            ))}
            </div>
          </div>
        </>
      )}

      {displayPage === PageEnum.editcontract && (
        <UpdateContractEmployee
          users={dataToUpdate}
          onEditClickHnd={editedData}
        />
      )}
    </>
  );
};
export default ContractEmployeeList;
