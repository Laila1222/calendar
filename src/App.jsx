import React from "react";
import "./App.css";
import DatePicker from "./components/TimeSlotPicker/TimeSlotPicker";
import ReactDatePicker from "./components/ReactDatePicker/ReactDatePicker";
import ReactTimePicker from "./components/ReactTimePicker/ReactTimePicker";
import Form from './components/form/form';
import rooms from './data/roomData';



function App() {
  return (
    <div className="app">
      {/* <DatePicker />
      <ReactDatePicker /> */}
      <Form/>
    </div>
  );
}

export default App;
