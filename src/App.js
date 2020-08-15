import React, { Component } from "react";
import InstructionsPage from "./InstructionsPage";
import LoginPage from "./LoginPage";
import ExamPage from "./ExamPage";
import ThankPage from "./ThankPage";

class App extends Component {
  constructor(props) {
    super(props);

    // 0:LoginPage || 1:InstructionsPage|| 2:ExamPage || 3:ThankPage
    this.state = { pageTobeRendered: 0 };
  }

  //Call back function, gather permission from children, decide page to be rendered
  decidePage = (pageIndex) => {
    this.setState({ pageTobeRendered: pageIndex });
  };

  render() {
    return (
      <React.Fragment>
        {(() => {
          switch (this.state.pageTobeRendered) {
            case 0:
              return <LoginPage toAppJS={this.decidePage} />;

            case 1:
              return <InstructionsPage toAppJS={this.decidePage} />;

            case 2:
              return <ExamPage toAppJS={this.decidePage} />;

            case 3:
              return <ThankPage toAppJS={this.decidePage} />;

            default:
              return <LoginPage toAppJS={this.decidePage} />;
          }
        })()}
      </React.Fragment>
    );
  }
}

export default App;
