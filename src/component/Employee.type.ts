export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    designation: string;
}

// export const EmployeeListItem : IEmployee[] = [{
//     id: new Date().toJSON().toString(),
//     firstName: "Rahul",
//     lastName:"Patil",
//     email: "abc@gmail.com",
//     designation:"software Engineer"
// },
// ]

export enum PageEnum {
    list,
    add,
    edit,
}