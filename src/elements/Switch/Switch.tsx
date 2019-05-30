import React, { ReactNode } from "react";
import { Switch } from "react-native";
import styled from "styled-components";

interface Props {
  style?: {};
  disabled: boolean;
  onValueChange: (value: boolean) => void;
  value: boolean;
}

export default function ({ disabled = false, style, onValueChange, value }: Props) {
  return (
    <Switch style={style} onValueChange={onValueChange} disabled={disabled} value={value} />
  );
}
