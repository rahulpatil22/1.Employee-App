export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    designation: string;
    
}

export interface contractualEmployee {
    name: string,
    age: number,
}
export type TodoContextType = {
    todos: contractualEmployee[];
    saveTodo: (todo: contractualEmployee) => void;
    
  };

export enum PageEnum {
    list,
    add,
    edit,
}