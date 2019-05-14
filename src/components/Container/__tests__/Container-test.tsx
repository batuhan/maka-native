import React from "react";
import { shallow } from "enzyme";
import Container from "../Container";
import { Text } from "react-native";
import renderer from "react-test-renderer";

describe("Container", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const children = <Text>Container Children</Text>;
      const tree = renderer.create(<Container>{children}</Container>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
