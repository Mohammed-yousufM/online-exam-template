import React, { Component } from "react";
import Timer from "./Timer";
import QuestionsPage from "./QuestionsPage";

class ExamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTimer: false,
      isTimerEnd: false,
      isQuestionsPageMount: false,
      isQuestionsPageSubmit: false,
    };
  }

  pageChange = () => {
    //callback function, ask parent Appjs to render Thanks page on submitting response
    this.props.toAppJS(3);
  };

  controlTimer = (timerStatus) => {
    //alert when timer ends
    this.setState({ isTimerEnd: timerStatus });
  };

  controlQuestionsPage = () => {
    //alert when one of render and submit are done
  };

  render() {
    return (
      <div>
        <Timer
          toExamPageJS={this.controlTimer}
          shouldTimerStart={this.state.isQuestionsPageMount}
        />
        <QuestionsPage toExamPageJS={this.controlQuestionsPage} />
      </div>
    );
  }
}

export default ExamPage;
