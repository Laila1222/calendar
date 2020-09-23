import React from "react";

// /** Use following imports if used outside this demo project */
import AppointmentPicker from "appointment-picker";
import "../../../node_modules/appointment-picker/dist/appointment-picker.css";

// /** Remove following imports if used in your own project */
// import AppointmentPicker from '../../dist/appointment-picker.min';

class TimeSlotPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      happened: false,
      options: {
        leadingZero: true,
        interval: 60,
        minTime: 8,
        maxTime: 22,
        startTime: 8,
        endTime: 23,
        disabled: this.props.disabledStartTimes,
      },
    };

    this.pickerRef = React.createRef();
    this.onTimeSelect = this.onTimeSelect.bind(this);
  }

  onTimeSelect(event, picker) {
    // console.log("picker", picker);
    console.log("change.appo.picker", event.time);
    const { returnSelectedTime } = this.props;
    this.setState({ time: event.time }, () => {
      returnSelectedTime(this.state.time);
    });
    
  }

  render() {
    // console.log(this.props.disabledStartTimes);
    // console.log("disabledStuff", this.state.options.disabled);
    return (
      <div>
        <input type="text" ref={this.pickerRef}></input>
        <code>{JSON.stringify(this.state.time)}</code>
        {this.state.options.disabled}
      </div>
    );
  }

  componentDidMount() {
    console.log("component mounted");
    this.picker = new AppointmentPicker(
      this.pickerRef.current,
      this.state.options
    );

    this.pickerRef.current.addEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
  }

  //   componentWillReceiveProps(nextProps) {
  //       console.log('fired');
  //     //   If got new date
  //     if (this.props !== nextProps) {
  //       //   Remove initial picker
  //         this.pickerRef.current.removeEventListener(
  //           "change.appo.picker",
  //           this.onTimeSelect(this.pickerRef.current)
  //         );
  //         this.picker.destroy();

  //       //  Update options with new props
  //       const optionsCopy = {
  //         ...this.state.options,
  //       };
  //         optionsCopy.disabled = nextProps.disabledStartTimes;
  //       console.log(optionsCopy);
  //       this.setState({ options: optionsCopy }, () => {
  //         console.log(this.state.options);

  //         // Create new picker with the updated info
  //         this.picker = new AppointmentPicker(
  //           this.pickerRef.current,
  //           this.state.options
  //         );
  //         this.pickerRef.current.addEventListener(
  //           "change.appo.picker",
  //           this.onTimeSelect
  //         );
  //       });
  //       // Create new picker with the updated info

  //     }
  //   }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getting state from props');

    const optionsCopy = {
      ...prevState.options,
      disabled: nextProps.disabledStartTimes,
    };

    const startTimesCopy = [...nextProps.disabledStartTimes]
    const stateCopy = {...prevState};
    prevState.options.disabled = startTimesCopy;

    return {
      options: optionsCopy
    };
  }

  componentDidUpdate(prevProps, prevState) {
      
  }

  componentWillUnmount() {
    console.log("component unmounted");
    this.pickerRef.current.removeEventListener(
      "change.appo.picker",
      this.onTimeSelect
    );
    this.picker.destroy();
  }
}

export default TimeSlotPicker;
