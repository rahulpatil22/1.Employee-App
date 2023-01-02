import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  getByText,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import EmployeeList from "./EmployeeList";
import { IEmployee } from "../Type/Employee.type";
import { BrowserRouter } from "react-router-dom";


let editButton;
let list;
let deleteButton;

const employee =[
   {
    id: "1",
    firstName: "abc",
    lastName:  "abc",
    email:  "abc@gmail.com",
    designation:  "abc",
   }
]
// test('checking button', async () => {
   
    
//     render(
//         // <BrowserRouter>
//             <EmployeeList list={employee} onDeleteClickHnd={()=>jest.fn} onEdit={()=>jest.fn}/>
//         // </BrowserRouter>
//     )

//     editButton = await screen.getByRole('button', {
//         name: /Button/i,hidden:true
//     })
//     deleteButton = await screen.getByRole('button', {
//         name: /Button/i,hidden:true
//     })

//     expect(editButton.getAttribute('aria-label')).toBe('Button');

// })

test("should call onclick button", () => {
    const employeeFunction = jest.fn();
    let list;
    const { container } = render(
      <EmployeeList list={employee} onDeleteClickHnd={employeeFunction} onEdit={employeeFunction} />
    );
   const deleteButton=screen.getByLabelText("DeleteButton")
    fireEvent.click(deleteButton);
  
    expect(employeeFunction).toBeCalledTimes(1);
  });


  test("should call onclick button", () => {
    const employeeFunction = jest.fn();
    let list;
    const { container } = render(
      <EmployeeList list={employee} onDeleteClickHnd={employeeFunction} onEdit={employeeFunction} />
    );
   const deleteButton=screen.getByLabelText("EditButton")
    fireEvent.click(deleteButton);
  
    expect(employeeFunction).toBeCalledTimes(1);
  });