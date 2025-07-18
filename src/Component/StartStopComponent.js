import React, { Component } from "react";

export default class StartStopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hello world",
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "15px",
          gap: "10px",
        }}
      >
        <button
          id="start_stop"
          style={{
            padding: "5px 10px",
            fontSize: "24px",
          }}
          onClick={this.props.handleStart}
        >
          Start
        </button>
        <button
          style={{
            padding: "5px 10px",
            fontSize: "24px",
          }}
          id="reset"
          onClick={this.props.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
}
