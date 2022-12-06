import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home/Home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './component/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AddEmployee from './component/AddEmployee/AddEmployee';
import { IEmployee } from './component/EmployeeType/Employee.type';
import { ContractEmployeeList } from './ContractualEmp/ContractEmployeeList';
import TodoProvider from './ContractualEmp/NewContractEmployee/TodoProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const showListPage = () => {};

//Add

const addEmployeeHnd = (data: IEmployee) => {};
root.render(
  <TodoProvider>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/contractEmployeeList"
                element={<ContractEmployeeList />}
              />
              <Route
                path="/addemployee"
                element={
                  <AddEmployee
                    onBackBtnClickHnd={showListPage}
                    onSubmitClickHnd={addEmployeeHnd}
                  />
                }
              />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </TodoProvider>
);

reportWebVitals();
