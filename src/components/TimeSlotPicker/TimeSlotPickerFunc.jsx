import React, { useState, useEffect, useRef } from "react";
import AppointmentPicker from "appointment-picker";
import "../../../node_modules/appointment-picker/dist/appointment-picker.css";

function TimeSlotPickerFunc({ returnSelectedTime, disabledStartTimes }) {
 

  const [time, setTime] = useState({ time: {} });
  // const [disabledTimes, setDisabledTimes] = useState(disabled);
  const pickerRef = useRef(null);

  const options = {
    leadingZero: true,
    interval: 60,
    minTime: 8,
    maxTime: 22,
    startTime: 8,
    endTime: 23,
    disabled: disabledStartTimes,
  };
  

  console.log(disabledStartTimes);
  console.log(options.disabled);

  const onTimeSelect = (event) => {
    console.log("change.appo.picker", event.time);
    setTime({ time: event.time });
    console.log(event);
  };

  // Effect for picker listeners
  useEffect(() => {
    const picker = new AppointmentPicker(pickerRef.current, options);
    console.log('options from effect', options);
    pickerRef.current.addEventListener("change.appo.picker", onTimeSelect);

    return () => {
      pickerRef.current.removeEventListener("change.appo.picker", onTimeSelect);
      picker.close();
      picker.destroy();
    };
  }, [options]);

  // UseEffect for returning selected time
  useEffect(() => {
    returnSelectedTime(time);
  }, [time]);

  return (
    <div>
      <input type="text" ref={pickerRef}></input>
      <code>{JSON.stringify(time)}</code>
    </div>
  );
}

export default TimeSlotPickerFunc;
