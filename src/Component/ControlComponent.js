import React, { Component } from "react";

export default class ControlComponent extends Component {
  constructor(props) {
    super(props);

    this.clockify = this.clockify.bind(this);
  }

  clockify(val) {
    //  Find minute and second using value
    let min = Math.floor(val / 60);
    let sec = val % 60;
    // If Second is less than 10
    if (sec < 10) {
      // Return min
      return min;
    } else {
      // Either Case
      // Return min
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
        <div
          style={{
            borderRight: "2px solid black",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 id="break-label" style={{ padding: "5px" }}>
            Break Length
          </h2>
          <div>
            <button
              id="break-increment"
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
              onClick={this.props.breakIncrement}
            >
              +
            </button>
            <span
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
              id="break-length"
            >
              {this.clockify(this.props.breakLength)}
            </span>
            <button
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
              id="break-decrement"
              onClick={this.props.breakDecrement}
            >
              -
            </button>
          </div>
        </div>
        <div
          className="session-length"
          style={{
            borderLeft: "2px solid black",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 id="session-label" style={{ padding: "5px" }}>
            Session Length
          </h2>
          <div>
            <button
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
              id="session-increment"
              onClick={this.props.sessionIncrement}
            >
              +
            </button>
            <span
              id="session-length"
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
            >
              {this.clockify(this.props.sessionLength)}
            </span>
            <button
              style={{
                padding: "5px 10px",
                fontSize: "24px",
              }}
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
