// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "./Controls";

const mock = jest.fn();

describe("<Controls/>", () => {
  // unlock the gate
  it("should call toggleLocked as props to Unlock gate", () => {
    const { getByText } = render(
      <Controls
        locked={true}
        closed={true}
        toggleLocked={mock}
        toggleClosed={mock}
      />
    );
    fireEvent.click(getByText(/unlock/i));
    expect(mock).toHaveBeenCalledTimes(1);
  });
  // open the gate
  it("should call toggleClosed as props to open gate when closed and unlocked", () => {
    const { getByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleLocked={mock}
        toggleClosed={mock}
      />
    );
    fireEvent.click(getByText(/open/i));
    expect(mock).toHaveBeenCalledTimes(1);
    mock.mockClear();
  });
  // lock the gate
  it("should call toggleLocked as props to lock gate when closed and unlocked", () => {
    const { getByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleLocked={mock}
        toggleClosed={mock}
      />
    );
    fireEvent.click(getByText(/lock/i));
    expect(mock).toHaveBeenCalledTimes(1);
    mock.mockClear();
  });
  // close the gate
  it("should call toggleClosed as props to open gate when closed and unlocked", () => {
    const { getByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleLocked={mock}
        toggleClosed={mock}
      />
    );
    fireEvent.click(getByText(/close/i));
    expect(mock).toHaveBeenCalledTimes(1);
    mock.mockClear();
  });
});
