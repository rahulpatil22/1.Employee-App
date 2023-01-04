
import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { BrowserRouter, Form, MemoryRouter } from 'react-router-dom';
import AddEmployee from './AddEmployee'; 

import { Provider } from 'react-redux';

import userEvent from '@testing-library/user-event';
import { store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';



// describe('<AddEmployee />', () => {
//   let employee:any;
//   let onBack: any;
//   let firstname;
//   let lastname;
//   let email;
//   let designation;

// const setup = () => {
//   render(
//     <Provider store={store}>
//       <MemoryRouter>
//         <AddEmployee employee={employee} onClick={onBack} />
//       </MemoryRouter>
//     </Provider>
//   );

//   firstname = screen.getByRole('textbox', {
//     name: /first name/i,
//   });
//   lastname= screen.getByRole('textbox', {
//     name: /last name/i,
//   });
//   email = screen.getByRole('textbox', {
//     name: /email/i,
//   });
//   designation = screen.getByRole('textbox', {
//     name: /designation/i,
//   });
// };

// beforeEach(() => {
//   employee = new employee({
//     id: 1,
//     firstname: 'Mission Impossible',
//     lastname: 'This is really difficult',
//     email: 100,
//     designation:'',
//   });
//   // updatedProject = new Project({
//   //   name: 'Ghost Protocol',
//   //   description:
//   //     'Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...',
//   // });
//   onBack = jest.fn();
// });

// test('should load informtaion into form', () => {
//   setup();
//   expect(
//     screen.getByRole('form', {
//       name: /edit a data/i,
//     })
//   ).toHaveFormValues({
//     firstname: employee.firstname,
//     lastname: employee.lasttname,
//     email: employee.email,
//     designation: employee.designation,
//   });
// });
// });





// describe('<AddEmployee />', () => {

//   test('should accept input', async () => {
//     setup();
//    const user = userEvent.setup();
//     await user.clear(firstname);
//     await user.type(firstname);
//     expect(firstname).toHaveValue(updatedProject.name);

//     await user.clear(descriptionTextBox);
//     await user.type(descriptionTextBox, updatedProject.description);    expect(descriptionTextBox).toHaveValue(updatedProject.description);

//     await user.clear(budgetTextBox);
//     await user.type(budgetTextBox, updatedProject.budget.toString());
//     expect(budgetTextBox).toHaveValue(updatedProject.budget);
//   });

// });
import configureStore from 'redux-mock-store'
import { IEmployee } from '../Type/Employee.type';


describe('add user redux', () => {
    const mockStore = configureStore();
    const reduxStore = mockStore();

// You would import the action from your codebase in a real scenario
const addemployee = () => ({ type: 'ADD_EMP' })
 
it('should dispatch action', () => {
 
  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)
 
  // Dispatch the action
  store.dispatch(addemployee())
 
  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_EMP' }
  expect(actions).toEqual([expectedPayload])
})
});



test("should call back button",  async () => {
  const employeeFunction = jest.fn();
  let list;
 
  const { container } = render(
    <Provider store={store}><BrowserRouter><AddEmployee onBackBtnClickHnd={function (): void {
      throw new Error('Function not implemented.');
    } } onSubmitClickHnd={function (data: IEmployee): void {
      throw new Error('Function not implemented.');
    } } /></BrowserRouter></Provider>
  );
 const deleteButton=await screen.getByText("Submit")
  fireEvent.click(deleteButton);

  expect(employeeFunction).toHaveBeenCalled()
  
});

