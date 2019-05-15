import React from "react";
import { mount } from "enzyme";

import Image from "../Image";

describe("Image", () => {
  describe("Rendering", () => {
    it("should render given title", () => {
      const source = "../../assets/images/image-test.jpg";
      const component = mount(<Image source={source} />);
      const tree = component
        .children()
        .first()
        .html();
      expect(tree).toContain("image");
      expect(tree).toContain("source");
    });
  });
});
