import React from "react";
import { ListItem, ListItemProps } from "react-native-elements";

import styled from "styled-components";

interface Props {
  ListItemProps?: ListItemProps;
  item?: { name: string };
  style?: {};
}

export default function ListItemComponent({
  item,
  style,
  ListItemProps
}: Props) {
  return <ListItem {...ListItemProps} />;
}
