import React from "react";
import { mount } from "enzyme";
import Header from "../Header";
import { Text } from "react-native";

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
