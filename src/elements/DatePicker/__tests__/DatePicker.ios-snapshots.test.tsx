import React from "react";
import renderer from "react-test-renderer";

import "jest-styled-components";

import DatePicker from "../DatePicker.ios";

describe("DatePickerIos", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const props: any = {};
      const tree = renderer.create(<DatePicker {...props} date={new Date("2019-10-10")} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
