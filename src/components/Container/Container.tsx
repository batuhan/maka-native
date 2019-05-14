import React, { ReactNode } from "react";
import { View } from "react-native";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <View>{children}</View>;
}
