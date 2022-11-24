import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './component/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AddEmployee from './component/AddEmployee';
import { IEmployee } from './component/Employee.type';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const showListPage = () => {
  // dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.list });
  // dispatch({ type: "EDIT_EMP", payload: null });
};

//Add
const addEmployeeHnd = (data: IEmployee) => {
  // dispatch({ type: "ADD_EMP", payload: data });
  // dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.list });
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
