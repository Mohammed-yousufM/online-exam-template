import React, { Component } from "react";

import { studentsDB } from "./dataFile";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: "",
      password: "",
      errorMsg: "",
    };
  }

  pageChange = () => {
    //callback function, ask parent to render Exam page on buttom click
    this.props.toAppJS(1);
  };

  sendUserData = () => {
    //callback function to store username inside parent
    this.props.toGetUser(this.state.userID);
  };

  userIDAreaUpdate = (e) => {
    this.setState({ userID: e.target.value });
  };

  passwAreaUpdate = (e) => {
    this.setState({ password: e.target.value });
  };

  authFunc = () => {
    const result = studentsDB.some((student) => {
      return (
        this.state.userID === student["userID"] &&
        this.state.password === student["passw"]
      );
    });

    if (result === false) {
      this.setState({ errorMsg: "Please enter correct UserName and Password" });
    } else {
      this.sendUserData();
      this.pageChange();
    }
  };

  render() {
    return (
      <div className="container">
        <section className="text-center">
          <h1 className="text-primary" aria-describedby="subHeader">
            Hello and Welcome!
          </h1>
          <small id="subHeader" className="text-muted">
            To Mathematics-Physics Foundations
          </small>
        </section>

        <h3 className="text-secondary">Please Log-IN to continue.</h3>
        <form>
          <div className="form-group">
            <label htmlFor="userID">UserName:</label>
            <input
              type="text"
              name="userID"
              id="userID"
              className="form-control"
              placeholder="Enter your Username"
              aria-describedby="usenameHelp"
              value={this.state.userID}
              onChange={(e) => this.userIDAreaUpdate(e)}
            ></input>
            <small id="usenameHelp" className="form-text text-muted">
              This field is case sensitive
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your Password"
              aria-describedby="passwordHelp"
              value={this.state.password}
              onChange={(e) => this.passwAreaUpdate(e)}
            ></input>
            <small id="passwordHelp" className="form-text text-muted">
              This field is case sensitive
            </small>
          </div>

          <div className="form-group">
            <p>Click the button below to Log-IN and view instructions.</p>
            <button
              id="startExam"
              type="button"
              className="btn btn-info"
              onClick={this.authFunc}
            >
              Take me to instructions!
            </button>
          </div>
        </form>
        <p className="text-danger">{this.state.errorMsg}</p>
      </div>
    );
  }
}

export default LoginPage;
