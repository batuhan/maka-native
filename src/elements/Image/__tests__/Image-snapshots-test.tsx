import React from "react";
import renderer from "react-test-renderer";

import Image from "../Image";

describe("Image", () => {
  it("renders correctly", () => {
    const source = "../../assets/images/image-test.jpg";
    const instance = renderer.create(<Image style={{}} source={source} />);
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
