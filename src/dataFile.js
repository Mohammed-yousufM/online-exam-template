import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.png";
// import i2 from "./I2.png";
// import i3 from "./I3.bmp";
// import i4 from "./I4.bmp";
// import i5 from "./I5.bmp";
// import i6 from "./I6.bmp";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
  // { sNO: "1", userID: "ayaan", passw: "1001" },
  // { sNO: "2", userID: "sami", passw: "1002" },
  // { sNO: "3", userID: "santosh", passw: "1003" },
  // // { sNO: "4", userID: "rugveda", passw: "1004" },
  // { sNO: "5", userID: "richitha", passw: "1005" },
  // { sNO: "6", userID: "maimuna", passw: "1006" },
  // // { sNO: "7", userID: "josephus", passw: "1007" },
  // // { sNO: "9", userID: "masood", passw: "1009" },
  // { sNO: "10", userID: "vineel", passw: "1010" },
  // { sNO: "11", userID: "abhinav", passw: "1011" },
  // // // // // // // // Dubai Below
  // // { sNO: "8", userID: "samuel", passw: "1008" },
  // // { sNO: "12", userID: "arshan", passw: "1012" },
  // // { sNO: "13", userID: "neeraj", passw: "1013" },
  // // { sNO: "14", userID: "abel", passw: "1014" },
  // // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // // New Users - continue S.No.
  // // { sNO: "16", userID: "srujana", passw: "1016" },
  // // { sNO: "17", userID: "meghana", passw: "1017" },
  // // { sNO: "18", userID: "asmitha", passw: "1018" },
  // // { sNO: "19", userID: "charan", passw: "1019" },
  // // { sNO: "20", userID: "mani", passw: "1020" },
  // { sNO: "21", userID: "jaideep", passw: "1021" },
  // { sNO: "22", userID: "abhinay", passw: "1022" },
  // // { sNO: "23", userID: "rizwana", passw: "1023" },
  // { sNO: "24", userID: "sujith", passw: "1024" }, //24
  // // { sNO: "25", userID: "nandini", passw: "1025" },
  // { sNO: "26", userID: "madhav", passw: "1026" },
  // { sNO: "27", userID: "mahamood", passw: "1027" },
  // { sNO: "28", userID: "ananya", passw: "1028" },
  // { sNO: "29", userID: "basim", passw: "1029" },
  // { sNO: "30", userID: "diya", passw: "1030" },
  // { sNO: "31", userID: "fahad", passw: "1031" },
  // { sNO: "32", userID: "ashu", passw: "1032" },
  // { sNO: "33", userID: "safwan", passw: "1033" },
  // { sNO: "34", userID: "tasneem", passw: "1034" },
  // { sNO: "35", userID: "yojit", passw: "1035" },
  // { sNO: "36", userID: "zoya", passw: "1036" },
  // { sNO: "37", userID: "pradyumna", passw: "1037" },
  // { sNO: "38", userID: "bhargav", passw: "1038" },
  // { sNO: "39", userID: "srimedha", passw: "1039" },
  // { sNO: "40", userID: "azra", passw: "1040" },
  // { sNO: "41", userID: "bilvika", passw: "1041" },
  // { sNO: "42", userID: "adwaith", passw: "1042" },
  // { sNO: "43", userID: "neekshitha", passw: "1043" },
];

