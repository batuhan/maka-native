import React from "react";
import { View } from "react-native";

import { shallow, ShallowWrapper } from "enzyme";

import App from "../App";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("App", () => {
  it("should ", () => {});
  // let wrapper: ShallowWrapper;
  // let props: any; // use type "any" to opt-out of type-checking
  // beforeEach(() => {
  //   props = createTestProps({});
  //   wrapper = shallow(<App {...props} />); // no compile-time error
  // });
  // describe("rendering", () => {
  //   it("should render a <View />", () => {
  //     console.log(wrapper);
  //   });
  // });
});
