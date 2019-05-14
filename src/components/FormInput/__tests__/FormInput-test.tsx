import React from "react";
import { TextInputProps } from "react-native";
import { shallow } from "enzyme";
import FormInput from "../FormInput";
import renderer from "react-test-renderer";
describe("FormInput", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const placeholder = "form input placeholder";
      const tree = renderer
        .create(<FormInput placeholder={placeholder} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
