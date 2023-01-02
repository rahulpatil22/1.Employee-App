import React, { PropsWithChildren, useState } from "react";
import { IContract, UserContextType } from "../Type/Employee.type";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [users, setUsers] = useState<IContract[]>([
        // {
        //     id: 1,
        //     firstname: "Rahul",
        //     lastname: "Patil",
        //     email: "rahul@gamil.com",
        //     designation: "Developer",
        // },
    ]);
 let myBlogs
    const saveUser = (user: IContract) => {
        const newUser: IContract = {
            id: Math.random(),
            firstname: user.firstname,
            lastname:user.lastname,
            email: user.email,
            designation: user.designation,
        }
        myBlogs=newUser;

        var retrieveData = localStorage.getItem("storage");
        var contractemployeelist = JSON.parse(retrieveData || "");
        // setUsers([...users, newUser]);
        localStorage.setItem('storage',JSON.stringify([...contractemployeelist,myBlogs]));
    }
    // const setUsers =(user:IContract []) =>{
    //     setUserLis(user)
    //     window.localStorage.setItem("ContractEmployeelist",JSON.stringify(user))
    //   }
      

    return (
        <UserContext.Provider value={{users, saveUser}}>{children}</UserContext.Provider>
    )
}
