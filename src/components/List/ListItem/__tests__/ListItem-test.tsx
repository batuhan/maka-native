import React from "react";
import { mount } from "enzyme";
import ListItem from "../ListItem";

describe("ListItem", () => {
  describe("Rendering", () => {
    it("should render text", () => {
      const item = {
        key: 1,
        value: "1"
      };
      const component = mount(<ListItem item={item} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("text");
    });
  });
});
