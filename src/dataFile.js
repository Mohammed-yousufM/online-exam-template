import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.png";
// import i2 from "./I2.png";
// import i3 from "./I3.png";
// import i4 from "./I4.PNG";
// import i5 from "./I5.PNG";
// import i6 from "./I6.png";
// import i7 from "./I7.PNG";
// import i8 from "./I8.PNG";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
  { sNO: "1", userID: "ayaan", passw: "1001" },
  { sNO: "2", userID: "sami", passw: "1002" },
  { sNO: "3", userID: "santosh", passw: "1003" },
  { sNO: "4", userID: "rugveda", passw: "1004" },
  { sNO: "5", userID: "richitha", passw: "1005" },
  { sNO: "6", userID: "maimuna", passw: "1006" },
  { sNO: "7", userID: "josephus", passw: "1007" },
  { sNO: "9", userID: "masood", passw: "1009" },
  { sNO: "10", userID: "vineel", passw: "1010" },
  { sNO: "11", userID: "abhinav", passw: "1011" },
  // // // // // // // Dubai Below
  { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  { sNO: "13", userID: "neeraj", passw: "1013" },
  { sNO: "14", userID: "abel", passw: "1014" },
  { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // New Users - continue S.No.
  { sNO: "16", userID: "srujana", passw: "1016" },
  { sNO: "17", userID: "meghana", passw: "1017" },
  { sNO: "18", userID: "asmitha", passw: "1018" },
  { sNO: "19", userID: "charan", passw: "1019" },
  { sNO: "20", userID: "mani", passw: "1020" }, //20
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`In quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $a,b,c \: \in  \: R, a=0$`} />,
    optionB: <MathEq math={String.raw`B) $a,b,c \: \in  \: R, a \neq 0$`} />,
    optionC: "C) Both",
    optionD: "D) None of these",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`The standard formula for finding the roots of quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $x \, = \, \frac{b \pm \sqrt{b^{2}-4ac}}{2a} $`}
      />
    ),
    optionB: (
      <MathEq math={String.raw`B) $x \, = \, \frac{\sqrt{b^{2}-4ac}}{2a} $`} />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $x \, = \, \frac{-b \pm \sqrt{b^{2}-4ac}}{2a} $`}
      />
    ),
    optionD: <MathEq math={String.raw`D) $x \, = \, \frac{-b \pm }{2a} $`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Sum of the roots of the quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{c}{a}$`} />,
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: <MathEq math={String.raw`D) $\frac{-b}{a}$`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Product of the roots of the quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{c}{a}$`} />,
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: <MathEq math={String.raw`D) $\frac{-b}{a}$`} />,
  },

  {
    id: "5.",
    question: (
      <MathEq math={String.raw`Convert $270^{\circ}$ to Radian measure`} />
    ),

    optionA: <MathEq math={String.raw`A) $3\pi^{c}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{2\pi^{c}}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{3\pi^{c}}{2}$ `} />,
    optionD: <MathEq math={String.raw`D) $\frac{3\pi^{c}}{4}$ `} />,
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`If $sinA=\frac{4}{5}$, then $\left ( 4+tanA \right )\left ( 2+cosA \right )$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{208}{5}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{208}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{208}{13}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{208}{15}$`} />,
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`$\left (3^{-7}\div 3^{-10}\right ) \, \times \, 3^{-5}=$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{9}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{27}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{81}$`} />,
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\frac{2tan30^{\circ}}{1-tan^{2}30^{\circ}}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{\sqrt{3}}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{3}$`} />,
    optionC: "C) 0",
    optionD: <MathEq math={String.raw`D) $\frac{1}{2}$`} />,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If one root of the quadratic equation $kx^{2}-7x+12=0$ is 3, then find the value of k`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) -1",
    optionC: "C) 1",
    optionD: "D) 5",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`Find the value of $sin60^{\circ} cos30^{\circ}+cos60^{\circ} sin30^{\circ}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: <MathEq math={String.raw`C) $\frac{3}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{2}{3}$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Find the value of $sin^{2}60^{\circ}+cos^{2}30^{\circ}+cot^{2}45^{\circ}+sec^{2}60^{\circ}-cosec^{2}30^{\circ}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{5}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{2}$`} />,
  },

  {
    id: "12.",
    question: <MathEq math={String.raw`The lines $x+y=8$, $x-y=2$ are`} />,

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "13.",
    question: "The pair of equations 2x+4y=3 and 12y+6x=6 have",

    optionA: "A) Unique solution",
    optionB: "B) Infinitely many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "14.",
    question: (
      <MathEq math={String.raw`Find m for which $5^{m}\div5^{-3}=5^{5}$`} />
    ),

    optionA: "A) 5",
    optionB: "B) 3",
    optionC: "C) 2",
    optionD: "D) 4",
  },

  {
    id: "15.",
    question:
      "Find the smallest number by which 25200 should be multiplied so that the result is a perfect square",
    optionA: "A) 3",
    optionB: "B) 5",
    optionC: "C) 7",
    optionD: "D) 11",
  },

  {
    id: "16.",
    question: "The expression 5xyz is?",

    optionA: "A) Binomial",
    optionB: "B) Monomial",
    optionC: "C) Trinomial",
    optionD: "D) None of these",
  },

  {
    id: "17.",
    question: "Square of an Even number is?",

    optionA: "A) Zero",
    optionB: "B) Odd",
    optionC: "C) Even",
    optionD: "D) Not defined",
  },

  {
    id: "18.",
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
    id: "19.",
    question: "Find the sum of additive and multiplicative inverse of 7.",

    optionA: <MathEq math={String.raw`A) $\frac{-48}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{48}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7}{48}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-7}{48}$`} />,
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`Find the value of $2sin^{2}30^{\circ}-3cos^{2}45^{\circ}+tan^{2}60^{\circ}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 4",
    optionD: "D) 5",
  },
];
