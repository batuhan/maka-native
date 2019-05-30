import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";

import useModal from "../../lib/hooks/useModal";

import Modal from "./Modal";

const ModalContainer = () => {
  const { isShowing, toggle } = useModal();
  return (
    <View>
      <Text onPress={toggle}>Show popup</Text>
      <Modal show={isShowing}>
        <Text onPress={toggle}>Close popup</Text>
      </Modal>
    </View>
  );
};
storiesOf("Modal", module).add("Modal", () => (
  <View>
    <ModalContainer />
  </View>
));
