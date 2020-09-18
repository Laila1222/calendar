import React, { useState } from "react";
import TimeSlotPicker from "./../TimeSlotPicker/TimeSlotPicker";
import ReactDatePicker from './../ReactDatePicker/ReactDatePicker';
import TimeSlotPickerFunc from "../TimeSlotPicker/TimeSlotPickerFunc";

function Form() {
  const [room, setRoom] = useState(1);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(room, date, timeSlot);
  };

  const handleSelectChange = (e) => {
    setRoom(e.target.value);
  };

  const returnSelectedDate = (date) => {
    setDate(date);
  }

  const returnSelectedTime = time => {
      console.log(time);
      setTimeSlot(time)
  }

 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Select room:</label>
        <select name="room" id="" onChange={handleSelectChange}>
          <option value="1">Room number 1</option>
          <option value="2">Room number 2</option>
        </select>
      </div>

      <div>
        <label>Date:</label>
        <ReactDatePicker returnSelectedDate={returnSelectedDate}/>
      </div>
      <div>
        <label>Time:</label>
        <TimeSlotPicker returnSelectedTime={returnSelectedTime}/>
        {/* <TimeSlotPickerFunc /> */}
      </div>

      <input type="submit" value="Book room" />
    </form>
  );
}

export default Form;
