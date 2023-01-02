import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  getByText,
  getByTestId,
  render,
  screen,
  
} from "@testing-library/react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';




// test("Navbar has corrunt backgroundcolor", () => {
//    const {container} =  render(<Navbar />)

//     const colorNavbar = screen.getByRole('div', {name:'black navbar'})

//     expect(container).toHaveStyle("backgroundColor:'rgb(214 195 145)'")
// })

// afterEach(cleanup)

// test("It has to contain my navbar", () => {
//     const {container} = render(

//         <Navbar />
//     )

//     const navbarClass = Navbar().type.styledComponentId
//     const MyNavbarRoots = document.getElementsByClassName(navbarClass);
//     const style = window.getComputedStyle(MyNavbarRoots[0])

//     expect(container).toHaveStyle({backgroundColor:"rgb(214 195 145)"})
//     expect(style.color).toBe('white')
//     expect(style.padding).toBe('15px')
// })


// test("Test navbar", () => {
  //  const history = createMemoryHistory("/");
  // const { container } = render(<Navbar />, { wrapper: createRouterWrapper(history) });
  // console.log("container", container)
  // const homeElem = getByText(container, "Dashboard");
  // expect(homeElem).toBeInTheDocument();
//   history.push('/employee');
//   const component = <Router history={history}>
//   <NavLink to="/">Dashboard</NavLink>
//     <Navbar/>
// </Router>
// const ren=render(<Navbar />);
// const link=screen.getByTestId("link")
// console.log("link", link)
// });

test('it displays all the links', () => {
  const {getByTestId} = render(
  <BrowserRouter><Navbar /></BrowserRouter>);

  const navList = getByTestId('navbar-list');

  expect(navList.children.length).toBe(4);
  // expect(navList.children).toBeInTheDocument();
})
