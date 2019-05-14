import React, { ReactNode } from "react";
import { View, TouchableHighlight } from "react-native";
import styled from "styled-components";

interface Props {
  onPress?: () => void;
  children: ReactNode;
}

export default function Button({ onPress, children }: Props) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
