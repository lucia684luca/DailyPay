import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders DailyPay header", () => {
  render(<App />);
  const title = screen.getByText(/DailyPay/i);
  expect(title).toBeInTheDocument();
});
