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
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (
      this.props.infoTimerEnd !== nextProps.infoTimerEnd &&
      nextProps.infoTimerEnd === true
    ) {
      document.getElementsByTagName("form").formSubmit.submit();
    }
  }

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
        form.reset();
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
      <div className="ui raised olive segment" key={que["id"]}>
        <div className="ui segment">
          <span>{que["id"]}</span>
          <span> </span>
          <span>{que["question"]}</span>
          <span>{que["image1"] || null}</span>
          <span>{que["image2"] || null}</span>
        </div>
        <div className="ui stackable two column grid">
          <div className="column">
            <div className="ui segment">
              <input
                type="radio"
                id={++this.j}
                name={que["id"]}
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
                name={que["id"]}
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
                name={que["id"]}
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
                name={que["id"]}
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
        className="container pr-2"
        id="formSubmit"
        name="examForm"
        onSubmit={this.submitForm}
        //insert your formspree integration endpoint into action attribute below
        action="https://formspree.io/f/mqkgpvgk"
        method="POST"
      >
        <div>
          <input
            className="form-control"
            type="text"
            id="disabledInput"
            name="userID"
            value={"Good Luck " + userID + "!"}
            readOnly
          />
        </div>

        <>{questionsAll.map(this.mainQfunc)}</>
        <>
          {status === "SUCCESS" ? (
            <p>Thanks! Your response is recorded</p>
          ) : (
            <div className="row">
              <span className="col-5"></span>
              <button type="submit" className="btn btn-danger col-2">
                Submit
              </button>
              <span className="col-5"></span>
            </div>
          )}
          {status === "ERROR" && <strong>Ooops! There was an error.</strong>}
        </>
      </form>
    );
  }
}

export default QuestionsPage;
