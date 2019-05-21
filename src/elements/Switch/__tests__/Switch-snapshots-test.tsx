import React from "react";
import renderer from "react-test-renderer";

import Switch from "../Switch";

describe("Image", () => {
  it("renders correctly", () => {
    const disabled = false;
    const onValueChange = jest.fn();
    const instance = renderer.create(
      <Switch disabled={disabled} onValueChange={onValueChange} />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
