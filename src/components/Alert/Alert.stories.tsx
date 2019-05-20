import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Alert from './Alert'

storiesOf('Alert', module).add('Alerts', () => (
  <View>
    <Alert message="Message" type="success" />
    <Alert message="Message" type="warning" />
    <Alert message="Message" type="error" />
  </View>
))
