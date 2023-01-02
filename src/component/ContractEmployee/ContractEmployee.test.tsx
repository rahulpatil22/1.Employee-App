import { render, screen,fireEvent } from '@testing-library/react';
import React from 'react';
import ContractEmployee from './ContractEmployee';
import userEvent from '@testing-library/user-event'


const IContract =
    {
     id: 1,
     firstname: "abc",
     lastname:  "abc",
     email:  "abc@gmail.com",
     designation:  "abc",
    }
 
it ('should call the onRemove when the button is clicked',()=>{
    const mockOnclickFunction =jest.fn();
    render(<button onClick={mockOnclickFunction}></button>)
    userEvent.click( screen.getByRole('button', { name:''}))
    expect(mockOnclickFunction).toBeCalled();
})

it ('should call the onUpdate when the button is clicked',()=>{
    const mockOnclickFunction =jest.fn();
    render(<button onClick={mockOnclickFunction}></button>)
    userEvent.click( screen.getByRole('button', { name:''}))
    expect(mockOnclickFunction).toBeCalled();
})

let onRemove;
let user;
let onUpdate;

test("should call onclick button", () => {
    const employeeFunction = jest.fn();
    let list;
    const { container } = render(
        <ContractEmployee user={IContract} onRemove={employeeFunction} onUpdate={employeeFunction} />
    );
   const deleteButton=screen.getByLabelText("DeleteButton")
    fireEvent.click(deleteButton);
  
    expect(employeeFunction).toBeCalledTimes(1);
  });


  test("should call update button", () => {
    const employeeFunction = jest.fn();
    let list;
    const { container } = render(
        <ContractEmployee user={IContract} onRemove={employeeFunction} onUpdate={employeeFunction} />
    );
   const deleteButton=screen.getByLabelText("UpdateButton")
    fireEvent.click(deleteButton);
  
    expect(employeeFunction).toBeCalledTimes(1);
  });