import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      id="username"
      name="username"
      placeholder="Text placeholder"
      type="text"
      value={value}
      onChange={onChange}
      required={required}
    />
  );

  const label = screen.getByText("Username");
  const input = screen.getByRole("textbox");

  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("for", "username");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("id", "username");
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("placeholder", "Text placeholder");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();
  render(
    <Input
      labelText="Username"
      placeholder="Text placeholder"
      name="username"
      value={value}
      onChange={handleChange}
      required={required}
    />
  );
  const input = screen.getByRole("textbox");

  await user.type(input, "Test");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
