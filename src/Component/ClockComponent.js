import React, { Component } from "react";

export default class ClockComponent extends Component {
  constructor(props) {
    super(props);

    this.intervalRef = React.createRef();
    this.audioRef = React.createRef();

    this.state = {
      sessionLabel: "Sesson",
      breakTime: props.defaultBreakTime * 60,
      sessionTime: props.defaultSessionTime * 60,
    };
  }

  componentDidMount() {
    this.intervalRef.current = setInterval(() => {
      let timeLeft = this.state.sessionTime;

      // Start Session Time
      // If timeLeft === 0 : Ring Bell Audio
      // Start Break Time
      // If timeLeft === 0 : Ring Bell Audio
      // Repeat
      console.log(timeLeft)

      if (timeLeft <= 0) {
        this.setState({
          sessionTime: this.props.defaultSessionTime * 60,
        });

        clearInterval()
      }
      this.setState({
        sessionTime: this.state.sessionTime - 1,
      });
    }, 1000);
  }

  formatTime = (currentSeconds) => {
    const min = String(Math.floor(currentSeconds / 60)).padStart(2, "0");
    const sec = String(currentSeconds % 60).padStart(2, "0");

    return `${min}:${sec}`;
  };

  render() {
    return (
      <div>
        <h1>Session</h1>
        <div>{this.formatTime(this.state.sessionTime)}</div>
      </div>
    );
  }
}
