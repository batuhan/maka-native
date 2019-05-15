import React from "react";
import { mount } from "enzyme";

import Select from "../Select";

describe("Select", () => {
  describe("Rendering", () => {
    it("should render given title", () => {
      const onValueChange = jest.fn();
      const items = [
        {
          label: "select-label",
          value: "select-value"
        }
      ];
      const component = mount(
        <Select style={{}} onValueChange={onValueChange} items={items} />
      );
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("view");
      expect(tree).toContain("rctpicker");
      expect(tree).toContain("items");
    });
  });
});
