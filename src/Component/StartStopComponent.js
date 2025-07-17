import React, { Component } from "react";

export default class StartStopComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button id="start_stop" onClick={this.props.handleStart}>
          Start
        </button>
        <button id="reset" onClick={this.props.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}
