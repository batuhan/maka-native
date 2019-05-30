import React from "react";
import renderer from "react-test-renderer";

import Switch from "../Switch";

describe("Switch", () => {
  it("renders correctly", () => {
    const disabled = false;
    const onValueChange = jest.fn();
    const instance = renderer.create(
      <Switch disabled={disabled} onValueChange={onValueChange} value={false} />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
