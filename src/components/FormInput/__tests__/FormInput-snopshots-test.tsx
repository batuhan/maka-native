import React from "react";
import renderer from "react-test-renderer";

import FormInput from "../FormInput";

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
