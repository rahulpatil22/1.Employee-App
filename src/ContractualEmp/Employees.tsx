import * as React from 'react';
import { ContractualEmpContextType, IEmployee } from './contractual.type';
import { ContractualContext } from './contractualcontext';
import Employee from './Employee';

const Employees = () => {
  const { employees, updateEmployee } = React.useContext(ContractualContext) as ContractualEmpContextType;
  return (
    <>
      {employees.map((employee: IEmployee) => (
        <Employee key={employee.id} updateEmployee={updateEmployee} Employee={Employee} />
      ))}
    </>
  );
};

export default Employees;