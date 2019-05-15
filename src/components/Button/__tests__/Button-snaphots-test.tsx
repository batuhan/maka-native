import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import Button from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const onPress = () => {};
    const instance = renderer.create(
      <Button style={{}} onPress={onPress}>
        <Text>Touchable</Text>
      </Button>
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});
