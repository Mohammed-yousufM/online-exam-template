import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.timerId = null;
    this.state = { minutes: 0, seconds: 30 };
  }

  timeToParent = () => {
    this.props.sendTime(true);
  };

  timerFunc = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.seconds === 0) {
      if (this.state.minutes === 0) {
        clearInterval(this.timerId);
        this.timeToParent();
      } else {
        this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
      }
    }
  };

  componentDidMount() {
    this.timerId = setInterval(this.timerFunc, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return this.state.minutes === 0 && this.state.seconds === 0 ? (
      <h1 className="sticky-top">Time Over!</h1>
    ) : (
      <h1 className="sticky-top">
        Time Remaining: {this.state.minutes}:
        {this.state.seconds < 10
          ? `0${this.state.seconds}`
          : this.state.seconds}
      </h1>
    );
  }
}

export default Timer;
