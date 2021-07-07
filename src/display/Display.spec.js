// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Display from "./Display";

const mock = jest.fn();

describe("<Display />", () => {
  it("should display Locked when locked", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const lockedStatus = getByText(/locked/i);
    expect(lockedStatus).toBeTruthy();
  });
  it("should display Closed when closed", () => {
    const { getByText } = render(<Display locked={false} closed={true} />);
    const closedStatus = getByText(/closed/i);
    expect(closedStatus).toBeTruthy();
  });
  it("should display Unlocked when unlocked", () => {
    const { getByText } = render(<Display locked={false} closed={true} />);
    const lockedStatus = getByText(/unlocked/i);
    expect(lockedStatus).toBeTruthy();
  });
  it("should display Open when open", () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const closedStatus = getByText(/open/i);
    expect(closedStatus).toBeTruthy();
  });
});
