// src/components/Header/Header.stories.tsx

import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Header from "./Header";

storiesOf("Header", module).add("Header", () => (
  <Header title="Header Title">
    <Text>Header Logo</Text>
  </Header>
));
