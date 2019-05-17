import React from "react";
import { mount } from "enzyme";
import FormInput from "../FormInput";

describe("FormInput", () => {
  describe("Rendering", () => {
    it("should render placeholder", () => {
      const onChangeText = jest.fn();
      const name = "textinput-name";
      const placeholder = "form input placeholder";
      const component = mount(
        <FormInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          name={name}
        />
      );
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("textinput");
      expect(tree).toContain(placeholder);
    });
  });
});
