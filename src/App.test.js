import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders 'Username'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
