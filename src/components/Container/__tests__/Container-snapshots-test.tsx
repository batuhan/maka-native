import React from "react";
import renderer from "react-test-renderer";

import "jest-styled-components";

import Container from "../Container";
import { Text } from "react-native";

describe("Container", () => {
  const children = <Text>Container Children</Text>;
  
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const tree = renderer.create(<Container>{children}</Container>).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("background-color", "white");
    });

    it("should match to snapshot", () => {
      const bgColor = "black";
      const tree = renderer
        .create(<Container bgColor={bgColor}>{children}</Container>)
        .toJSON();
      expect(tree).toHaveStyleRule("background-color", "black");
    });
  });
});
