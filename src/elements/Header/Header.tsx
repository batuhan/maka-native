import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

interface Props {
  style?: {};
  children: ReactNode;
  title: string;
}

export default function HeaderComponent({ title, children, style }: Props) {
  return (
    <View style={style}>
      {children}
      <Text>{title}</Text>
    </View>
  );
}
