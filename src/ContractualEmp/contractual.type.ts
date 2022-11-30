export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    designation: string;
}

export type ContractualEmpContextType = {
    employees: IEmployee[];
    saveEmployee: (employee: IEmployee) => void;
    updateEmployee: (id: number) => void;
  };