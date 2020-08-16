import React from "react";
import MathJax from "react-mathjax-preview";
import "./App.css";

// const neweq = String.raw`$a^{b}+x^{y}=\frac{q}{p}$`;

const MathEq = ({ math }) => {
  return (
    <span id="eqcontainer">
      <MathJax math={math} />
    </span>
  );
};

export default MathEq;
