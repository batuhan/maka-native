import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

import styled from "styled-components";

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
    <View>
      <TextInput
        style={[styles.textInput, style]}
        value={value}
        placeholder={placeholder}
        onChangeText={(value: string) => onChangeText(name, value)}
      />
      {(error && <Text style={styles.error}>{error}</Text>) || null}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 5
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});
