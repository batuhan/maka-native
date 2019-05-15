import React, { ReactNode } from "react";
import { View } from "react-native";
import styled from "styled-components";

const ContainerView = styled(View)`
  background-color: ${(props: { bgColor?: string }) =>
    props.bgColor || "white"};
`;

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
}

export default function({ children, bgColor }: Props) {
  return <ContainerView bgColor={bgColor}>{children}</ContainerView>;
}
