import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "mohammed", passw: "mathphy" },
  { userID: "chan", passw: "abc1" },
  { userID: "sadi", passw: "xyz1" },
];

export const questionsAll = [
  {
    question: [
      "1. ",
      "my question data ",
      <MathEq math={String.raw`$x^{y}+a_{x}$`} />,
      " some later data",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendusvitae natus nihil hic. Architecto consequatur enim et ipsam repellat exercitationem consequuntur iste, ratione perferendis repudiandae hic. Harum,iste illum?",
    ],
    optionA: ["A"],
    optionB: ["B"],
    optionC: ["C"],
    optionD: ["D"],
  },
  {
    question: [
      "2. ",
      "second question data ",
      <MathEq math={String.raw`$a^{b}+x^{y}=\frac{q}{p}$`} />,
      " second later data",
    ],
    optionA: ["A ", <MathEq math={String.raw`$a^{b}+x^{y}=\frac{q}{p}$`} />],
    optionB: ["B"],
    optionC: ["C"],
    optionD: ["D"],
  },
  {
    question: [
      "3. ",
      "Third question data ",
      <MathEq math={String.raw`$a^{b}+x^{y}=\frac{q}{p}$`} />,
      " Third later data",
    ],
    optionA: ["A"],
    optionB: ["B"],
    optionC: ["C"],
    optionD: ["D"],
  },
  {
    question: [
      "4. ",
      "Fourth question data ",
      <MathEq math={String.raw`$a^{b}+x^{y}=\frac{q}{p}$`} />,
      " Fourth later data",
    ],
    optionA: ["A"],
    optionB: ["B"],
    optionC: ["C"],
    optionD: ["D"],
  },
];
