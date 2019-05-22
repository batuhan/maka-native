import React, { ReactNode } from "react";
import { Modal } from "react-native";
import styled from "styled-components";

import Container from "../../elements/Container/Container";

export interface Props {
  isShowing: boolean;
  children: ReactNode;
}
const ModalComponent = ({ isShowing, children }: Props) => {
  return (
    <Container>
      <Modal animationType="slide" visible={isShowing} transparent={false}>
        {children}
      </Modal>
    </Container>
  );
};

export default ModalComponent;
