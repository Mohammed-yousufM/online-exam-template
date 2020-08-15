import React, { Component } from "react";
import InstructionsPage from "./InstructionsPage";
import LoginPage from "./LoginPage";
import ExamPage from "./ExamPage";
import ThankPage from "./ThankPage";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <>
        <InstructionsPage />
        <LoginPage />
        <ExamPage />
        <ThankPage />
        <Timer />
      </>
    );
  }
}

export default App;
