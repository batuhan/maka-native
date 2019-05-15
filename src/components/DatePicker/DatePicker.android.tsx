import * as React from "react";
import { useState } from "react";

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  DatePickerAndroid
} from "react-native";

interface IProps {
  TouchableOpacityProps?: TouchableOpacityProps;
  defaultDate?: Date;
  onDateChange: (date: Date) => void;
}

// TODO: refactor here
interface DatePickerProps {
  action: string;
  year: number;
  month: number;
  day: number;
}

export default function DatePicker(props: IProps) {
  const [date, setDate] = useState(new Date());
  const { defaultDate, onDateChange } = props;
  const openPicker = async () => {
    try {
      // TODO: refactor here
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: defaultDate || date
      });
      const selectedDate = new Date(year, month, day);
      setDate(selectedDate);
      if (action !== DatePickerAndroid.dismissedAction) {
        onDateChange(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  return (
    <TouchableOpacity onPress={openPicker}>
      <Text>{date.toDateString()}</Text>
    </TouchableOpacity>
  );
}
