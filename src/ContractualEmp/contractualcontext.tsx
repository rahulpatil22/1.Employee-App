import * as React from 'react';
import { ContractualEmpContextType, IEmployee } from './contractual.type';

export const ContractualContext = React.createContext<ContractualEmpContextType | null>(null);

const EmployeeProvider: React.FC<React.ReactNode> = ({ }) => {
  const [employees, setEmployees] = React.useState<IEmployee[]>([
    {
    id: 1 ,
    firstName: 'Ajay',
    lastName: 'Patil',
    email: 'ap@gmail.com',
    designation: 'Architect'
    },
    {
    id: 2,
    firstName: 'Sanket',
    lastName: 'Mahajan',
    email: 'sm@gmail.com',
    designation: 'Designer',
    },
  ]);

  const saveEmployee = (employee: IEmployee) => {
    const newEmployee: IEmployee = {
      id: Math.random(), 
     firstName : employee.firstName,
     lastName : employee.lastName,
      email: employee.email,
      designation: employee.designation,
    }
    setEmployees([...employees, newEmployee])
  }
  
  const updateEmployee = (id: number) => {
    employees.filter((employee: IEmployee) => {
      if (employee.id === id) {
        employee.designation = 'string',
        setEmployees([...employees])
      }
    })
  }
  return (
    <ContractualContext.Provider value={{ employees, saveEmployee, updateEmployee }}>
      
    </ContractualContext.Provider>
  );
};

export default EmployeeProvider;
