import React from 'react'
import { storiesOf } from '@storybook/react-native'

import DatePickerIOS from './DatePicker.ios'
import DatePickerAndroid from './DatePicker.android'

storiesOf('DatePicker', module)
  .add('DatePickerIOS', () => (
    <DatePickerIOS onDateChange={value => console.log(value)} />
  ))
  .add('DatePicker Android', () => (
    <DatePickerAndroid onDateChange={value => console.log(value)} />
  ))
