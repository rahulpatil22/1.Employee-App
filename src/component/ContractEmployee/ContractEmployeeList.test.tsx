import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  getByText,
  getByTestId,
  render,
  screen,
  
} from "@testing-library/react";
import ContractEmployeeList from "./ContractEmployeeList";


// test('check for heading', ()=> {
//     const {getByTestId} = render(<ContractEmployeeList />);

//     const heading = getByTestId('pageheading');

//     expect(heading).toBeInTheDocument();
// })

const setLocalStorage = (id: string,  data: string) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };
test('check heading', () => {
    const dataJson = [
        {
            id:"1",
            firstname:"abc",
            lastname:"abc",
            email:"abc@gmail.com",
            designation:"abc",
         },
         {
            id:"2",
            firstname:"abc",
            lastname:"abc",
            email:"abc@gmail.com",
            designation:"abc",
         }
        ]
    
    const mockId = "storage";
    const mockJson = { data:  dataJson};
    setLocalStorage(mockId, JSON.stringify(mockJson));
    render(<ContractEmployeeList />);

    const headingElement = screen.getByText("Contractual Employee");
    expect(headingElement).toBeInTheDocument();
})