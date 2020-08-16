import React, { Component } from "react";
import Timer from "./Timer";
import QuestionsPage from "./QuestionsPage";

class ExamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   startTimer: false,
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
    //know when timer ends
    this.setState({ isTimerEnd: timerStatus });
  };

  controlQuestionsPage = (QPageMount, QPageSubmit) => {
    //store when one of render and submit are done
    this.setState({
      isQuestionsPageMount: QPageMount,
      isQuestionsPageSubmit: QPageSubmit,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isQuestionsPageSubmit !== prevState.isQuestionsPageSubmit &&
      this.state.isQuestionsPageSubmit === true
    ) {
      this.pageChange();
    }
  }

  render() {
    return (
      <div>
        <Timer
          toExamPageJStime={this.controlTimer}
          shouldTimerStart={this.state.isQuestionsPageMount}
        />
        <QuestionsPage
          toExamPageJS={this.controlQuestionsPage}
          infoTimerEnd={this.state.isTimerEnd}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default ExamPage;
