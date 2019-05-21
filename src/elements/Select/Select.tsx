import React, { ReactNode } from "react";
import { Picker } from "react-native";
import styled from "styled-components";

interface Props {
  style?: {};
  selectedValue?: string;
  onValueChange: () => void;
  items?: { value: string; label: string }[];
}

export default function Select({
  items = [],
  onValueChange,
  selectedValue,
  style
}: Props) {
  return (
    <Picker
      selectedValue={selectedValue}
      style={style}
      onValueChange={onValueChange}
    >
      {items.map(item => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
    </Picker>
  );
}
