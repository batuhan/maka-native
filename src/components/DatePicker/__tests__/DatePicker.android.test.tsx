import React from "react";
import { shallow, mount } from "enzyme";

import DatePicker from "../DatePicker.android";

describe("DatePickerAndroid", () => {
  const onDateChange = jest.fn();
  
  describe("Rendering", () => {
    it("should render textinput and view", () => {
      const component = mount(<DatePicker onDateChange={onDateChange} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("view");
      expect(tree).toContain("text");
    });

    it("should trigger onPress event", () => {
      const wrapper = shallow(<DatePicker onDateChange={onDateChange} />);
      jest.mock("DatePickerAndroid", () => {
        open: () => {
          const action = "null";
          const year = "2019";
          const month = "22";
          const day = "13";
          return {
            action,
            year,
            month,
            day
          };
        };
      });
      wrapper.update();
      wrapper.simulate("press");
      //trigger
    });
  });
});
