import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.timerId = null;
    this.state = { minutes: 60, seconds: 0 };
  }

  timeEndToParent = () => {
    this.props.toExamPageJStime(true);
  };

  timerFunc = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.seconds === 0) {
      if (this.state.minutes === 0) {
        clearInterval(this.timerId);
        this.timeEndToParent();
      } else {
        this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
      }
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.shouldTimerStart !== prevProps.shouldTimerStart &&
      this.props.shouldTimerStart === true
    ) {
      this.timerId = setInterval(this.timerFunc, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return this.state.minutes === 0 && this.state.seconds === 0 ? (
      <h3 className="container sticky-top text-right">Time Over!</h3>
    ) : (
      <h3 className="container sticky-top text-right">
        Time Remaining: {this.state.minutes}:
        {this.state.seconds < 10
          ? `0${this.state.seconds}`
          : this.state.seconds}
      </h3>
    );
  }
}

export default Timer;
