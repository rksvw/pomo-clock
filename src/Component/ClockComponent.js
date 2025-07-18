import React, { Component } from "react";

export default class ClockComponent extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.clockify = this.clockify.bind(this);
  }

  clockify(val) {
    // From Value Find Minutes
    let min = Math.floor(val / 60);
    // From Value Find Seconds
    let sec = val % 60;

    // If [Sec] is less than 10 and [Min] is greater than equal to 10
    if (sec < 10 && min >= 10) {
      // Return timer in form min:sec i.e. -> 12:09
      return `${min}:0${sec}`;
    } else if (sec >= 10 && min >= 10) {
      // If [Sec] is greater than equal to 10 and [Min] is greater than equal to 10 -> too
      // Return timer in form min:sec i.e. -> 13:15
      return `${min}:${sec}`;
    } else if (min < 10 && sec >= 10) {
      // If [Sec] is greater than equal to 10 and [Min] is less than 10
      // Return timer in form of min:sec i.e. -> 05:19
      return `0${min}:${sec}`;
    } else {
      // Else : Case
      // Return timer in form of min:sec i.e. -> 07:07
      return `0${min}:0${sec}`;
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderTop: "2px solid black",
          padding: "10px",
        }}
      >
        <div>
          <h2
            id="timer-label"
            style={{
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.props.label}
          </h2>
          <div
            id="time-left"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "80px",
              fontWeight: "600",
            }}
          >
            {this.clockify(this.props.timer)}
          </div>
        </div>
      </div>
    );
  }
}
