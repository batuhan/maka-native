/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import Spinner from "../Spinner";
import { Text } from "react-native";

describe("Spinner", () => {
  const children = <Text>Custom...</Text>;

  describe("Rendering", () => {
    it("should render given children", () => {
      const component = shallow(<Spinner>{children}</Spinner>);

      expect(component.contains(children)).toEqual(true);
    });

    it("should render without children", () => {
      const component = shallow(<Spinner />);

      // Loading... is default when there is no children
      expect(component.contains("Loading...")).toEqual(true);
    });

    it("should render view element", () => {
      const component = mount(<Spinner />);
      const tree = component
        .children()
        .first()
        .html();

      expect(tree).toContain("view");
      expect(tree).toContain("text");
      expect(tree).toContain("Loading...");
    });
  });
});
