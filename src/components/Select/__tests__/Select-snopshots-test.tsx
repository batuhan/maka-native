import React from "react";
import renderer from "react-test-renderer";

import Select from "../Select";

describe("Select", () => {
  it("renders correctly", () => {
    const onValueChange = jest.fn();
    const items = [
      {
        label: "select-label",
        value: "select-value"
      }
    ];
    const instance = renderer.create(
      <Select style={{}} onValueChange={onValueChange} items={items} />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
