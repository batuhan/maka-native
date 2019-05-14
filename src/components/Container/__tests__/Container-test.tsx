import React from "react";
import { shallow } from "enzyme";
import Container from "../Container";
import { Text } from "react-native";

describe("Container", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const children = <Text>Container Children</Text>;
      const component = shallow(<Container>{children}</Container>);
      expect(component).toMatchSnapshot();
    });
  });
});
