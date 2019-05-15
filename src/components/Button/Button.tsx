import React, { ReactNode } from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components";

interface Props {
  onPress: () => void;
  style?: {};
  children: ReactNode;
}

export default function ButtonComponent({ onPress, children, style }: Props) {
  return (
    <TouchableHighlight style={style} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}
