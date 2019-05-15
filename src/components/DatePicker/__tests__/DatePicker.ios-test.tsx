import React from "react";
import { shallow, mount } from "enzyme";
import { DatePickerIOSProps } from "react-native";
import DatePicker from "../DatePicker.ios";

describe("DatePickerIos", () => {
  const date = new Date();
  const onDateChange = jest.fn();
  const props: DatePickerIOSProps | any = {
    onDateChange,
    date
  };

  describe("Rendering", () => {
    it("should render textinput and view", () => {
      const component = mount(<DatePicker {...props} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("view");
      expect(tree).toContain("text");
    });

    it("should trigger onPress event", () => {
      const wrapper = shallow(<DatePicker {...props} />);
      wrapper.update();
      wrapper.simulate("press");
      //trigger
    });
  });
});
