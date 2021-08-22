import { render, screen, fireEvent } from "@testing-library/react";
import SecondQuiz from "./SecondQuiz";

test("button is enabled or not", () => {
  render(<SecondQuiz />);
  // check if there are a button and a ckeckbox with their labels
  const colorButton = screen.getByRole("button", { name: "Button" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // check first event that changes button to disabled and changes to color grey
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // test second event that changes button back to enabled and changes to color red
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
