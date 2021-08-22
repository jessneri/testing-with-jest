import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceNameWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  //find an element with a role of a button and text "change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be "change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enebled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button is enabled or not", () => {
  render(<App />);
  // check if there are a button and a ckeckbox
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // check first event that changes button to disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // test second event that changes button back to enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceNameWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceNameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceNameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
