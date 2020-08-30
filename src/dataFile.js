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
  { userID: "arshan", passw: "1012" },
  { userID: "neeraj", passw: "1013" },
  { userID: "abel", passw: "1014" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "What is multiplicative inverse of -1",
    optionA: 0,
    optionB: 1,
    optionC: -1,
    optionD: "Does not exist",
  },

  {
    id: "2.",
    question: "What is Additive inverse of 2/5",
    optionA: "-2 / 5",
    optionB: "2 / 5",
    optionC: "-5 / 2",
    optionD: "5 / 2",
  },

  {
    id: "3.",
    question:
      "Which smallest number must be added to 1901 to get a perfect square?",
    optionA: 35,
    optionB: 32,
    optionC: 30,
    optionD: 29,
  },

  {
    id: "4.",
    question: "Cube root of 13824",

    optionA: "23",
    optionB: "22",
    optionC: "24",
    optionD: "22",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Multiply $\frac{6}{13}$ by the reciprocal of $\frac{-7}{16}$`}
      />
    ),

    optionA: <MathEq math={String.raw`$\frac{96}{91}$`} />,
    optionB: <MathEq math={String.raw`$\frac{91}{96}$`} />,
    optionC: <MathEq math={String.raw`$\frac{-91}{96}$`} />,
    optionD: <MathEq math={String.raw`$\frac{-96}{91}$`} />,
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`Multiplicative inverse of $7^{-2}$ is`} />
    ),

    optionA: <MathEq math={String.raw`$7^{-2}$`} />,
    optionB: <MathEq math={String.raw`$7^{2}$`} />,
    optionC: "0",
    optionD: "Does not exist",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Evaluate ($3^{-7} \div 3^{-10} \times 3^{-5}$)`}
      />
    ),

    optionA: <MathEq math={String.raw`$\frac{1}{3}$`} />,
    optionB: <MathEq math={String.raw`$\frac{1}{3^{2}}$`} />,
    optionC: <MathEq math={String.raw`$\frac{1}{3^{3}}$`} />,
    optionD: <MathEq math={String.raw`$\frac{1}{3^{4}}$`} />,
  },

  {
    id: "8.",
    question: (
      <MathEq math={String.raw`Evaluate $\left ( \frac{1}{2} \right )^{-5}$`} />
    ),

    optionA: 8,
    optionB: 16,
    optionC: 32,
    optionD: 64,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Find $\left ( 2^{-1}+3^{-1}+4^{-1} \right )^{0}$`}
      />
    ),

    optionA: 1,
    optionB: -1,
    optionC: <MathEq math={String.raw`$\frac{1}{30}$`} />,
    optionD: 0,
  },

  {
    id: "10.",
    question: (
      <MathEq math={String.raw`Find m for which $5^{m}\div 5^{-3}=5^{5}$`} />
    ),

    optionA: 5,
    optionB: 3,
    optionC: 2,
    optionD: 4,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left ( 3^{0}-4^{0} \right )\times 5^{2}$`}
      />
    ),

    optionA: 0,
    optionB: 1,
    optionC: -1,
    optionD: 2,
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left ( 64 \right )^{-2/3}\times\left ( \frac{1}{4} \right )^{-3}$`}
      />
    ),

    optionA: 1,
    optionB: 0,
    optionC: 2,
    optionD: 4,
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`Evaluate $\left \{ \frac{1}{3}^{-1}-\frac{1}{4}^{-1} \right \}^{-1}$`}
      />
    ),

    optionA: 1,
    optionB: -1,
    optionC: 0,
    optionD: 12,
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`If $a = -1$, $b = 2$, then find $a^{b} \div b^{a}$`}
      />
    ),

    optionA: "1",
    optionB: "-1",
    optionC: "2",
    optionD: "1/2",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`Find the value of $x+x\left ( x^{x} \right )$ when $x=2$`}
      />
    ),

    optionA: 4,
    optionB: 6,
    optionC: 8,
    optionD: 10,
  },

  {
    id: "16.",
    question:
      "A body moves 6m north, 8m east and 10m vertically upwards, what is its resultant displacement from initial position  ",

    optionA: <MathEq math={String.raw`$10\sqrt{2} \, m$`} />,
    optionB: <MathEq math={String.raw`$10m$`} />,
    optionC: <MathEq math={String.raw`$\frac{10}{\sqrt{2}}m$`} />,
    optionD: <MathEq math={String.raw`$10\times2m$`} />,
  },

  {
    id: "17.",
    question:
      "A man goes 10m towards North, then 20m towards East then displacement is",

    optionA: "22.5m",
    optionB: "25m",
    optionC: "25.5m",
    optionD: "30m",
  },

  {
    id: "18.",
    question:
      "A Drone flies 400 m  north and 300 m south and then flies 1200 m upwards then net displacement is nearly",
    optionA: "1200m",
    optionB: "1300m",
    optionC: "1400m",
    optionD: "1500m",
  },

  {
    id: "19.",
    question:
      "An athlete completes one round of a circular track of radius R in 40 sec. What will be his displacement at the end of 2 min. 20 sec",
    optionA: "Zero",
    optionB: "2R",
    optionC: <MathEq math={String.raw`$2\pi R$`} />,
    optionD: <MathEq math={String.raw`$7\pi R$`} />,
  },

  {
    id: "20.",
    question:
      "A wheel of radius 1 meter rolls forward half a revolution on a horizontal ground. The magnitude of the displacement of the point of the wheel initially in contact with the ground is",
    optionA: <MathEq math={String.raw`$2\pi$`} />,
    optionB: <MathEq math={String.raw`$\sqrt{2} \, \pi$`} />,
    optionC: <MathEq math={String.raw`$\sqrt{\pi ^ {2} +4}$`} />,
    optionD: <MathEq math={String.raw`$\pi$`} />,
  },
  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`A person travels along a straight road for half the distance with speed $\nu_{1}$ and the remaining half distance with  speed $\nu_{2}$ The average speed is given by`}
      />
    ),
    optionA: <MathEq math={String.raw`$\nu_{1} \nu_{2}$`} />,
    optionB: <MathEq math={String.raw`$\frac{\nu_{2} ^{2}}{\nu_{1} ^{2}}$`} />,
    optionC: <MathEq math={String.raw`$\frac{\nu_{1} + \nu_{2}}{2}$`} />,
    optionD: (
      <MathEq
        math={String.raw`$\frac{2 \nu_{1}  \nu_{2}}{\nu_{1} + \nu_{2}}$`}
      />
    ),
  },
  {
    id: "22.",
    question:
      "A car travels from A to B at a speed of 20 km/hr and returns at a speed of 30 km/hr. The average speed of the car for the whole journey is",
    optionA: "25 km/hr",
    optionB: "24 km/hr",
    optionC: "50 km/hr",
    optionD: "5 km/hr",
  },
  {
    id: "23.",
    question:
      "A boy walks to his school at a distance of 6 km with constant speed of 2.5 km/hour and walks back with a constant speed of 4 km/hr. His average speed for round trip expressed in km/hour, is ",
    optionA: "24/13",
    optionB: "40/13",
    optionC: "3",
    optionD: "1/2",
  },
  {
    id: "24.",
    question:
      "A car travels the first half of a distance between two places at a speed of 30 km/hr and the second half of the distance at 50 km/hr. The average speed of the car for the whole journey is",
    optionA: "42.5 km/hr",
    optionB: "40.0 km/hr",
    optionC: "37.5 km/hr",
    optionD: "35.0 km/hr",
  },
  {
    id: "25.",
    question:
      "One car moving on a straight road covers one third of the distance with 20 km/hr and the rest with 60 km/hr. The average speed is",
    optionA: "40 km/hr",
    optionB: "80 km/hr",
    optionC: <MathEq math={String.raw`$46\frac{2}{3}$ km/hr`} />,
    optionD: "36 km/hr",
  },
  {
    id: "26.",
    question: "One nanometer is equal to",

    optionA: <MathEq math={String.raw`$10^{9} m$`} />,
    optionB: <MathEq math={String.raw`$10^{-9} m$`} />,
    optionC: <MathEq math={String.raw`$10^{12} m$`} />,
    optionD: <MathEq math={String.raw`$10^{-12} m$`} />,
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`$\frac{3x}{4} - \frac{7}{4} = 5x + 12$. The value of x is`}
      />
    ),

    optionA: "   55/17   ",
    optionB: "  -55/17   ",
    optionC: "   17/55   ",
    optionD: "  -17/55   ",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`Find the roots of the quadratic equation $15x^{2} \, -11x \, +2 \, = \, 0$.`}
      />
    ),

    optionA: "  1/2, 1/4  ",
    optionB: "  2/3, 3/2  ",
    optionC: "  6/5, 1/3  ",
    optionD: "  -6/5, -1/3",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`A 10 m long ladder leans against a wall making angle $53^{\circ}$ horizontal. How high from the ground does the ladder touch the wall?`}
      />
    ),

    optionA: "   6 m   ",
    optionB: "   8 m   ",
    optionC: "   10 m  ",
    optionD: "   12 m  ",
  },
  {
    id: "30.",
    question: "The values of sin30 and cos60 are respectively",

    optionA: "   1, 0   ",
    optionB: "   0, 1   ",
    optionC: <MathEq math={String.raw`$\frac{1}{2}$ , $\frac{\sqrt{3}}{2}$`} />,
    optionD: <MathEq math={String.raw`$\frac{1}{2}$ , $\frac{1}{2}$`} />,
  },
];
