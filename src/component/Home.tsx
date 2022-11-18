import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";

const Home = () => {
  const [employeeList, setEmployeeList] = useState( [] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as  IEmployee);

  useEffect(()=>{
   const listInString= window.localStorage.getItem("EmployeeList")
   if(listInString){
    _setEmployeeList(JSON.parse(listInString))
   }
  },[]);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };
  const _setEmployeeList = (list:IEmployee[]) =>{
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList",JSON.stringify(list));

  }

  //Add
  const addEmployeeHnd = (data: IEmployee) => {
   _setEmployeeList([...employeeList, data]);
  };

  //Delete
  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };
  const editEmployeeData=(data:IEmployee)=>{
    setShownPage(PageEnum.edit);
    setDataToEdit(data)
  };
  const updateData=(data:IEmployee)=>{
    const filteredData= employeeList.filter(x => x.id === data.id)[0];
    const indexOfRecord= employeeList.indexOf(filteredData);
    const tempData = [...employeeList]
    tempData[indexOfRecord]=data;
    _setEmployeeList(tempData)
  }
  return (
    <div
      style={{
        backgroundColor:"skyblue"
          ,
        height: "100vh",
        // marginTop: "-70px",
        // fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header section */}
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>

      {/* Actual content */}
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <div>
              <input
                style={{ float: "right", clear: "both" }}
                type="button"
                value="Add Employee"
                className="button"
                onClick={onAddEmployeeClickHnd}
              />
            </div>
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployeeHnd}
          />
        )}
        {shownPage === PageEnum.edit&&<EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}
      </section>
    </div>
  );
};

export default Home;
