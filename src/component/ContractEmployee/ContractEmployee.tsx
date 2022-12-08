
import { IContract } from "../Type/Employee.type";



type Props = {
    user: IContract;
}

const ContractEmployee = (props:Props) => {

    const {user} = props;

    return (
        <div>
            <div>
                <h3><h1>First Name</h1>{user.firstname}</h3>
                <h3><h1>Last Name</h1>{user.lastname}</h3>
                <h3><h1>Email</h1>{user.email}</h3>
                <h3><h1>Designation</h1>{user.designation}</h3>
            </div>
        </div>
    )
}

export default ContractEmployee