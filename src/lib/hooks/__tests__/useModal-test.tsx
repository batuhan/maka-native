import React from "react";
import { mount, shallow } from "enzyme";
import { View, Text, Modal } from "react-native";
import useModal from "../useModal";

const MockedComponent = () => {
  const { isShowing, toggle } = useModal();
  return (
    <View>
      <Text onPress={toggle}>Show popup</Text>
      <Modal visible={isShowing}>
        <Text onPress={toggle}>Hide popup</Text>{" "}
      </Modal>
    </View>
  );
};
describe("useModal", () => {
  const wrapper = mount(<MockedComponent />);
  const component = wrapper.find(MockedComponent);
  it("should renders correctly", () => {
    expect(wrapper.find(MockedComponent)).toHaveLength(1);
    expect(component.find(Text)).toHaveLength(2);
    expect(component.find(Modal)).toHaveLength(1);
  });
});
