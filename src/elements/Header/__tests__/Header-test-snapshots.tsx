import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";

import Header from "../Header";

describe("Header", () => {
  it("renders correctly", () => {
    const title = "Header Title";
    const instance = renderer.create(
      <Header style={{}} title={title}>
        <Text>Header Logo</Text>
      </Header>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
