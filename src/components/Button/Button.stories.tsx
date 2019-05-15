// src/components/Button/Button.stories.tsx

import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Button from "./Button";

storiesOf("Button", module).add("Button", () => (
  <Button onPress={() => {}}>
    <Text>Button</Text>
  </Button>
));
