// src/components/Container/Container.stories.tsx

import React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import Container from "./Container";

storiesOf("Container", module).add("Container", () => (
  <Container>
    <Text>Container</Text>
  </Container>
));
