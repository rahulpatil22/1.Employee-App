import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import React, { useState } from "react";
import EmployeeModal from "./EmployeeModal";
type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit:(data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd,onEdit } = props;
  const [showModal,setShowModal]=useState(false);
  const[dataToshow,setDataToshow]=useState(null as IEmployee | null);

  const viewEmployee=(data:IEmployee)=>{
    setDataToshow(data)
    setShowModal(true);
  }

  const onCloseModal=()=>setShowModal(false);
  return (
    <>
      {list.map((employee) => {
        return (
          <><div>
            <div className="card-container">
              <div className="card-title">{employee.firstName}</div>
              <div className="card-details">{employee.lastName}</div>
              <div className="card-details">{employee.email}</div>
              <div className="card-details">{employee.designation}</div>
              <div>
                <input type="button" className="button" value="view" onClick={()=>viewEmployee(employee)}/>
                <input type="button" className="button"value="Edit" onClick={()=>onEdit(employee)} />
                <input
                  type="button"
                  value="Delete"
                  className="button"
                  onClick={() => onDeleteClickHnd(employee)} />
              </div>
            </div>
          </div>{showModal && dataToshow !== null &&(<EmployeeModal onClose={onCloseModal} data={dataToshow} />)}</>
        );
      })}
    </>
  );
};

export default EmployeeList;
