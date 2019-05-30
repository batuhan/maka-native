import React from 'react'
import { storiesOf } from '@storybook/react-native'

import DatePicker from './DatePicker'

storiesOf('DatePicker', module)
  .add('DatePicker', () => (
    <DatePicker defaultDate={new Date()} onDateChange={value => console.log(value)} />
  ))

