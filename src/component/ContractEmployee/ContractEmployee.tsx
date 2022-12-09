
import { IContract } from "../Type/Employee.type";




type Props = {
    user: IContract;
    onRemove:(id: number) => void
}

const ContractEmployee = (props:Props) => {

    const {user,onRemove} = props;

    return (
        <>
        {/* <div>
            <div>
                <h3><h1>First Name</h1>{user.firstname}</h3>
                <h3><h1>Last Name</h1>{user.lastname}</h3>
                <h3><h1>Email</h1>{user.email}</h3>
                <h3><h1>Designation</h1>{user.designation}</h3>

                <input type="button" value="Update" className="back-btn" />
                <input type="button" value="Delete" className="back-btn" onClick={() => onRemove(user.id)}  />
            </div>
        </div> */}
         <div className="column">
        <div className="card-container">
          {user.map((user: IContract) => { <ContractEmployee key={user.id} user={user} onRemove={deleteUser} />
            return (
              <div key={""}>
                <div className="row">
                  <div className="card green">
                    <div className="card-info-container">
                      <div className="card-title">
                        {"First Name : " + user.firstname}
                      </div>
                      <div className="card-title">
                        {"Last Name : " + user.lastname}
                      </div>
                      <div className="card-title">
                        {"Email : " + user.email}
                      </div>
                      <div className="card-title">
                        {"Designation : " + user.designation}
                      </div>
                      
                    </div>
                    <input type="button" value="Update" className="back-btn" />
                    <input type="button" value="Delete" className="back-btn" onClick={() => onRemove(user.id)}  />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    )
}

export default ContractEmployee