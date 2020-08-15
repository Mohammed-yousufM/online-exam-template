import React from "react";

const InstructionsPage = ({ toAppJS }) => {
  const pageChange = () => {
    //callback function, ask parent to render LogIN page on buttom click
    toAppJS(1);
  };

  return (
    <div className="text-justify container">
      <h1 className="text-center">INSTRUCTIONS!!!</h1>
      <h3 className="text-left">
        Please read the instructions carefully before you start the exam.
      </h3>
      <section>
        <ul>
          <li>Test contains questions from Mathematics and Physics.</li>
          <li>
            There are total 40 questions || Questions 1-20 are from Mathematics
            || Questions 20-40 are from Physics.
          </li>
          <li>Test total duration is 30 minutes.</li>
          <li>
            Click <strong className="text-info">Submit</strong> only after
            you've answered all your questions.
            <br />
            <span className="text-danger">
              Warning! Don't close the browser tab without submitting your
              answers.
            </span>
          </li>
          <li>
            If you kept writing and the time ran out - your answers will get
            submitted automatically.
            <br />
            <span className="text-danger">
              Warning! Don't close the browser tab until you see a thankyou and
              submit success page.
            </span>
          </li>
          <li>
            After your answers are submitted, wait for submit success page. This
            is to make sure your answers are not lost.
          </li>
        </ul>
      </section>
      <p>If you've read the instructions, Click the button below to LogIN</p>
      <button type="button" className="btn btn-info" onClick={pageChange}>
        I've read the instructions
      </button>
    </div>
  );
};

export default InstructionsPage;
