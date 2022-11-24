import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { EmpState } from './../component/redux/empReducer';
import { PageEnum } from './Employee.type';

const Header = () => {
  const shownPage = useSelector<EmpState, EmpState['shownPage']>(
    (state) => state.shownPage
  );
  const dispatch = useDispatch();

  const onAddEmployeeClickHnd = () => {
    dispatch({ type: 'ADD_EMP_CLICK', payload: PageEnum.add });
  };

  return (
    <>
      <ul>
        <div style={{ display: 'table-cell' }}>
          <li>
            <Link to="/"></Link>
            <p className="title">Home Page</p>

            {/* <input
            style={{
              float: "right",
              clear: "both",
              marginRight: 20,
              borderRadius: "5px",
              backgroundColor: "rgb(231,204,149)",
              
            }}
            type="button"
            value="Add Employee"
            className="button"
            onClick={onAddEmployeeClickHnd}
          /> */}
          </li>
        </div>
        <div style={{ display: 'table-cell', width: '90%' }}> </div>
      </ul>
      {shownPage === PageEnum.list && (
        <div
          style={{
            display: 'flex',
            float: 'right',
            clear: 'both',
          }}
        >
          {/* <input
            style={{
              float: "right",
              clear: "both",
              marginRight: 20,
              borderRadius: "5px",
              backgroundColor: "rgb(231,204,149)",
              
            }}
            type="button"
            value="Add Employee"
            className="button"
            onClick={onAddEmployeeClickHnd}
          /> */}
        </div>
      )}
    </>
  );
};

export default Header;
