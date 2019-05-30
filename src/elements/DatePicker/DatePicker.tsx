import React from 'react';

import DatePickerAndroid from './DatePicker.android';
import DatePickerIos from './DatePicker.ios';

export default function DatePicker({ defaultDate, onDateChange }: { defaultDate?: Date, onDateChange: (date: Date) => void }) {
  return (
    <>
      <DatePickerAndroid defaultDate={defaultDate} onDateChange={onDateChange} />
      <DatePickerIos defaultDate={defaultDate} onDateChange={onDateChange} />
    </>
  )
}
