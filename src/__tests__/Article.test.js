import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // Query for the element
  const element = screen.queryByText("please pass this test");

  // Log the specific element to the console
  screen.debug(element);

  expect(element).toBeInTheDocument();
});
