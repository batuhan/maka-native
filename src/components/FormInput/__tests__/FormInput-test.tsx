import React from "react";
import { shallow } from "enzyme";
import FormInput from "../FormInput";

describe("FormInput", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const placeholder = "form input placeholder";
      const component = shallow(<FormInput placeholder={placeholder} />);
      expect(component).toMatchSnapshot();
    });
  });
});
