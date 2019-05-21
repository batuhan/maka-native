import React from "react";
import renderer from "react-test-renderer";

import ListItem from "../ListItem";

describe("ListItem", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const item = {
        key: 1,
        value: "1"
      };
      const tree = renderer.create(<ListItem item={item} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
