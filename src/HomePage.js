import React, { Component } from "react";
import LoginPage from "./LoginPage";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.timerID = null;
    this.state = { valuesz: 500 };
  }

  componentDidMount() {
    console.log(this.previousState);
    this.timerID = setInterval(() => {
      this.setState({ valuesz: this.state.valuesz - 12 });
      console.log(this.state.valuesz);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <LoginPage funstatus={this.state.valuesz} />;
  }
}

export default HomePage;
