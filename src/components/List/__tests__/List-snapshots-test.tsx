import React from "react";
import renderer from "react-test-renderer";

import List from "../List";

describe("List", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const data = [
        {
          key: 1,
          value: "1"
        },
        {
          key: 2,
          value: "2"
        }
      ];
      const tree = renderer.create(<List data={data} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
