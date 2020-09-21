import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";

function ReactDatePicker({ returnSelectedDate }) {
  const defaultDate = new Date().toISOString().toString();
  // console.log( defaultDate);
  const modifiedDefaultDate = defaultDate.slice(11);
  // + '22:00:00.000Z'
  // console.log(modifiedDefaultDate);

  const [value, setValue] = useState(new Date());
  // In ISO format, that can be sent to parent
  const [dateFormat, setDateFormat] = useState('2020-09-20T22:00:00.000Z');

  const handleChange = (date) => {
    // Set value for datePicker library
    setValue(date);

    // Set date format that can be sent to parent
    const toDateFormat = new Date(date);
    const isoFormat = toDateFormat.toISOString();
    setDateFormat(isoFormat);
  };

  useEffect(() => {
    returnSelectedDate(dateFormat);
  });

  return (
    <div>
      <DatePicker onChange={handleChange} value={value} />
    </div>
  );
}

export default ReactDatePicker;
