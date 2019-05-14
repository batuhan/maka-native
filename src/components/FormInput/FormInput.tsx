import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

class FormInput extends React.Component<Props> {
  render() {
    const { style, ...otherProps } = this.props;
    return <TextInput style={[styles.textInput, style]} {...otherProps} />;
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
