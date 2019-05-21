/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import { TextInput } from "react-native";

import Container from "../Container";

describe("Container", () => {
  const children = <TextInput>Container Text</TextInput>;

  describe("Rendering", () => {
    it("should render given children", () => {
      const component = shallow(<Container>{children}</Container>);
      expect(component.contains(children)).toEqual(true);
    });

    it("should render with given bgColor", () => {
      const component = mount(<Container>{children}</Container>);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("view");
      expect(tree).toContain("textinput");
    });
  });
});