export const questionsAll = [
  {
    id: "1.",
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
    id: "2.",
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
    id: "3.",
    question: "Add ab-bc, bc-ca,  ca-ab",

    optionA: "A) ab-bc",
    optionB: "B) ab+bc+ca",
    optionC: "C) 0",
    optionD: "D) -ab-bc-ca",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Find the remainder, when $3x^{4}+5x^{3}-7x^{2}+2x+2$ divided by $x^{2}+3x+1$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) 2x+1",
    optionD: "D) -1",
  },

  {
    id: "5.",
    question: "HCF of 100, 101 is",

    optionA: "A) 1",
    optionB: "B) 7",
    optionC: "C) 37",
    optionD: "D) None",
  },

  {
    id: "6.",
    question: "Which one of the following is prime?",

    optionA: "A) 9",
    optionB: "B) 99",
    optionC: "C) 129",
    optionD: "D) 29",
  },

  {
    id: "7.",
    question: (
      <MathEq math={String.raw`Evaluate $\left ( \frac{1}{2} \right )^{-5}$`} />
    ),

    optionA: "A) 8",
    optionB: "B) 16",
    optionC: "C) 32",
    optionD: "D) 64",
  },

  {
    id: "8.",
    question: "Which one of the following equation is quadratic",

    optionA: <MathEq math={String.raw`A) $11=-4x^{2}-x^{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-3}{y} -4 =0$`} />,
    optionC: <MathEq math={String.raw`C) $n-3=4n$`} />,
    optionD: <MathEq math={String.raw`D) $-3y^{2}-2y-7=0$`} />,
  },

  {
    id: "9.",
    question: "Which one of the following equation is not a quadratic",

    optionA: <MathEq math={String.raw`A) $q^{2}-4=-3$`} />,
    optionB: <MathEq math={String.raw`B) $y^{2}-4=11y$`} />,
    optionC: <MathEq math={String.raw`C) $4-y=3$`} />,
    optionD: <MathEq math={String.raw`D) $-3y^{2}-2y-7=0$`} />,
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`The factors of the quadratic equtaion: $x^{2}-x-12=0$ is`}
      />
    ),

    optionA: "A) (x+3)(x+4)=0",
    optionB: "B) (x+3)(x-4)=0",
    optionC: "C) (x-3)(x-4)=0",
    optionD: "D) (x-3)(x+4)=0",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Standard form of quadratic equtaion: $7-4x=x^{2}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $x^{2}+4x-7=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}+4x+7=0$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}-4x-7=0$`} />,
    optionD: "D) None of these",
  },

  {
    id: "12.",
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
    id: "13.",
    question: (
      <MathEq
        math={String.raw`The value of the discriminant of $x^{2}+x+1=0$ is`}
      />
    ),

    optionA: "A) -3",
    optionB: "B) -4",
    optionC: "C) -2",
    optionD: "D) -5",
  },

  {
    id: "14.",
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
    id: "15.",
    question: "The standard form of quadratic equation is",

    optionA: (
      <MathEq math={String.raw`A) $ax^{2} \, + \, bx \,+\, c \,= \,0$`} />
    ),
    optionB: <MathEq math={String.raw`B) $ax \, + \, b \,= \,0$`} />,
    optionC: (
      <MathEq
        math={String.raw`C) $ax^{3} \, + \, bx^{2} \,+\, cx \, + \, d \, = \,0$`}
      />
    ),
    optionD: "D) None of these",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`A stone was thrown down a well at 2 m/s. It reached the bottom in 2 seconds. Determine the depth 𝐷 of the well, given that the acceleration due to gravity $10 m/s^{2}$.`}
      />
    ),

    optionA: "A)	12 m",
    optionB: "B) 24 m",
    optionC: "C) 16 m",
    optionD: "D) 20 m",
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`If an apple falls from a tree and takes 1.5 seconds to reach the ground, at what velocity does it hit the ground? Take the acceleration due to gravity 𝑔= $10 m/s^{2}$.`}
      />
    ),

    optionA: "A)	10 m/s",
    optionB: "B) 15 m/s",
    optionC: "C) 20 m/s",
    optionD: "D) 25 m/s",
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`A body is projected vertically upward from the top of a tower 60 m tall with initial velocity 20 m/s. Find maximum height reached by the body from surface of earth. g=$10 m/s^{2}$.`}
      />
    ),

    optionA: "A)	20 m",
    optionB: "B) 40 m",
    optionC: "C) 60 m",
    optionD: "D) 80 m",
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`A ball dropped is from height 40m. Find height by which it falls during $2^{nd}$ second.`}
      />
    ),

    optionA: "A)	10 m",
    optionB: "B) 15 m",
    optionC: "C) 20 m",
    optionD: "D) 25 m",
  },

  {
    id: "20.",
    question:
      "A ball is thrown vertically upward with velocity 50m. Its Time of ascent is",

    optionA: "A)	2 s",
    optionB: "B) 3 s",
    optionC: "C) 4 s",
    optionD: "D) 5 s",
  },

  {
    id: "21.",
    question:
      "A boy wishes to throw a ball vertically upward so that it just reaches the top of a building 20 m high. What must be the initial velocity of throw?",

    optionA: "A)	20 m/s",
    optionB: "B) 16 m/s",
    optionC: "C) 12 m/s",
    optionD: "D) 10 m/s",
  },
  {
    id: "22.",
    question:
      "If a body is projected vertically up from a point and it returns to the same point, its",

    optionA: "A) average speed is zero, but not average velocity.",
    optionB: "B) Both average speed and average velocity are zero.",
    optionC: "C) average velocity is zero but not average speed.",
    optionD: "D) Both average speed and velocity depend upon the path",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`A ball takes t second to fall from a height $h_{1}$ and 2t seconds to fall from a height $h_{2}$. Then $\frac{h_{1}}{h_{2}}$ is:`}
      />
    ),

    optionA: "A) 0.5",
    optionB: "B) 0.25",
    optionC: "C) 2",
    optionD: "D) 4",
  },
  {
    id: "24.",
    question: "A vertically projected down body travels with",

    optionA: "A) uniform velocity.",
    optionB: "B) uniform speed.",
    optionC: "C) uniform acceleration.",
    optionD: "D) uniform retardation.",
  },
  {
    id: "25.",
    question:
      "A stone is released with zero velocity from the top of a tower reaches the ground in 4 second, the height of the tower is about",

    optionA: "A) 20 m",
    optionB: "B) 40 m",
    optionC: "C) 80 m",
    optionD: "D) 16 m",
  },
  {
    id: "26.",
    question:
      "A train moves with a uniform velocity of 36 kmh-1 for 10 s. Find the distance travelled by it.",

    optionA: "A) 50m",
    optionB: "B) 100 m",
    optionC: "C) 200m",
    optionD: "D) 250 m",
  },
  {
    id: "27.",
    question:
      "A train starts from rest. It moves through 1 km in 100 s with uniform acceleration. What will be its speed at the end of 100 s.?",

    optionA: "A) 10 m/s",
    optionB: "B) 15 m/s",
    optionC: "C) 20 m/s",
    optionD: "D) 25 m/s",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`A car has a velocity of $10 ms^{-1}$. It accelerates at $0.2 ms^{-2}$ for half minute. Find the distance travelled during this time`}
      />
    ),

    optionA: "A) 240 m/s",
    optionB: "B) 340 m/s",
    optionC: "C) 390cm/s",
    optionD: "D) 450 m/s",
  },
  {
    id: "29.",
    question:
      "A ball is thrown vertically upwards with velocity 60 m/s. Its velocity at highest position is",

    optionA: "A) 2.5 m/s",
    optionB: "B) 5 m/s",
    optionC: "C) 6 m/s",
    optionD: "D) zero",
  },
  {
    id: "30.",
    question:
      "A ball is thrown vertically upwards with velocity 60 m/s. Its acceleration at highest position is",

    optionA: "A) 2.5 m/s",
    optionB: "B) 5 m/s",
    optionC: "C) 9.8 m/s",
    optionD: "D) zero",
  },
];
