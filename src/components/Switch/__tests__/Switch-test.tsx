import React from "react";
import { mount } from "enzyme";

import Switch from "../Switch";

describe("Switch", () => {
  describe("Rendering", () => {
    it("should render s", () => {
      const disabled = false;
      const onValueChange = jest.fn();
      const component = mount(
        <Switch disabled={disabled} onValueChange={onValueChange} />
      );
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("rctswitch");
      expect(tree).toContain("value");
    });
  });
});
