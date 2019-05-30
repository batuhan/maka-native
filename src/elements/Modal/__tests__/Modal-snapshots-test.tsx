import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";

import Modal from "../Modal";

describe("Modal", () => {
  it("renders correctly", () => {
    const instance = renderer.create(
      <Modal show={false}>
        <Text>Modal Component</Text>
      </Modal>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
