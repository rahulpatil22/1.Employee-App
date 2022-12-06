import * as React from 'react';
// import { ContractualContext } from './contractualcontext';
import {
  ContractualEmpContextType,
  IEmployee,
} from './contractual.type';
// import AddEmployee from '../component/AddEmployee';

const AddEmployee: React.FC = () => {
  // const { saveEmployee } = React.useContext(ContractualContext) as ContractualEmpContextType;
  const [formData, setFormData] = React.useState<IEmployee | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveEmployee = (
    e: React.FormEvent,
    formData: IEmployee | any
  ) => {
    e.preventDefault();
    // saveEmployee(formData);
  };
  return (
    <form
      className="Form"
      onSubmit={(e) => handleSaveEmployee(e, formData)}
    >
      <div>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <input onChange={handleForm} type="text" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">LastName</label>
          <input onChange={handleForm} type="text" id="lastname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={handleForm} type="text" id="email" />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input onChange={handleForm} type="text" id="designation" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Employee
      </button>
    </form>
  );
};
export default AddEmployee;
