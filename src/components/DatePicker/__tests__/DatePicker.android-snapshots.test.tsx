import React from "react";
import renderer from "react-test-renderer";

import DatePicker from "../DatePicker.android";

describe("DatePickerAndroid", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const onDateChange = jest.fn();
      const tree = renderer.create(<DatePicker onDateChange={onDateChange} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
