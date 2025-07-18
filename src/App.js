import React, { Component, createRef } from "react";
import ControlComponent from "./Component/ControlComponent";
import ClockComponent from "./Component/ClockComponent";
import StartStopComponent from "./Component/StartStopComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sessionRef = createRef();
    this.breakRef = createRef();

    this.state = {
      timer: 1500,
      sessionLength: 1500,
      breakLength: 300,
      sessionRunning: false,
      startStop: "Start",
      label: "Session",
      breakRunning: false,
      ticker: false,
      starter: false,
      remove: false,
    };

    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    // If session is not running i.e. Start new Session or Continue the Session where it left on
    // Start Session Interval : Call every 1 sec -> 1000 ms
    // Runs Infinitely until the [ComponentDidUpdate] function specific condition is met
    // SetState : Update states of timer and sessionLength

    if (this.state.sessionRunning !== true && this.state.ticker !== true) {
      console.log(this.sessionRef.current + "Start sessionRef");

      this.sessionRef.current = setInterval(() => {
        this.setState((prev) => {
          return {
            timer: prev.timer - 1,
            sessionLength: this.state.sessionLength,
            sessionRunning: true,
            startStop: "Stop",
            starter: true,
          };
        });
      }, 1000);
    } else if (this.state.breakRunning === true) {
      // If Same handleStart Clicked
      // And Break is True
      // Pause the Timer : Stop Break Interval
      // Set State : "Start" : false -> break
      console.log(this.breakRef.current + "Pause breakRef");
      clearInterval(this.breakRef.current);
      this.setState({
        startStop: "Start",
        breakRunning: false,
      });
    } else if (this.state.ticker === true && this.state.breakRunning !== true) {
      // If Same handleStart Clicked
      // And Ticker is True and Break is False
      // Start break Interval or Contiue the previous Break Interval
      // Set State : Update Timer
      console.log(this.breakRef.current + "Continue breakRef");
      this.breakRef.current = setInterval(() => {
        this.setState((prev) => {
          return {
            timer: prev.timer - 1,
            breakRunning: true,
          };
        });
      }, 1000);
    } else {
      // If Same handleStart Clicked
      // And Session is True
      // Pause the Timer : Stop Session Interval
      // Set State : "Start" : false -> Session
      console.log(this.sessionRef.current + "Clear session Ref");
      clearInterval(this.sessionRef.current);
      this.setState({
        sessionRunning: false,
        startStop: "Start",
      });
    }
  }

  // Called after everyTime State changes
  componentDidUpdate(prevProps, prevState) {
    // If Timer is 0 and [session] is true
    // Here Beep the Audio
    // SetState for break
    // Clear the Session
    // Start Break Interaval
    if (prevState.timer === 0 && prevState.sessionRunning === true) {
      this.audioBeep.play();
      this.audioBeep.currentTime = 0;

      this.setState(() => {
        return {
          timer: this.state.breakLength,
          label: "Break",
        };
      });

      clearInterval(this.sessionRef.current);

      this.breakRef.current = setInterval(() => {
        this.setState((prev) => {
          return {
            timer: prev.timer - 1,
            breakRunning: true,
            sessionRunning: false,
            ticker: true,
          };
        });
      }, 1000);
    } else if (prevState.timer === 0 && prevState.ticker === true) {
      // if Timer is 0 and [Ticker] is true
      // Beep Audio
      // Clear Break Interval
      // setState for Session
      // Start Session Interval
      console.log(this.breakRef.current + "BINGO");
      this.audioBeep.play();
      this.audioBeep.currentTime = 0;
      clearInterval(this.breakRef.current);
      this.setState({
        breakRunning: false,
        ticker: false,
        timer: this.state.sessionLength,
        label: "Session",
      });

      console.log(this.sessionRef.current + "REstart sessionRef");
      this.sessionRef.current = setInterval(() => {
        this.setState((prev) => {
          return {
            timer: prev.timer - 1,
            sessionLength: prev.sessionLength,
            sessionRunning: true,
            startStop: "Stop",
          };
        });
      }, 1000);
    } else if (prevState.timer < -1) {
      // If Timer is [!negative Integer]
      // Stop Session Interval
      // Stop Break Interval
      // Set State to Default : State
      console.log("below zero");
      console.log(prevState.timer);
      clearInterval(this.breakRef.current);
      clearInterval(this.sessionRef.current);
      this.setState({
        timer: 1500,
        sessionLength: 1500,
        sessionRunning: false,
        startStop: "Start",
        label: "Session",
        breakLength: 300,
        ticker: false,
        breakRunning: false,
      });
    }
  }

  handleReset() {
    // If Reset Clicked
    // Stop Break Interval
    // Stop Session Interval
    // Stop Audio Beep Sound
    // Set State : Default
    clearInterval(this.sessionRef.current);
    clearInterval(this.breakRef.current);
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    this.setState({
      timer: 1500,
      sessionLength: 1500,
      sessionRunning: false,
      startStop: "Start",
      label: "Session",
      breakLength: 300,
      ticker: false,
      breakRunning: false,
    });
  }

  breakIncrement() {
    // If Break Limit Exceded : 60 Min -> 3600 s
    // Update : State Stop
    if (this.state.breakLength === 3600) {
      this.setState({
        breakLength: 3600,
      });
    } else {
      // Else
      // Update : State Continue
      this.setState((prev) => {
        return { breakLength: prev.breakLength + 60 };
      });
    }
  }

  breakDecrement() {
    // If Break Limit Exceded : 1 min -> 60 s
    // Update : State Stop
    if (this.state.breakLength === 60) {
      this.setState({
        breakLength: 60,
      });
    } else {
      // Else
      // Update : State Continue
      this.setState((prev) => {
        return {
          breakLength: prev.breakLength - 60,
        };
      });
    }
  }

  sessionIncrement() {
    // If Session Limit Exceded : 60 min -> 3600 s
    // Update : State Stop
    if (this.state.sessionLength === 3600) {
      this.setState({
        sessionLength: 3600,
        timer: 3600,
      });
    } else {
      // Else
      // Update : State Continue
      this.setState((prev) => {
        return {
          sessionLength: prev.sessionLength + 60,
          timer: prev.sessionLength + 60,
        };
      });
    }
  }

  sessionDecrement() {
    // If Session Limit Exceded : 1 min -> 60 s
    // Update : State Stop
    if (this.state.sessionLength === 60) {
      this.setState({
        sessionLength: 60,
        timer: 60,
      });
    } else {
      // Else
      // Update : State Continue
      this.setState((prev) => {
        return {
          sessionLength: prev.sessionLength - 60,
          timer: prev.sessionLength - 60,
        };
      });
    }
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
        <h1>25 + 5 Timer</h1>
        {/* Control Component ->
        ! Updating of break and Session Timer
         */}
        <ControlComponent
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          breakIncrement={this.breakIncrement}
          breakDecrement={this.breakDecrement}
          sessionIncrement={this.sessionIncrement}
          sessionDecrement={this.sessionDecrement}
          timer={this.state.timer}
          remove={this.setState.remove}
        />
        {/* Clock Component ->
        ! Session and Break Interval Timer : Count
         */}
        <ClockComponent timer={this.state.timer} label={this.state.label} />
        {/* StartStop Component ->
        ! Pause ? Start : Stop and Reset -> the Clock Timer to Default
         */}
        <StartStopComponent
          handleStart={this.handleStart}
          handleReset={this.handleReset}
          startStop={this.state.startStop}
        />
        {/* Audio Component ->
        ! AudioBeep Reference to Beep Audio After Time exceeded to Zero
         */}
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
}
