import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "admin", passw: "1000" },
  { userID: "ayaan", passw: "1001" },
  { userID: "sami", passw: "1002" },
  { userID: "santosh", passw: "1003" },
  { userID: "rugveda", passw: "1004" },
  { userID: "richitha", passw: "1005" },
  { userID: "maimuna", passw: "1006" },
  { userID: "josephus", passw: "1007" },
  { userID: "samuel", passw: "1008" },
  { userID: "masood", passw: "1009" },
  { userID: "vineel", passw: "1010" },
  { userID: "abhinav", passw: "1011" },
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
    question: (
      <MathEq
        math={String.raw`Simplify $\frac{-7}{18}\times\frac{15}{-7}-1\times\frac{1}{4}+\frac{1}{2}\times\frac{1}{4}$`}
      />
    ),
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
    question: "Square root of 0.2 is",
    optionA: 0.02,
    optionB: 0.2,
    optionC: 0.446,
    optionD: 0.632,
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
        math={String.raw`$\frac{112}{\sqrt{196}}\times \frac{\sqrt{576}}{12} \times \frac{\sqrt{256}}{8}$`}
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
  {
    id: "16.",
    question: "Light year is a unit of",
    optionA: "time",
    optionB: "distance",
    optionC: "speed",
    optionD: "energy",
  },
  {
    id: "17.",
    question: "Which of the following is not a fundamental quantity in SI?",
    optionA: "Mass",
    optionB: "Length",
    optionC: "Charge",
    optionD: "Temperatue",
  },
  {
    id: "18.",
    question: "A micrometer is related to centimetre as",
    optionA: <MathEq math={String.raw`1micron = $10^{-8}$cm`} />,
    optionB: <MathEq math={String.raw`1micron = $10^{-6}$cm`} />,
    optionC: <MathEq math={String.raw`1micron = $10^{-5}$cm`} />,
    optionD: <MathEq math={String.raw`1micron = $10^{-4}$cm`} />,
  },
  {
    id: "19.",
    question: "Density of wood is 0.5 gm/cc. Its corresponding value in SI is",
    optionA: 5,
    optionB: 50,
    optionC: 500,
    optionD: 5000,
  },
  {
    id: "20.",
    question:
      "A cube has numerically equal volume and surface area. The volume of such a cube is",
    optionA: "216 units",
    optionB: "1000 units",
    optionC: "2000 units",
    optionD: "3000 units",
  },
  {
    id: "21.",
    question: "Which of the following is a fundamental quantity in SI?",
    optionA: "Energy",
    optionB: "Speed",
    optionC: "Current",
    optionD: "Intensity of sound",
  },
  {
    id: "22.",
    question: "Which of the following is not the unit of time",
    optionA: "Micro second",
    optionB: "Leap year",
    optionC: "Lunar months",
    optionD: "Parallactic second",
  },
  {
    id: "23.",
    question:
      "Which of the following quantity is expressed as force per unit area",
    optionA: "Work",
    optionB: "Pressure",
    optionC: "Volume",
    optionD: "Area",
  },
  {
    id: "24.",
    question: "Candela is the unit of ",
    optionA: "Electric intensity",
    optionB: "Luminous intensity",
    optionC: "Sound intensity",
    optionD: "None of these",
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`The value of $\frac{10^{-4}\times10^{6}}{10^{-19}\times10^{4}}=$ ______`}
      />
    ),
    optionA: <MathEq math={String.raw`$10^{-10}$`} />,
    optionB: <MathEq math={String.raw`$10^{10}$`} />,
    optionC: <MathEq math={String.raw`$10^{-11}$`} />,
    optionD: <MathEq math={String.raw`$10^{17}$`} />,
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`The roots of the quadratic equation $x^{2}-5x+4=0$ are`}
      />
    ),
    optionA: "1,4",
    optionB: "-1,4",
    optionC: "-1,-4",
    optionD: "1,-4",
  },
  {
    id: "27.",
    question: "The sum of first 25 natural numbers is",
    optionA: 225,
    optionB: 325,
    optionC: 312,
    optionD: 352,
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`Find the sum of the following infinite geometric series $\frac{1}{3}-\frac{2}{9}+\frac{4}{27}-\frac{8}{81}+.....$`}
      />
    ),
    optionA: "1/2",
    optionB: "1/4",
    optionC: "1/5",
    optionD: "1/6",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`Using Binomial expansion evaluate $\left ( 1.001 \right )^{8}$`}
      />
    ),
    optionA: 1.8,
    optionB: 1.08,
    optionC: 1.008,
    optionD: 1.0008,
  },
  {
    id: "30.",
    question:
      "Two sides of a right angled triangle are 3m, 4m. Its hypotenuse will be",
    optionA: "7m",
    optionB: "3m",
    optionC: "4m",
    optionD: "5m",
  },
];
