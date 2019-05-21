import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import FormInput from './FormInput'

storiesOf('Form Input', module).add('FormInput', () => (
  <View>
    <FormInput
      name="test"
      placeholder="Test"
      onChangeText={value => console.log(value)}
    />
  </View>
))
