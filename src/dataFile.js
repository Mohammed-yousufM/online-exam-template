import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "chan", passw: "abc1" },
  { userID: "sadi", passw: "xyz1" },
  { userID: "admin", passw: "admin" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "What is multiplicative inverse of 0",

    optionA: 0,

    optionB: 1,

    optionC: -1,

    optionD: "Does not exist",
  },
  {
    id: "2.",
    question: "What is Additive inverse of -2/5",

    optionA: "-2 / 5",

    optionB: "2 / 5",
    optionC: "-5 / 2",

    optionD: "5 / 2",
  },
  {
    id: "3.",
    question: "Simplify (-7/18*15/-7)-(1*1/4)+(1/2*1/4)",

    optionA: "17 / 24",

    optionB: "24 / 17",

    optionC: "-17 / 24",

    optionD: "-24 / 17",
  },
  {
    id: "4.",
    question: "What Number should be added to 7/12 to get 4/15",

    optionA: "-11 / 30",

    optionB: "51 / 60",

    optionC: "1 / 20",

    optionD: "-19 / 60",
  },
  {
    id: "5.",
    question: "Evaluate 2/5*(-3/7)-1/6*3/2+1/14*2*5",

    optionA: "11 / 28",

    optionB: "28 / 11",

    optionC: "-11 / 28",

    optionD: "-28 / 11",
  },
  {
    id: "6.",
    question:
      "Find the smallest number by which 25200 should be multiplied so that the result is a perfect square",

    optionA: 3,
    optionB: 5,
    optionC: 7,
    optionD: 11,
  },
  {
    id: "7.",
    question: <MathEq math={String.raw`$\sqrt{248+\sqrt{52+\sqrt{144}}}$`} />,

    optionA: 14,
    optionB: 16,
    optionC: 16.6,
    optionD: 18.8,
  },
  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`$\frac{112}{\sqrt{196}}\times\frac{\sqrt{576}}{12} \timesfrac{\sqrt{256}}{8}$`}
      />
    ),

    optionA: 8,
    optionB: 12,
    optionC: 16,
    optionD: 32,
  },

  {
    id: "9.",
    question: <MathEq math={String.raw`$\sqrt{31684}$`} />,

    optionA: 168,
    optionB: 172,
    optionC: 178,
    optionD: 182,
  },

  {
    id: "10.",
    question: <MathEq math={String.raw`$\sqrt{0.01+\sqrt{0.0064}}$`} />,

    optionA: 0.3,
    optionB: 0.03,
    optionC: <MathEq math={String.raw`$\sqrt{0.18}$`} />,
    optionD: "None of these",
  },
  {
    id: "11.",
    question: <MathEq math={String.raw`$\sqrt{9216}+\sqrt{12544}$`} />,

    optionA: 196,
    optionB: 200,
    optionC: 206,
    optionD: 218,
  },
  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`If $\sqrt{15625}=125$, then the value of $(\sqrt{15625}+\sqrt{156.25}+\sqrt{1.5625})$ is`}
      />
    ),

    optionA: 1.3875,
    optionB: 13.785,
    optionC: 138.75,
    optionD: 156.25,
  },
  {
    id: "13.",
    question:
      "Which smallest number must be added to 2203 to get a perfect square?",

    optionA: 1,
    optionB: 3,
    optionC: 6,
    optionD: 8,
  },
  {
    id: "14.",
    question:
      "What is the smallest integer which when multiplied by 392, gives a perfect square?",

    optionA: 2,
    optionB: 3,
    optionC: 5,
    optionD: 6,
  },
  {
    id: "15.",
    question:
      "The least number to be subtracted from 16800 to make it a pefect square?",

    optionA: 249,
    optionB: 159,
    optionC: 169,
    optionD: 219,
  },
];
