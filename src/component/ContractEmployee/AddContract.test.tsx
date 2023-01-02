import React, { PropsWithChildren, useState } from "react";
import { render, screen } from "@testing-library/react";
import AddContractEmployee from "./AddContractEmployee";
import { UserContext, UserProvider } from "../Context/EmployeeContext";
import { IContract } from "../Type/Employee.type";
import { BrowserRouter } from "react-router-dom";

test(" shows name of employee", () => {
  let nameTextBox;

  render(
    <BrowserRouter>
      <UserProvider>
        <AddContractEmployee />
      </UserProvider>
    </BrowserRouter>
  );

  let employee;
  const first = screen.findByTestId("firstname");
  nameTextBox = screen.getByRole("form", {
    name: /Employee/i,
  });
  console.log("Fisrt name", nameTextBox);
  // expect(screen.getByLabelText('first name')).toContain('first name');
  expect(nameTextBox.getAttribute("aria-label")).toBe("Employee");
});
