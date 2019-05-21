export { Home };

import React from "react";
import { Text } from "react-native";
import Container from "../../components/Container/Container";

interface Props {}

export default function Home({  }: Props) {
  return (
    <Container padding="3%">
      <Text>Home</Text>
    </Container>
  );
}
