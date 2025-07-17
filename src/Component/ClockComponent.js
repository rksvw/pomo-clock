import React, { Component } from "react";

export default class ClockComponent extends Component {
  constructor(props) {
    super(props);

    this.clockify = this.clockify.bind(this);
  }

  clockify(val) {
    let min = Math.floor(val / 60);
    let sec = val % 60;
    if (sec < 10 && min >= 10) {
      return `${min}:0${sec}`;
    } else if (sec >= 10 && min >= 10) {
      return `${min}:${sec}`;
    } else if (min < 10 && sec >= 10) {
      return `0${min}:${sec}`;
    } else {
      return `0${min}:0${sec}`;
    }
  }

  render() {
    return (
      <div>
        <h1 id="time-label">{this.props.label}</h1>
        <div id="time-left">{this.clockify(this.props.timer)}</div>
      </div>
    );
  }
}
