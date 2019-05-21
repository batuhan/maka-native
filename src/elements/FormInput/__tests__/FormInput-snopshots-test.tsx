import React from "react";
import renderer from "react-test-renderer";

import FormInput from "../FormInput";

describe("FormInput", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const placeholder = "form input placeholder";
      const onChangeText = jest.fn();
      const name = "textinput-name";
      const tree = renderer
        .create(
          <FormInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            name={name}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
