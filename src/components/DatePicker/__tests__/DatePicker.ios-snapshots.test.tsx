import React from "react";
import renderer from "react-test-renderer";

import "jest-styled-components";

import DatePicker from "../DatePicker.ios";

describe("DatePickerIos", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const props: any = {};
      const tree = renderer.create(<DatePicker {...props} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
