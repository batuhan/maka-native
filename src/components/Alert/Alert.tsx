import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

type alertType = 'success' | 'warning' | 'error'

const typeMap = {
  success: 'green',
  warning: 'orange',
  error: 'red',
}

const Container = styled(View)<{ type: alertType }>`
  text-align: center;
  padding: 10px;
  background-color: ${({ type }) => typeMap[type]};
`

const AlertText = styled(Text)`
  color: #ffffff;
  text-align: center;
`

interface Props {
  message: string
  type: alertType
}

export default function Alert({ type, message }: Props) {
  return (
    <Container type={type}>
      <AlertText>{message}</AlertText>
    </Container>
  )
}
