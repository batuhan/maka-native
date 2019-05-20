import React, { ReactNode } from 'react'
import { View, TouchableHighlight } from 'react-native'
import styled from 'styled-components'

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
`

interface Props {
  onPress: (event: any) => void
  style?: {}
  children: ReactNode
}

export default function ButtonComponent({ onPress, children, style }: Props) {
  return (
    <Container>
      <TouchableHighlight style={style} onPress={onPress}>
        {children}
      </TouchableHighlight>
    </Container>
  )
}
