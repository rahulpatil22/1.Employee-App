// import React from 'react'
// import configureStore from 'redux-mock-store'
// import { mount, ReactWrapper } from 'enzyme'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import '../setupTests'
// import AddEmployee from '../AddEmployee/AddEmployee'
// import { IEmployee } from '../Type/Employee.type'

import configureStore from 'redux-mock-store' //ES6 modules


// const initialState = {}
// const mockStore = configureStore()
// let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
// let store

// describe('Addemployee test', () => {
//     const mockSubmit = jest.fn()
   
//     window.alert = jest.fn()
  
//     beforeEach(() => {
//       store = mockStore(initialState)
//       wrapper = mount(
//         <Provider store={store}>
//           <BrowserRouter>
//             <AddEmployee onBackBtnClickHnd={function (): void {
//                       throw new Error('Function not implemented.')
//                   } } onSubmitClickHnd={function (data: IEmployee): void {
//                       throw new Error('Function not implemented.')
//                   } } />
//           </BrowserRouter>
//         </Provider>
//       )
//     })
  
//     it('should be called after input is filled', () => {
//       // input first name
//       wrapper.find('#Rahul').simulate('change', {
//         target: {
//           firstName: 'Rahul',
//           value: 'firstName'
//         }
//       })
//       // input last name
//       wrapper.find('#Patil').simulate('change', {
//         target: {
//           lastName: 'Patil',
//           value: 'lastName'
//         }
//       })
//       // input eamil
//       wrapper.find('#rp@gmail.com').simulate('change', {
//         target: {
//           email: 'rp@gmail.com',
//           value: 'email'
//         }
//       })
//       // input designation
//       wrapper.find('#Engineer').simulate('change', {
//         target: {
//           designation: 'Engineer',
//           value: 'designation'
//         }
//       })
//     })
  
//     it('should be action onSubmit form', () => {
//       wrapper.find('#SubmitBtnClickHnd').simulate('submit')
//       window.alert()
//     })
//   })

// describe('add user redux', () => {
//     const mockStore = configureStore();
//     const reduxStore = mockStore();
  
//     beforeEach(() => {
//       reduxStore.clearActions();
//     });
  
//     describe('add user action', () => {
//       it('should dispatch the add user action', () => {
//           const expectedActions = [
//               {
//                   payload: IEmployee,
//                   type: 'ADD_EMP',
//               },
//           ];
//           reduxStore.dispatch(addUser(userReducerData));
  
//           expect(reduxStore.getActions()).toEqual(expectedActions);
//       });
//     });
//   });

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