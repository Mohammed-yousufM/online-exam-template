// import React from "react";

// function LoginPage(props) {
//   const zx = 234;
//   if (props.funstatus === 500) {
//     console.log("prop is 500");
//   } else {
//     console.log("prop is not");
//   }
//   return (
//     <div>
//   This is functional component: {props.funstatus} , {zx}
//   <input type="radio" name="x" />
//   <label>Real button</label>
//   <input type="radio" name="x" />
//   <label>fake button</label>
//     </div>
//   );
// }

// export default LoginPage;

import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.zx = 234;
    this.state = {};
  }

  componentDidMount() {
    if (this.props.funstatus === 500) {
      console.log("prop is 500");
    } else {
      console.log("prop is not");
    }
  }

  componentDidUpdate() {
    if (this.props.funstatus === 500) {
      console.log("prop is 500");
    } else {
      console.log("prop is not");
    }
  }

  render() {
    return (
      <div>
        This is functional component: {this.props.funstatus} , {this.zx}
        <input type="radio" name="x" />
        <label>Real button</label>
        <input type="radio" name="x" />
        <label>fake button</label>
      </div>
    );
  }
}

export default LoginPage;
