import React, { Component } from "react";
import ControlComponent from "./Component/ControlComponent";
import ClockComponent from "./Component/ClockComponent";
import StartStopComponent from "./Component/StartStopComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sessionRef = React.createRef();
    this.breakRef = React.createRef();

    this.state = {
      defaultSessionTime: 25,
      defaultBreakTime: 5,
    };
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "50vw",
          height: "50vh",
        }}
      >
        <ControlComponent />
        <ClockComponent
          defaultBreakTime={this.state.defaultBreakTime}
          defaultSessionTime={this.state.defaultSessionTime}
        />
        <StartStopComponent />
      </div>
    );
  }
}
