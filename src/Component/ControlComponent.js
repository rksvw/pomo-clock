import React, { Component } from "react";

export default class ControlComponent extends Component {
  constructor(props) {
    super(props);
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
        <div className="break-length">
          <h2>Break Length</h2>
          <div>
            <button>Inc</button>
            <span>5</span>
            <button>Dec</button>
          </div>
        </div>
        <div className="session-length">
          <h2>Session Length</h2>
          <div>
            <button>Inc</button>
            <span>25</span>
            <button>Dec</button>
          </div>
        </div>
      </div>
    );
  }
}
