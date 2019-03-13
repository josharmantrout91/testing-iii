// Test away

import React from "react";
import ReactDom from "react-dom";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";
import { render } from "react-testing-library";

describe("Dashboard Component", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });
});
