import * as React from 'react';
import { IEmployee } from './contractual.type';

type Props = {
  Employee: IEmployee;
  updateEmployee: (id: number) => void;
};

const Employee: React.FC<Props> = ({ Employee, updateEmployee }) => {
  const checkEmployee: string = Employee.designation? `line-through` : '';
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkEmployee}>{Employee.firstName}</h1>
        <h1 className={checkEmployee}>{Employee.lastName}</h1>
        <h1 className={checkEmployee}>{Employee.email}</h1>
        <span className={checkEmployee}>{Employee.designation}</span>
      </div>
      <button onClick={() => updateEmployee(Employee.id)} className={Employee.designation ? `hide-button` : 'Card--button'}>
        Complete
      </button>
    </div>
  );
};
export default Employee;