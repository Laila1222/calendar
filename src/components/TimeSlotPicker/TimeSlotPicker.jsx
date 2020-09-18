import React from "react";

// /** Use following imports if used outside this demo project */
import AppointmentPicker from "appointment-picker";
import "../../../node_modules/appointment-picker/dist/appointment-picker.css";

// /** Remove following imports if used in your own project */
// import AppointmentPicker from '../../dist/appointment-picker.min';

class TimeSlotPicker extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      leadingZero: true,
      interval: 60,
      minTime: 8,
      maxTime: 22,
      startTime: 8,
      endTime: 23,
      disabled: ["09:00", "10:00", "16:00", "17:00"],
    };
    this.state = { time: {} };
    this.pickerRef = React.createRef();
    this.onTimeSelect = this.onTimeSelect.bind(this);
  }
  

  onTimeSelect(event) {
    console.log("change.appo.picker", event.time);
    const {returnSelectedTime} = this.props
    this.setState({ time: event.time }, () => {
        returnSelectedTime(this.state.time)
    });
    // Or do something different with your time object
    
    
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.pickerRef}></input>
        <code>{JSON.stringify(this.state.time)}</code>
      </div>
    );
  }

  componentDidMount() {
    this.picker = new AppointmentPicker(this.pickerRef.current, this.options);
    
    this.pickerRef.current.addEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
  }

  componentWillUnmount() {
    this.pickerRef.current.removeEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
    this.picker.destroy();
  }
}

export default TimeSlotPicker;
