import React from "react";
import { Text } from "react-native";

import styled from "styled-components";

interface Props {
  item?: {};
  style?: {};
}

export default function ListItemComponent({ item, style }: Props) {
  return <Text>{JSON.stringify(item)}</Text>;
}
