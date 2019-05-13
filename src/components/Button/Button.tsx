import React, { ReactNode } from "react";
import { TouchableHighlight, GestureResponderEvent } from "react-native";

interface Props {
  onPress?: () => GestureResponderEvent;
  children: ReactNode;
}

export default function Button({ onPress, children }: Props) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
