import React from "react";
import { shallow } from "enzyme";
import Alert from "../Alert";

describe("Alert", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const message = "alert message";
      const component = shallow(<Alert message={message} />);
      expect(component).toMatchSnapshot();
    });
  });
});
