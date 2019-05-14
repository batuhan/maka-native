import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";
import { Text } from "react-native";
import renderer from "react-test-renderer";

describe("Button", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const children = <Text>Button Children</Text>;
      const tree = renderer
        .create(<Button onPress={() => {}}>{children}</Button>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
