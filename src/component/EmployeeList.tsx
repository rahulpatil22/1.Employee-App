import { IEmployee } from './Employee.type';
import './EmployeeList.style.css';
import React, { useState } from 'react';
import EmployeeModal from './EmployeeModal';


type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToshow, setDataToshow] = useState(
    null as IEmployee | null
  );
  const viewEmployee = (data: IEmployee) => {
    setDataToshow(data);
    setShowModal(true);
  };
  const onCloseModal = () => setShowModal(false);

  return (
    <>
      
      <div className="card-container">
        {list.map((employee, index) => {
          return (
            <div key={'' + index}>
              {/* <div className="card-container">
                <div className="card-title">
                  {'First Name : ' + employee.firstName}
                </div>
                <div className="card-details">
                  {'Last Name : ' + employee.lastName}
                </div>
                <div className="card-details">
                  {'Email : ' + employee.email}
                </div>
                <div className="card-details">
                  {'Designation : ' + employee.designation}
                </div>
                <div>
                  <input
                    type="button"
                    className="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="button"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </div> */}
              <div className="row">
                <div className="card green">
                  <div className="card-info-container">
                    <div className="card-title">
                      {'First Name : ' + employee.firstName}
                    </div>
                    <div className="card-title">
                      {'Last Name : ' + employee.lastName}
                    </div>
                    <div className="card-title">
                      {'Email : ' + employee.email}
                    </div>
                    <div className="card-title">
                      {'Designation : ' + employee.designation}
                    </div>
                  </div>
                  <div className="card-button-container">
                    <input
                      type="button"
                      className="card-button "
                      value="Edit"
                      onClick={() => onEdit(employee)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      className="card-button "
                      onClick={() => onDeleteClickHnd(employee)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {showModal && dataToshow !== null && (
          <EmployeeModal onClose={onCloseModal} data={dataToshow} />
        )}
      </div>
    </>
  );
};

export default EmployeeList;
