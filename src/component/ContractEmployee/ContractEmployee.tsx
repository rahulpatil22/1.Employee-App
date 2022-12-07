
import { IContract } from "../Type/Employee.type";


type Props = {
    user: IContract;
}

const ContractEmployee = (props:Props) => {

    const {user} = props;

    return (
        <div>
            <div>
                <h3>{user.firstname}</h3>
                <h3>{user.lastname}</h3>
                <h3>{user.email}</h3>
                <h3>{user.designation}</h3>
            </div>
        </div>
    )
}

export default ContractEmployee