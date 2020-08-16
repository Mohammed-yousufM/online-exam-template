import React, { Component } from "react";

import { questionsAll } from "./dataFile";

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { status: "" };
    this.i = 0;
    this.j = 0;
  }

  submitInfoToParent = () => {
    this.props.toExamPageJS(true, true);
  };

  componentDidMount() {
    this.props.toExamPageJS(true, false);
    // setTimeout(() => {
    //   console.log("timeOver");
    //   document.getElementsByTagName("form").formSubmit.submit();
    // }, 10000);
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      this.props.infoTimerEnd !== nextProps.infoTimerEnd &&
      nextProps.infoTimerEnd === true
    ) {
      document.getElementsByTagName("form").formSubmit.submit();
    }
  }

  // shouldComponentUpdate(prevProps) {
  //   if (
  //     this.props.infoTimerEnd !== prevProps.infoTimerEnd &&
  //     this.props.infoTimerEnd === true
  //   ) {
  //     document.getElementsByTagName("form").formSubmit.submit();
  //     return true;
  //   }
  // }

  submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // form.reset();
        this.setState({ status: "SUCCESS" });
        this.submitInfoToParent();
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  mainQfunc = (que) => {
    return (
      <div className="ui raised olive segment" key={this.i++}>
        <div className="ui segment">{que["question"]}</div>
        <div className="ui stackable two column grid">
          <div className="column">
            <div className="ui segment">
              <input
                type="radio"
                id={++this.j}
                name={que["question"][0]}
                defaultChecked={false}
                value="A"
              />
              <label htmlFor={this.j}>{que["optionA"]}</label>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <input
                type="radio"
                id={++this.j}
                name={que["question"][0]}
                defaultChecked={false}
                value="B"
              />
              <label htmlFor={this.j}>{que["optionB"]}</label>
            </div>
          </div>
        </div>
        <div className="ui stackable two column grid">
          <div className="column">
            <div className="ui segment">
              <input
                type="radio"
                id={++this.j}
                name={que["question"][0]}
                defaultChecked={false}
                value="C"
              />
              <label htmlFor={this.j}>{que["optionC"]}</label>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <input
                type="radio"
                id={++this.j}
                name={que["question"][0]}
                defaultChecked={false}
                value="D"
              />
              <label htmlFor={this.j}>{que["optionD"]}</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const userID = this.props.username;
    const { status } = this.state;
    return (
      <form
        id="formSubmit"
        name="examForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/maypkgqj"
        method="POST"
      >
        <div>
          <input
            className="ui fluid disabled input"
            type="text"
            id="userID"
            name="userID"
            value={userID}
            readOnly
          />
        </div>

        <>{questionsAll.map(this.mainQfunc)}</>
        <>
          {status === "SUCCESS" ? (
            <p>Thanks! Your response is recorded</p>
          ) : (
            <button type="submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </>
      </form>
    );
  }
}

export default QuestionsPage;
