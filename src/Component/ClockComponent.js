import React, { Component } from "react";

export default class ClockComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionLabel: "Sesson",
      breakTime: props.defaultBreakTime * 60,
      sessionTime: props.defaultSessionTime * 60,
    };
  }


  componentDidMount() {

  }
  render() {
    const formatTime = (currentSeconds) => {
      const min = String(Math.floor(currentSeconds / 60)).padStart(2, "0");
      const sec = String(currentSeconds % 60).padStart(2, "0");

      return `${min}:${sec}`;
    };

    return (
      <div>
        <h1>Session</h1>
        <div>{formatTime(this.state.sessionTime)}</div>
      </div>
    );
  }
}
