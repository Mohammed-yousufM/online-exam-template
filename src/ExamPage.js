import React, { Component } from "react";
import Timer from "./Timer";
import QuestionsPage from "./QuestionsPage";

class ExamPage extends Component {
  render() {
    return (
      <div>
        <Timer />
        <QuestionsPage />
      </div>
    );
  }
}

export default ExamPage;
