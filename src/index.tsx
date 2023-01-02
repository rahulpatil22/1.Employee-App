
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./component/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./component/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AddEmployee from "./component/AddEmployee/AddEmployee";
import { IEmployee } from "./component/Type/Employee.type";
import AddContractEmployee from "./component/ContractEmployee/AddContractEmployee";
import { UserProvider } from "./component/Context/EmployeeContext";
import ContractEmployeeList from "./component/ContractEmployee/ContractEmployeeList";
import Navbar from "./component/NavBar/Navbar";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const showListPage = () => {};

//Add

const addEmployeeHnd = (data: IEmployee) => {};
root.render(
  <React.StrictMode>
   <UserProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/addemployee"
              element={
                <AddEmployee
                  onBackBtnClickHnd={showListPage}
                  onSubmitClickHnd={addEmployeeHnd}
                />
              }
            />
            <Route path="/addcontractemployee" element={<AddContractEmployee />} />
            <Route path="/contractemployeelist" element={<ContractEmployeeList />}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
