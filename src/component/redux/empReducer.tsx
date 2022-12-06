import { IEmployee, PageEnum } from "../EmployeeType/Employee.type";


export interface EmpState {
  employeeList: IEmployee[];
  shownPage: PageEnum;
  editEmp: IEmployee;
}

const initialState = {
  employeeList: [],
  shownPage: PageEnum.list,
  editEmp: {} as IEmployee,
};

export type ADDEMP = {
  type: "ADD_EMP";
  payload: IEmployee;
};

export type UPDATEEMPS = {
  type: "UPDATE_EMP";
  payload: IEmployee[];
};

export type ADD_EMP_CLICK = {
  type: "ADD_EMP_CLICK";
  payload: PageEnum;
};

export type EDIT_EMP = {
  type: "EDIT_EMP";
  payload: IEmployee;
};

export type Action = ADDEMP | UPDATEEMPS | ADD_EMP_CLICK | EDIT_EMP;

export const empReducer = (state: EmpState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_EMP": {
      return {
        ...state,
        employeeList: [...state.employeeList, action.payload],
      };
    }
    case "UPDATE_EMP": {
      return {
        ...state,
        employeeList: action.payload,
      };
    }

    case "ADD_EMP_CLICK": {
      return {
        ...state,
        shownPage: action.payload,
      };
    }

    case "EDIT_EMP": {
      return {
        ...state,
        editEmp: action.payload,
      };
    }

    default:
      return state;
  }
};
