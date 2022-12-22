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

// test("Navbar has corrent backgroundcolor", () => {
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
//   const { container } = render(<Navbar />);
//   const homeElem = getByText(container, "Dashboard");
//   expect(homeElem).toBeInTheDocument();
// });
