import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "admin", passw: "1000" },
  // { userID: "ayaan", passw: "1001" },
  // { userID: "sami", passw: "1002" },
  // { userID: "santosh", passw: "1003" },
  // { userID: "rugveda", passw: "1004" },
  // { userID: "richitha", passw: "1005" },
  // { userID: "maimuna", passw: "1006" },
  // { userID: "josephus", passw: "1007" },
  // { userID: "samuel", passw: "1008" },
  // { userID: "masood", passw: "1009" },
  // { userID: "vineel", passw: "1010" },
  // { userID: "abhinav", passw: "1011" },
  // { userID: "arshan", passw: "1012" },
  // { userID: "neeraj", passw: "1013" },
  // { userID: "abel", passw: "1014" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "Find the sum of additive and multiplicative inverse of 7.",

    optionA: <MathEq math={String.raw`A) $\frac{-48}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{48}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7}{48}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-7}{48}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Find the sum of $\frac{4}{7} + \left ( \frac{-4}{9} \right ) + \frac{3}{7} + \left ( \frac{-13}{9} \right )$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{8}{9}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-8}{9}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{8}{63}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-8}{63}$`} />,
  },

  {
    id: "3.",
    question: "Square of an Even number is?",

    optionA: "A) Zero",
    optionB: "B) Odd",
    optionC: "C) Even",
    optionD: "D) Not defined",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Find $\left ( -3 \right )^{4} \times \left ( \frac{5}{3} \right )^{4}$`}
      />
    ),

    optionA: "A) 25",
    optionB: "B) 125",
    optionC: "C) 1125",
    optionD: "D) 625",
  },

  {
    id: "5.",
    question: (
      <MathEq math={String.raw`Find $\frac {8^{-1} \times 5^{3}}{2^{-4}}$`} />
    ),

    optionA: "A) 125",
    optionB: "B) 500",
    optionC: "C) 25",
    optionD: "D) 250",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`Find $x$, from $\left ( -5 \right )^{x+1} \times \left ( -5 \right )^{5}= \left ( -5 \right )^{7}$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 2",
    optionC: "C) 1",
    optionD: "D) 0",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left ( 64 \right ) ^{\frac{-2}{3}} \times \left ( \frac{1}{4} \right ) ^{-3}$`}
      />
    ),

    optionA: "A) 1/4",
    optionB: "B) 4",
    optionC: "C) 16",
    optionD: "D) 1",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Add the expressions $5x^{2} + 3x - 8$ and $4x^{2} -5x +6$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $9x^{2} -2x - 2$`} />,
    optionB: <MathEq math={String.raw`B) $9x^{2} +2x - 2$`} />,
    optionC: <MathEq math={String.raw`C) $9x^{2} -2x + 2$`} />,
    optionD: <MathEq math={String.raw`D) $-9x^{2} -2x - 2$`} />,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Subtract the expression $4x^{2} -5x +6$ from $5x^{2} + 3x - 8$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $x^{2} +8x -14$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2} -8x -14$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2} +8x +14$`} />,
    optionD: <MathEq math={String.raw`D) $-x^{2} +8x -14$`} />,
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`Co-efficient of $x^{2}y$ from $\frac{3}{2} x^{2}y \,+\, \frac{4}{5} xy \,-\, \frac{1}{2} x^{2}yz$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-1}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{-3}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{2}$`} />,
  },

  {
    id: "11.",
    question: "Add ab-bc, bc-ca,  ca-ab",

    optionA: "A) ab-bc",
    optionB: "B) ab+bc+ca",
    optionC: "C) 0",
    optionD: "D) -ab-bc-ca",
  },

  {
    id: "12.",
    question: "Which one of the following expression is not a polynomial?",

    optionA: <MathEq math={String.raw`A) $x^{2} - 2x +5$`} />,
    optionB: <MathEq math={String.raw`B) $y^{2} - xy +5$`} />,
    optionC: "C) x+1",
    optionD: <MathEq math={String.raw`D) $t^{2}+\sqrt{t} +1$`} />,
  },

  {
    id: "13.",
    question: <MathEq math={String.raw`The expression $l^{2}+m^{2}$ is?`} />,

    optionA: "A) Binomial",
    optionB: "B) Monomial",
    optionC: "C) Trinomial",
    optionD: "D) None of these",
  },

  {
    id: "14.",
    question: "The expression 5xyz is?",

    optionA: "A) Binomial",
    optionB: "B) Monomial",
    optionC: "C) Trinomial",
    optionD: "D) None of these",
  },

  {
    id: "15.",
    question: (
      <MathEq math={String.raw`The degree of $x^{2} + \frac{1}{x^{2}} +1$`} />
    ),

    optionA: "A) 4",
    optionB: "B) 2",
    optionC: "C) Does not exist",
    optionD: "D) 1",
  },

  {
    id: "16.",
    question:
      "One car moving on a straight road covers one third of the distance with 20 km/hr and the rest with 60 km/hr. The average speed is",

    optionA: "A) 40 km/hr",
    optionB: "B) 80 km/hr",
    optionC: <MathEq math={String.raw`C) $46\frac{2}{3}$ km/hr`} />,
    optionD: "D) 36 km/hr",
  },

  {
    id: "17.",
    question:
      "A car moves for half of its time at 80 km/h and for rest half of time at 40 km/h. Total distance covered is 60 km. What is the average speed of the car",

    optionA: "A) 60 km/hr",
    optionB: "B) 80 km/hr",
    optionC: "C) 120 km/hr",
    optionD: "D) 180 km/hr",
  },

  {
    id: "18.",
    question:
      "A train has a speed of 60 km/h. for the first one hour and 40 km/h for the next half hour. Its average speed in km/h is",

    optionA: "A) 50",
    optionB: "B) 53.33",
    optionC: "C) 48",
    optionD: "D) 70",
  },

  {
    id: "19.",
    question: "Which of the following is a one dimensional motion",

    optionA: "A) Landing of an aircraft",
    optionB: "B) Earth revolving a round the sun",
    optionC: "C) Motion of wheels of a moving trains",
    optionD: "D) Train running on a straight track",
  },

  {
    id: "20.",
    question:
      "A 150 m long train is moving with a uniform velocity of 45 km/h. The time taken by the train to cross a bridge of length 850 meters is",

    optionA: "A) 56 sec",
    optionB: "B) 68 sec",
    optionC: "C) 80 sec",
    optionD: "D) 92 sec",
  },

  {
    id: "21.",
    question:
      "A particle is constrained to move on a straight line path. It returns to the starting point after 10 sec. The total distance covered by the particle during this time is 30 m. Which of the following statements about the motion of the particle is false",

    optionA: "A) Displacement of the particle is zero",
    optionB: "B) Average speed of the particle is 3 m/s",
    optionC: "C) Displacement of the particle is 30 m",
    optionD: "D) Both (A) and (B)",
  },
  {
    id: "22.",
    question:
      "A particle moves along a semicircle of radius 10m in 5 seconds. The average velocity of the particle is",

    optionA: <MathEq math={String.raw`A) $2\pi \, ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $4\pi \, ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $2 \, ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $4 \, ms^{-1}$`} />,
  },
  {
    id: "23.",
    question:
      "The numerical ratio of displacement to the distance covered is always",

    optionA: "A) Less than one",
    optionB: "B) Equal to one",
    optionC: "C) Equal to or less than one",
    optionD: "D) Equal to or greater than one",
  },
  {
    id: "24.",
    question:
      "A 100 m long train is moving with a uniform velocity of 45 km/hr. The time taken by the train to cross a bridge of length 1 km is",

    optionA: "A) 58 s",
    optionB: "B) 68 s",
    optionC: "C) 78 s",
    optionD: "D) 88 s",
  },
  {
    id: "25.",
    question:
      "A particle moves for 20 seconds with velocity 3 m/s and then velocity 4 m/s for another 20 seconds and finally moves with velocity 5 m/s for next 20 seconds. What is the average velocity of the particle",

    optionA: "A) 3 m/s",
    optionB: "B) 4 m/s",
    optionC: "C) 5 m/s",
    optionD: "D) Zero",
  },
  {
    id: "26.",
    question: "The correct statement from the following is",

    optionA:
      "A) A body having zero velocity will not necessarily have zero acceleration",
    optionB:
      "B) A body having zero velocity will necessarily have zero acceleration",
    optionC:
      "C) A body having uniform speed can have only uniform acceleration",
    optionD:
      "D) A body having non-uniform velocity will have zero acceleration",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`The initial velocity of the particle is 10 m/sec and its retardation is $2 \, m/sec^{2}$. The distance moved by the particle in 5$\textit{th}$ second of its motion is`}
      />
    ),

    optionA: "A) 1 m",
    optionB: "B) 19 m",
    optionC: "C) 50 m",
    optionD: "D) 75 m",
  },
  {
    id: "28.",
    question:
      "A motor car moving with a uniform speed of 20 m/sec comes to stop on the application of brakes after travelling a distance of 10m. Its acceleration is",

    optionA: <MathEq math={String.raw`A) $20 \, m/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $-20 \, m/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $-40 \, m/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $+2 \, m/sec^{2}$`} />,
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`The velocity of a body moving with a uniform acceleration of $2 \, m/sec^{2}$ is $10 \, m/sec^{2}$. Its velocity after an interval of 4 sec is`}
      />
    ),

    optionA: "A) 12 m/sec",
    optionB: "B) 14 m/sec",
    optionC: "C) 16 m/sec",
    optionD: "D) 18 m/sec",
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`A body starts from rest. What is the ratio of the distance travelled by the body during the 4$\textit{th}$ and 3$\textit{rd}$ second`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{7}{5}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{5}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7}{3}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{3}{7}$`} />,
  },
];
