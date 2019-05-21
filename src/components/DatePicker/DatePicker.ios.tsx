import * as React from "react";
import { useState } from "react";

import {
  TouchableOpacityProps,
  Text,
  TouchableOpacity,
  DatePickerIOSProps,
  DatePickerIOS
} from "react-native";

interface IProps {
  date?: Date;
  TouchableOpacityProps?: TouchableOpacityProps;
  defaultDate?: Date;
  DatePickerIOSProps?: DatePickerIOSProps;
  onDateChange: (date: Date) => void;
}

export default function DatePicker(props: IProps) {
  const [date, setDate] = useState(props.date || new Date());
  const [isOpenPicker, togglePicker] = useState(false);

  const { onDateChange } = props;
  const onSelectDate = (date: Date) => {
    onDateChange(date);
  };
  const openPicker = () => {
    togglePicker(true);
  };
  return (
    <TouchableOpacity onPress={openPicker}>
      <Text>{date.toDateString()}</Text>
      {isOpenPicker && (
        <DatePickerIOS date={date} onDateChange={onSelectDate} />
      )}
    </TouchableOpacity>
  );
}
