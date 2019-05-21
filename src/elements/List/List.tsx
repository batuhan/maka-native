import React, { ReactNode } from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem/ListItem";

import { TouchableHighlight } from "react-native";
import styled from "styled-components";

interface Props {
  data: Array<object>;
  style?: {};
  RenderedElement?: any;
}

export default function List({ RenderedElement, data, style }: Props) {
  return (
    <FlatList
      data={data}
      style={style}
      renderItem={({ item }) =>
        RenderedElement ? (
          <RenderedElement item={item} />
        ) : (
          <ListItem item={item} />
        )
      }
    />
  );
}
