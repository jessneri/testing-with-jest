import { render, screen, fireEvent } from "@testing-library/react";
import FirstQuiz from "./FirstQuiz";

test("button is enabled or not", () => {
  render(<FirstQuiz />);
  // check if there are a button and a ckeckbox
  const colorButton = screen.getByRole("button");
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  // check first event that changes button to disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // test second event that changes button back to enabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
