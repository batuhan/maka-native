import React from "react";
import { mount, shallow } from "enzyme";
import { View, Text } from "react-native";

import useForm from "../useForm";
import FormInput from "../../../components/FormInput/FormInput";
import Button from "../../../components/Button/Button";

const mockCallback = jest.fn();
const mockValidate = jest.fn();

const MockedComponent = () => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    mockCallback,
    mockValidate
  );
  return (
    <View>
      <FormInput
        name="mockInput"
        value={values.mockInput}
        onChangeText={handleChange}
        placeholder="mock placeholder"
        error={errors.mockInput}
      />
      <Button onPress={handleSubmit}>
        <Text>mock button</Text>
      </Button>
    </View>
  );
};

describe("useForm", () => {
  const wrapper = mount(<MockedComponent />);
  const component = wrapper.find(MockedComponent);
  it("should renders correctly", () => {
    expect(wrapper.find(MockedComponent)).toHaveLength(1);
    expect(component.find({ name: "mockInput" })).toHaveLength(1);
    expect(component.find(Button)).toHaveLength(1);
    expect(component.find(FormInput)).toHaveLength(1);
  });

  it("should update state when changed input", () => {
    const data = { name: "mockInput", text: "my awesome value" };
    const mockInput = wrapper.find({ name: "mockInput" });
    const button = component.find(Button).first();
    mockInput.props().onChangeText(data.name, data.text);
    wrapper.update();
    const tree = wrapper
      .children()
      .first()
      .html();
    expect(tree).toContain(data.text);

    //add submit test
  });
});
