import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardTypeOptions,
} from 'react-native'

import styled from 'styled-components'

const StyledInput = styled(TextInput)`
  height: 40;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  padding: 5px;
`

const ErrorText = styled(Text)`
  color: red;
  margin-bottom: 10px;
`

type Props = {
  error?: string
  value?: string
  onChangeText: (name: string, value: string) => void
  name: string
  placeholder: string
  keyboardType?: KeyboardTypeOptions
}

export default function FormInput({
  error,
  value,
  onChangeText,
  name,
  placeholder,
  keyboardType,
}: Props) {
  return (
    <View>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChangeText={(value: string) => onChangeText(name, value)}
        keyboardType={keyboardType || 'default'}
      />
      {(error && <ErrorText>{error}</ErrorText>) || null}
    </View>
  )
}
