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

export default function FormInput({
  style,
  error,
  value,
  onChangeText,
  name,
  placeholder
}: Props) {
  return (
    <TextInput
      style={[styles.textInput, style]}
      value={value}
      placeholder={placeholder}
      onChangeText={(value: string) => onChangeText(name, value)}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});