import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders some notes", () => {
  const { getByText } = render(<App />);
  expect(getByText(/C#/)).toBeInTheDocument();
  expect(getByText(/Ab/)).toBeInTheDocument();
});
