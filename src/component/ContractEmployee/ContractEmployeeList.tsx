import React from "react"
import ContractEmployee from "./ContractEmployee";
import { IContract, UserContextType } from "../Type/Employee.type"
import { UserContext } from "../Context/EmployeeContext"


const ContractEmployeeList = () => {
    const {users} = React.useContext(UserContext) as UserContextType;

    return (
        <>
            {users.map((user: IContract) => (
                <ContractEmployee key={user.id} user={user}/>
            ))}
        </>
    )
}

export default ContractEmployeeList