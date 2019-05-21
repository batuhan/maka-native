import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Container = styled(View)<{}>`
  padding: 5px;
`

interface Props {
  children?: ReactNode
}

const Spinner = ({ children }: Props) => {
  return <Container>{children || <Text>Loading...</Text>}</Container>
}

export default Spinner
