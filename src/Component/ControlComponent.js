import React, { Component } from "react";

export default class ControlComponent extends Component {
  constructor(props) {
    super(props);

    this.clockify = this.clockify.bind(this);
  }

  clockify(val) {
    let min = Math.floor(val / 60);
    let sec = val % 60;
    if (sec < 10) {
      return min;
    } else {
      return min;
    }
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <div>
          <h2 id="break-label">Break Length</h2>
          <div>
            <button id="break-increment" onClick={this.props.breakIncrement}>
              +
            </button>
            <span id="break-length">
              {this.clockify(this.props.breakLength)}
            </span>
            <button id="break-decrement" onClick={this.props.breakDecrement}>
              -
            </button>
          </div>
        </div>
        <div className="session-length">
          <h2 id="session-label">Session Length</h2>
          <div>
            <button
              id="session-increment"
              onClick={this.props.sessionIncrement}
            >
              +
            </button>
            <span id="session-length">
              {this.clockify(this.props.sessionLength)}
            </span>
            <button
              id="session-decrement"
              onClick={this.props.sessionDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
