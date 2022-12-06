// import * as React from 'react';
// import {
//   ContractualEmpContextType,
//   IEmployee,
// } from './contractual.type';

// export const ContractualContext =
//   React.createContext<ContractualEmpContextType | null>(null);

// function EmployeeProvider({}) {
//   const [employees, setEmployees] = React.useState<IEmployee[]>([
//     {
//       id: 1,
//       firstName: 'Ajay',
//       lastName: 'Patil',
//       email: 'ap@gmail.com',
//       designation: 'Architect',
//     },
//     {
//       id: 2,
//       firstName: 'Sanket',
//       lastName: 'Mahajan',
//       email: 'sm@gmail.com',
//       designation: 'Designer',
//     },
//   ]);

//   const saveEmployee = (employee: IEmployee) => {
//     const newEmployee: IEmployee = {
//       id: Math.random(),
//       firstName: employee.firstName,
//       lastName: employee.lastName,
//       email: employee.email,
//       designation: employee.designation,
//     };
//     setEmployees([...employees, newEmployee]);
//   };

//   const updateEmployee = (id: number) => {
//     // employees.filter((employee: IEmployee) => {
//     //   if (employee.id === id) {
//     //     (employee.designation = 'string'),
//     //       setEmployees([...employees]);
//     //   }
//     // });
//   };
//   return (
//     <ContractualContext.Provider
//       value={{ employees, saveEmployee, updateEmployee }}
//     >
//       <div>Hii</div>
//     </ContractualContext.Provider>
//   );
// }

// export default EmployeeProvider;

// import React, { useState, createContext } from 'react';

// export type AuthUser = {
//   name: string;
//   email: string;
// };

// type UserContextType = {
//   user: AuthUser[];
//   setUser: React.Dispatch<React.SetStateAction<AuthUser[]>>;
// };

// type UserContextProviderProps = {
//   children: React.ReactNode;
// };

// export const UserContext = createContext<UserContextType[]>([]);

// export const UserContextProvider = ({
//   children,
// }: UserContextProviderProps) => {
//   const [user, setUser] = React.useState<AuthUser[]>([
//     {
//       name: 'string',
//       email: '10',
//     },
//   ]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import React from 'react';

const contractualcontext = () => {
  return <div>contractualcontext</div>;
};

export default contractualcontext;
