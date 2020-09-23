import React, { useState, useEffect } from "react";
import TimeSlotPicker from "./../TimeSlotPicker/TimeSlotPicker";
import ReactDatePicker from "./../ReactDatePicker/ReactDatePicker";
import TimeSlotPickerFunc from "../TimeSlotPicker/TimeSlotPickerFunc";
import { render } from "@testing-library/react";

function Form({ roomData }) {
  //   console.log(roomData);
  const [room, setRoom] = useState(1);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [disabledStartTimes, setDisabledStartTimes] = useState([]);
//   console.log('load');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(room, date, timeSlot);
  };

  const handleRoomSelect = (e) => {
    setRoom(e.target.value);
    // renderDisabledSlots(date, e.target.value);
  };

  const returnSelectedDate = (incomingDate) => {
    // console.log(incomingDate);
    setDate(incomingDate);
    // renderDisabledSlots(incomingDate, room);
  };

  const returnSelectedTime = (time) => {
    console.log('timeslot is selected ', time);
    setTimeSlot(time);
  };

  //   Render available times for the selected date
  const renderDisabledSlots = (selectedDate, selectedRoom) => {
    // console.log(selectedDate, selectedRoom);
    // Get data for selected room
    const getDataForRoom = () => {
      const filteredData = roomData.filter(
        (room) => Number(selectedRoom) === room.id
      );
      return { ...filteredData[0] };
    };

    const dataForRoom = getDataForRoom();
    // console.log(dataForRoom, selectedDate);
    // Get the slots for today for selected room
    const dateMatchesSlots = dataForRoom.timeSlots.filter(
      (timeSlot) => selectedDate === timeSlot.date
    );
    // console.log(dateMatchesSlots);
    const disabledSlots = dateMatchesSlots.filter(
      (timeSlot) => !timeSlot.available
    );
    // console.log(dateMatchesSlots);
    const startTimes = disabledSlots.map(
      (slots) => slots.startTime.toString() + ":00"
    );
    // console.log(startTimes);
    setDisabledStartTimes(startTimes);
  };
  //   console.log(disabledStartTimes);

  useEffect(() => {
    renderDisabledSlots(date, room);
  }, [room, date]);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Select room:</label>
        <select name="room" id="" onChange={handleRoomSelect}>
          <option value="1">Room number 1</option>
          <option value="2">Room number 2</option>
        </select>
      </div>

      <div>
        <label>Date:</label>
        <ReactDatePicker returnSelectedDate={returnSelectedDate} />
      </div>
      <div>
        <label>Time:</label>
        {/* <TimeSlotPicker
          returnSelectedTime={returnSelectedTime}
          disabledStartTimes={disabledStartTimes}
        /> */}
        <TimeSlotPickerFunc returnSelectedTime={returnSelectedTime}  disabledStartTimes={disabledStartTimes}/>
      </div>

      <input type="submit" value="Book room" />
    </form>
  );
}

export default Form;
