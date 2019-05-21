import React from "react";
import { mount } from "enzyme";
import { Text } from "react-native";

import Header from "../Header";

describe("Header", () => {
  describe("Rendering", () => {
    it("should render given title", () => {
      const children = <Text>Header Logo</Text>;
      const title = "Header Title";
      const component = mount(<Header title={title}>{children}</Header>);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("view");
      expect(tree).toContain(title);
    });
  });
});
