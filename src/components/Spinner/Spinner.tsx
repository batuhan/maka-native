import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'

interface Props {
  children?: ReactNode
}

const Spinner = ({ children }: Props) => {
  return <View>{children || <Text>Loading...</Text>}</View>
}

export default Spinner
