import React, { useState, useEffect } from "react";
import AppointmentPicker from "appointment-picker";
import "../../../node_modules/appointment-picker/dist/appointment-picker.css";

function TimeSlotPickerFunc(props) {
  const options = {
    leadingZero: true,
    interval: 60,
    minTime: 8,
    maxTime: 22,
    startTime: 8,
    endTime: 23,
    disabled: ["09:00", "10:00", "16:00", "17:00"],
  };

  const [time, setTime] = useState({ time: {} });
  const pickerRef = React.createRef();

  const onTimeSelect = (event) => {
    console.log("change.appo.picker", event.time);
    setTime({ time: event.time });
  };


  useEffect(() => {
      const picker = new AppointmentPicker(pickerRef.current, options);
      pickerRef.current.addEventListener('change.appo.picker', onTimeSelect)
  }, [time])

  return (
    <div>
      <input type="text" ref={pickerRef}></input>
      <code>{JSON.stringify(time)}</code>
    </div>
  );
}

export default TimeSlotPickerFunc;
