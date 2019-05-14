import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

interface Props {
  message: string;
}

export default function Alert({ message }: Props) {
  return <Text>{message}</Text>;
}
