import React, { ReactNode } from "react";
import { Switch } from "react-native";
import styled from "styled-components";

interface Props {
  style?: {};
  disabled: boolean;
  onValueChange: () => void;
}

export default function({ disabled = false, style, onValueChange }: Props) {
  return (
    <Switch style={style} onValueChange={onValueChange} disabled={disabled} />
  );
}
