import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker'

function ReactDatePicker({returnSelectedDate}) {
  const [value, setValue] = useState(new Date());

  const handleChange = date => {
    setValue(date);
    console.log('changed');
    
  }

  useEffect(() => {
    returnSelectedDate(value);
  })



  

  return (
    <div>
      <DatePicker 
      onChange={handleChange}
      value={value}
      />
    </div>
  );
}

export default ReactDatePicker;