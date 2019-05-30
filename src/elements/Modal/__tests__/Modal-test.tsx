/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import { Text, Modal } from "react-native";
import ModalComponent from "../Modal";

describe("ModalComponent", () => {
  describe("Rendering", () => {
    it("should render text and view element", () => {
      const component = (
        <ModalComponent show={false}>
          <Text>Modal Component</Text>
        </ModalComponent>
      );
      const wrapper = mount(component);
      const tree = wrapper
        .children()
        .first()
        .html();
      expect(tree).toContain("text");
      expect(tree).toContain("view");
      expect(wrapper.find(Text)).toHaveLength(1);
      expect(wrapper.find(Modal)).toHaveLength(1);
    });
  });
});
