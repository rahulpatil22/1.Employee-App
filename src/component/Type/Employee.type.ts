export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    designation: string;
    
}

//interface for contract employee
export interface IContract {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    designation: string;
}

export type UserContextType = {
    users: IContract[];
    saveUser: (user: IContract) => void;
}


export enum PageEnum {
    list,
    add,
    edit,
    clist,
    editcontract,
}