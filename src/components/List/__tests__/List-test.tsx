import React from "react";
import { mount } from "enzyme";
import List from "../List";

describe("List", () => {
  describe("Rendering", () => {
    it("should render list", () => {
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
      const component = mount(<List data={data} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("rctscrollview");
      expect(tree).toContain("view");
      expect(tree).toContain("text");
    });
  });
});
