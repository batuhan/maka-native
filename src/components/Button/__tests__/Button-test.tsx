/**
 * @jest-environment jsdom
 */

import React from "react";
import { TextInput } from "react-native";
import { shallow, mount } from "enzyme";

import Button from "../Button";


describe("Button", () => {
  const children = <TextInput />;
  const onPress = jest.fn();

  describe("Rendering", () => {
    it("should render given children", () => {
      const component = shallow(<Button onPress={onPress}>{children}</Button>);

      expect(component.contains(children)).toEqual(true);
    });

    it("should render view element", () => {
      const component = mount(<Button onPress={onPress}>{children}</Button>);
      const tree = component
        .children()
        .first()
        .html();

      expect(tree).toContain("view");
      expect(tree).toContain("textinput");
    });

    it("should trigger onPress event", () => {
      onPress.mockReturnValue("trigger on press");
      const wrapper = shallow(<Button onPress={onPress}>{children}</Button>);
      wrapper.simulate("press");

      expect(onPress.mock.calls.length).toBe(1);
    });
  });
});
