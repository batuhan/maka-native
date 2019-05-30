import React, { ReactNode } from "react";
import { Modal } from "react-native";
import styled from "styled-components";

import Container from "../../elements/Container/Container";

export interface Props {
  show: boolean;
  children: ReactNode;
}
const ModalComponent = ({ show, children }: Props) => {
  return (
    <Container>
      <Modal animationType="slide" visible={show} transparent={false}>
        {children}
      </Modal>
    </Container>
  );
};

export default ModalComponent;
