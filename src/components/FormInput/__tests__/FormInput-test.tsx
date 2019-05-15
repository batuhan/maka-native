import React from "react";
import { mount } from "enzyme";
import FormInput from "../FormInput";

describe("FormInput", () => {
  describe("Rendering", () => {
    it("should render placeholder", () => {
      const placeholder = "form input placeholder";
      const component = mount(<FormInput placeholder={placeholder} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("textinput");
      expect(tree).toContain(placeholder);
    });
  });
});
