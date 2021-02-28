import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.bmp";
// import i2 from "./I2.bmp";
// import i3 from "./I3.bmp";
// import i4 from "./I4.bmp";
// import i5 from "./I5.bmp";
// import i6 from "./I6.bmp";

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
  { sNO: "20", userID: "mani", passw: "1020" },
  { sNO: "21", userID: "jaideep", passw: "1021" },
  { sNO: "22", userID: "abhinay", passw: "1022" },
  { sNO: "23", userID: "rizwana", passw: "1023" }, //23
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq math={String.raw`Solve $\frac{d}{dx} \left( e^{x}\right)$`} />
    ),

    optionA: <MathEq math={String.raw`A) $e^{2x}$`} />,
    optionB: <MathEq math={String.raw`B) $2e^{x}$`} />,
    optionC: <MathEq math={String.raw`C) $e^{x}$`} />,
    optionD: <MathEq math={String.raw`D) $e + e^{x}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq math={String.raw`Solve $\frac{d}{dx} \left( log_{e}x\right)$`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{x}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{2x}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{2}{x}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{1+x}$`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq math={String.raw`If $y=5x+x^{3}$ then $\frac{dy}{dx}$`} />
    ),

    optionA: <MathEq math={String.raw`A) $10+2x^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $6+2x^{2}+5x$`} />,
    optionC: <MathEq math={String.raw`C) $5+3x^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $1+x^{2}$`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`when $y=\frac{1}{x}+\sqrt{x}+e^{x}$ then $\frac{dy}{dx}$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\frac{-1}{x^{2}} + \frac{1}{2\sqrt{x}} + e^{x}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\frac{-1}{x} + \frac{1}{2\sqrt{x}} + e^{x}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\frac{1}{x^{2}} + \frac{1}{2\sqrt{x}} + e^{x}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\frac{1}{x} + \frac{1}{2\sqrt{x}} + e^{x}$`}
      />
    ),
  },

  {
    id: "5.",
    question: (
      <MathEq math={String.raw`If $y=x^{5}+2x-^{3}$ then $\frac{dy}{dx}$`} />
    ),

    optionA: <MathEq math={String.raw`A) $10+2x^{4}$`} />,
    optionB: <MathEq math={String.raw`B) $2x^{4}+5x^{2}+6$`} />,
    optionC: <MathEq math={String.raw`C) $2x^{3}+5x^{2}+6$`} />,
    optionD: <MathEq math={String.raw`D) $5x^{4}-3x^{2}+2$`} />,
  },

  {
    id: "6.",
    question:
      "Differentiate the function 3x+2 w.r.t x from the first principle",

    optionA: "A) 5",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 6",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Differentiate the function $x^{2}-2x$ w.r.t x from the first principle`}
      />
    ),

    optionA: "A) 2x-2",
    optionB: "B) 3x-4",
    optionC: "C) x-2",
    optionD: "D) x",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Differentiate the function $2x^{2}+3x$ w.r.t x from the first principle`}
      />
    ),

    optionA: "A) 4x-2",
    optionB: "B) 4x+3",
    optionC: "C) 2x-2",
    optionD: "D) x+4",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Differentiate the function $x^{3}$ w.r.t x from the first principle`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $3x^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $5x^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $2x^{3}$`} />,
    optionD: <MathEq math={String.raw`D) $2x$`} />,
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $\frac{1}{x^{3}}$ w.r.t. x (use standard form)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $-3x^{-4}$`} />,
    optionB: <MathEq math={String.raw`B) $-5x^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $2x^{3}$`} />,
    optionD: <MathEq math={String.raw`D) $2x$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $\frac{1}{x^{3/2}}$ w.r.t. x (use standard form)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $-\frac{3}{x^{5/2}}$`} />,
    optionB: <MathEq math={String.raw`B) $-\frac{5}{x^{5/2}}$`} />,
    optionC: <MathEq math={String.raw`C) $-\frac{2}{x^{1/2}}$`} />,
    optionD: <MathEq math={String.raw`D) $-\frac{1}{x^{1/2}}$`} />,
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $x+\frac{1}{x}$ with respect to x`}
      />
    ),

    optionA: <MathEq math={String.raw`A) ($2-\frac{2}{x^{2}}$)`} />,
    optionB: <MathEq math={String.raw`B) ($1-\frac{1}{x}$)`} />,
    optionC: <MathEq math={String.raw`C) ($3-\frac{3}{x^{2}}$)`} />,
    optionD: <MathEq math={String.raw`D) ($1-\frac{1}{x^{2}}$)`} />,
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $\left( x-2\right)^{2}$ with respect to x`}
      />
    ),

    optionA: "A) 4x-2",
    optionB: "B) 4x+3",
    optionC: "C) 2x-2",
    optionD: "D) x+4",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $x^{5}+x^{3}+\frac{1}{x}$ with respect to x`}
      />
    ),

    optionA: <MathEq math={String.raw`A) ($5x^{4}+3x^{2}-\frac{1}{x}$)`} />,
    optionB: <MathEq math={String.raw`B) ($5x^{4}+3x^{2}-\frac{1}{x^{2}}$)`} />,
    optionC: <MathEq math={String.raw`C) ($5x^{5}+3x^{3}-\frac{1}{x^{2}}$)`} />,
    optionD: <MathEq math={String.raw`D) ($5x^{5}+3x^{3}-1$)`} />,
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`Find the differential coefficients of the function $x^{11}-x^{10}+5$ with respect to x`}
      />
    ),

    optionA: <MathEq math={String.raw`A) ($x^{10}-x^{11}+x$)`} />,
    optionB: <MathEq math={String.raw`B) ($11x^{10}-10x^{9}+x$)`} />,
    optionC: <MathEq math={String.raw`C) ($11x^{10}-10x^{9}$)`} />,
    optionD: <MathEq math={String.raw`D) ($11x^{10}-10x^{9}+1$)`} />,
  },

  {
    id: "16.",
    question:
      "The decrease in the potential energy of a ball of mass 20 kg which falls from a height of 50 cm is",

    optionA: "A) 968 J",
    optionB: "B) 98 J",
    optionC: "C) 1980 J",
    optionD: "D) None of these",
  },

  {
    id: "17.",
    question:
      "The potential energy of a certain spring when stretched through a distance ‘S’ is 10 joule. The amount of work (in joule) that must be done on this spring to stretch it through an additional distance ‘S’ will be",

    optionA: "A) 30",
    optionB: "B) 40",
    optionC: "C) 10",
    optionD: "D) 20",
  },

  {
    id: "18.",
    question:
      "One man takes 1 minute to raise a box to a height of 1 m and another man takes 1/2 minute to do so. The energy of the two is",
    optionA: "A) Different",
    optionB: "B) Same",
    optionC: "C) Energy of the first is more",
    optionD: "D) Energy of the second is more",
  },

  {
    id: "19.",
    question:
      "If the kinetic energy of a body is increased 2 times , its momentum will",
    optionA: "A)	Half",
    optionB: "B)	Remain unchanged",
    optionC: "C)	Be doubled",
    optionD: <MathEq math={String.raw`D) increase $sqrt{2}$ times`} />,
  },

  {
    id: "20.",
    question:
      "A steel ball of radius 2 cm is at rest on a frictionless surface. Another ball of radius 4 cm moving at a velocity of 81 cm/sec collides elastically with first ball. After collision the smaller ball moves with speed of",

    optionA: "A)	81 cm/s ",
    optionB: "B)	63 cm/s",
    optionC: "C)	144 cm/s",
    optionD: "D)	None of these",
  },

  {
    id: "21.",
    question:
      "The bodies of masses 1 kg and 5 kg are dropped gently from the top of a tower. At a point 20 cm from the ground, both the bodies will have the same",

    optionA: "A) Momentum",
    optionB: "B) Kinetic energy",
    optionC: "C) Velocity",
    optionD: "D) Total energy",
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`A 10 H.P. motor pumps out water from a well of depth 20m and fills a water tank of volume 22380 litres at a height of 10 m from the ground. The running time of the motor to fill the empty water tank is ($g=10msec^{-2}$) `}
      />
    ),

    optionA: "A)	5 minutes",
    optionB: "B)	10 minutes",
    optionC: "C)	15 minutes",
    optionD: "D)	20 minutes",
  },
  {
    id: "23.",
    question:
      "A satellite is to revolve round the earth in a circle of radius 8000 km. The speed at which this satellite be projected into an orbit, will be",

    optionA: "A)	3 km/sec",
    optionB: "B)	16 km/sec",
    optionC: "C)	7.15 km/sec",
    optionD: "D)  8 km/sec",
  },
  {
    id: "24.",
    question:
      "The acceleration of a body due to the attraction of the earth (radius R) at a distance 2R from the surface of the earth is (g = acceleration due to gravity at the surface of the earth)",

    optionA: "A) g/9 ",
    optionB: "B) g/3",
    optionC: "C) g/4",
    optionD: "D) g",
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`Weight of 1kg becomes 1/6 on moon. If radius of moon is $1.768 \times 10^{6}$  m, then the mass of moon will be`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $1.99 \times 10^{30} kg$`} />,
    optionB: <MathEq math={String.raw`B) $7.56 \times 10^{22} kg$`} />,
    optionC: <MathEq math={String.raw`C) $5.98 \times 10^{24} kg$`} />,
    optionD: <MathEq math={String.raw`D) $7.65 \times 10^{22} kg$`} />,
  },
  {
    //continue from here
    id: "26.",
    question:
      "The escape velocity of a sphere of mass m from earth having mass M and radius R is given by",

    optionA: <MathEq math={String.raw`A) $\sqrt{\frac{2GM}{R}}$`} />,
    optionB: <MathEq math={String.raw`B) $2\sqrt{\frac{GM}{R}}$`} />,
    optionC: <MathEq math={String.raw`C) $\sqrt{\frac{2GMm}{R}}$`} />,
    optionD: <MathEq math={String.raw`D) $\sqrt{\frac{GM}{R}}$`} />,
  },
  {
    id: "27.",
    question:
      "If both the mass and radius of the earth, each decreases by 50%, the acceleration due to gravity would",

    optionA: "A) Remain same",
    optionB: "B) Decrease by 50%",
    optionC: "C) Decrease by 100%",
    optionD: "D) Increase by 100%",
  },
  {
    id: "28.",
    question: "Earth binds the atmosphere because of ",

    optionA: "A) Gravity",
    optionB: "B) oxygen between earth and atmosphere ",
    optionC: "C) Both (a) and (b)",
    optionD: "D) None of the above",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`The weight of an object in the coal mine, sea level, at the top of the mountain are $W_{1}$,$W_{2}$ and $W_{3}$ respectively, then`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $W_{1} < W_{2} > W_{3}$`} />,
    optionB: <MathEq math={String.raw`B) $W_{1} = W_{2} = W_{3}$`} />,
    optionC: <MathEq math={String.raw`C) $W_{1} < W_{2} < W_{3}$ `} />,
    optionD: <MathEq math={String.raw`D) $W_{1} > W_{2} > W_{3}$ `} />,
  },
  {
    id: "30.",
    question: "As we go from the equator to the poles, the value of g",

    optionA: "A) Remains the same",
    optionB: "B) Decreases",
    optionC: "C) Increases",
    optionD: "D) Decreases upto a latitude of 45 degree",
  },
];
