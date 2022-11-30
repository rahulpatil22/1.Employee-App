import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EmpState } from "./../component/redux/empReducer";
import { PageEnum } from "./Employee.type";

type Props = {
  title: string;
};
const Header = (props: Props) => {
  const { title } = props;
  const shownPage = useSelector<EmpState, EmpState["shownPage"]>(
    (state) => state.shownPage
  );
  const dispatch = useDispatch();

  const onAddEmployeeClickHnd = () => {
    dispatch({ type: "ADD_EMP_CLICK", payload: PageEnum.add });
  };

  return (
    <>
      <ul>
        <div style={{ display: "table-cell" }}>
          <li>
            <Link to="/"></Link>
            <p className="title">{props.title}</p>
          </li>
        </div>
        <div style={{ display: "table-cell", width: "90%" }}> </div>
      </ul>
      {shownPage === PageEnum.list && (
        <div
          style={{
            display: "flex",
            float: "right",
            clear: "both",
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
