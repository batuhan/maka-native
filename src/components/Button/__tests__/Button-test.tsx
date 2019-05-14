import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";
import { Text } from "react-native";

describe("Button", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(
        <Button onPress={() => {}}>
          <Text>Button Text</Text>
        </Button>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
