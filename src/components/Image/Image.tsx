import React, { ReactNode } from "react";
import { Image } from "react-native";
import styled from "styled-components";

interface Props {
  style?: {};
  source: string;
}

export default function ImageComponent({ source, style }: Props) {
  return <Image style={style} source={require(source)} />;
}
