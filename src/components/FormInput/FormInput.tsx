import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  error?: string;
  value?: string;
  onChangeText: (name: string, value: string) => void;
  style?: {};
  name: string;
  placeholder: string;
};

class FormInput extends React.Component<Props> {
  render() {
    //handle error
    const { style, error, value, onChangeText, name, placeholder } = this.props;
    return (
      <TextInput
        style={[styles.textInput, style]}
        value={value}
        placeholder={placeholder}
        onChangeText={(value: string) => onChangeText(name, value)}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormInput;
