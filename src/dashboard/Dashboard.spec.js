// Test away

import React from "react";

import Dashboard from "./Dashboard";
import { render } from "react-testing-library";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Dashboard />);
  });
});
