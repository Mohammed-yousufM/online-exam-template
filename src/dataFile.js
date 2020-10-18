import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
import i6 from "./I6.PNG";
import i7 from "./I7.PNG";
import i8 from "./I8.PNG";

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
  // // // // // // Dubai Below
  { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  { sNO: "13", userID: "neeraj", passw: "1013" },
  { sNO: "14", userID: "abel", passw: "1014" },
  { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // New Users - continue S.No.
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
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}=\frac{c_{1}}{c_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}} \neq \frac{b_{1}}{b_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}} \neq \frac{c_{1}}{c_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}} = \frac{c_{1}}{c_{2}}$ then the the two lines $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ are`}
      />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "5.",
    question: <MathEq math={String.raw`The lines $x+y=8$, $x-y=2$ are`} />,

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`The lines $2x-y+1=0$, $2x-y+4=0$ are`} />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "7.",
    question: `Write the mathematical form using two variables: "The cost of two tables and 5 chairs is 2200"`,

    optionA: "A) x+y=2200",
    optionB: "B) 2x+y=2200",
    optionC: "C) 2x+5y=2200",
    optionD: "D) None",
  },

  {
    id: "8.",
    question: "If 5x+17=22, then x is ",

    optionA: "A) -1",
    optionB: "B) 1",
    optionC: "C) 0",
    optionD: "D) 4",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If $\frac{y}{2}-\frac{1}{5}=\frac{y}{3}+\frac{1}{4}$, then y is`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 36",
    optionC: <MathEq math={String.raw`C) $\frac{1}{6}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{27}{10}$`} />,
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`If $\frac{5m}{6}+\frac{3m}{4}=\frac{19}{12}$ then m=`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 36",
    optionC: <MathEq math={String.raw`C) $\frac{1}{6}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{27}{10}$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`If $x=1$ is a root of $x^{2}+2x+k=0$ then k is`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -3",
    optionC: "C) 3",
    optionD: "D) 0",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`If $a=7$, then the value of $- \left ( \frac{1-2a}{a-5} \right )$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-13}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-15}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{13}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{15}{2}$`} />,
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`$\sqrt{248+\sqrt{52+\sqrt{144}}}$ = `} />
    ),

    optionA: "A) 14",
    optionB: "B) 12",
    optionC: "C) 16",
    optionD: "D) 13",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$\left ( x+\frac{1}{x} \right )=5$ then $x^{2}+\frac{1}{x^{2}}$ = `}
      />
    ),

    optionA: "A) 23",
    optionB: "B) 25",
    optionC: "C) 2",
    optionD: "D) 0",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`$\left ( \frac{1}{5}+2^{-1}+\frac{1}{90} \right )^{0}$ = `}
      />
    ),

    optionA: "A) 0",
    optionB: <MathEq math={String.raw`B) $\frac{1}{91}$`} />,
    optionC: "C) 1",
    optionD: <MathEq math={String.raw`D) $\frac{1}{180}$`} />,
  },

  {
    id: "16.",
    question:
      "If a body loses half of its velocity on penetrating 3 cm in a wooden block, then how much will it penetrate more before coming to rest?",

    optionA: "A) 1cm",
    optionB: "B) 2cm",
    optionC: "C) 3cm",
    optionD: "D) 4cm",
  },

  {
    id: "17.",
    question:
      "A body dropped from a height h with an initial speed zero, strikes the ground with a velocity 3 km/h . Another body of same mass is dropped from the same height h with an initial speed –u=4km/h. Find the final velocity of second body with which it strikes the ground",

    optionA: "A) 3 km/h",
    optionB: "B) 4 km/h",
    optionC: "C) 5 km/h",
    optionD: "D) 12 km/h",
  },

  {
    id: "18.",
    question:
      "A car starting from rest, accelerates at the rate f through a distance S, then continues at constant speed for time t and then decelerates at the rate f/2 to come to rest.  If the total distance travelled is 15 S, then",

    optionA: <MathEq math={String.raw`A) $S= ft$`} />,
    optionB: <MathEq math={String.raw`B) $S= \frac{1}{6}ft^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $S= \frac{1}{2}ft^{2}$`} />,
    optionD: "D) None of these",
  },

  {
    id: "19.",
    question: "What determines the nature of the path followed by the particle",

    optionA: "A) Speed",
    optionB: "B) Velocity",
    optionC: "C) Acceleration",
    optionD: "D) Both (B) and (C)",
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`An object is dropped from rest. Its $v-t$ graph is`}
      />
    ),

    optionA: <Image g={i1} t="A) " />,
    optionB: <Image g={i2} t="B) " />,
    optionC: <Image g={i3} t="C) " />,
    optionD: <Image g={i4} t="D) " />,
  },

  {
    id: "21.",
    question:
      "A force of 5 N acts on a particle along a direction making an angle of 60° with vertical. Its vertical component be",

    optionA: "A) 10N",
    optionB: "B) 3N",
    optionC: "C) 4N",
    optionD: "D) 2.5N",
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`The vector that must be added to the vector $\hat{i}-3\hat{j}+2\hat{k}$ and $3\hat{i}+6\hat{j}-7\hat{k}$ so that the resultant vector is a unit vector along the y-axis is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $4\hat{i}+2\hat{j}+5\hat{k}$`} />,
    optionB: <MathEq math={String.raw`A) $-4\hat{i}-2\hat{j}+5\hat{k}$`} />,
    optionC: <MathEq math={String.raw`A) $3\hat{i}+4\hat{j}+5\hat{k}$`} />,
    optionD: "Null Vector",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`23.	A hall has the dimensions $10m \times 12m \times 14m$. A fly starting at one corner ends up at a diametrically opposite corner. What is the magnitude of its displacement`}
      />
    ),

    optionA: "A) 17m",
    optionB: "B) 26m",
    optionC: "C) 36m",
    optionD: "D) 20m",
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`The expression $\left ( \frac{1}{\sqrt{2}} \hat{i} + \frac{1}{\sqrt{2}} \hat{j}\right )$ is a`}
      />
    ),

    optionA: "A) Unit vector",
    optionB: "B) Null vector",
    optionC: <MathEq math={String.raw`C) Vector of magnitude $\sqrt{2}$`} />,
    optionD: "D) Scalar",
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`Given vector $\vec{A}=2\hat{i}+3\hat{j}$, the angle between $\vec{A}$ and y-axis is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $tan^{-1} 3/2$`} />,
    optionB: <MathEq math={String.raw`B) $tan^{-1} 2/3$`} />,
    optionC: <MathEq math={String.raw`C) $sin^{-1} 2/3$`} />,
    optionD: <MathEq math={String.raw`D) $cos^{-1} 2/3$`} />,
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`The angle made by the vector $A= \hat{i}+\hat{j}$ with x-axis is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $90^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $45^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $22.5^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $30^{\circ}$`} />,
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`Magnitude of vector which comes on addition of two vectors,$6\hat{i}+7\hat{j}$ and $3\hat{i}+4\hat{j}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\sqrt{136}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{13.2}$`} />,
    optionC: <MathEq math={String.raw`C) $\sqrt{202}$`} />,
    optionD: <MathEq math={String.raw`D) $\sqrt{160}$`} />,
  },
  {
    id: "28.",
    question: "For the figure",
    image1: <Image g={i5} />,

    optionA: <MathEq math={String.raw`A) $\vec{A}+\vec{B}=\vec{C}$`} />,
    optionB: <MathEq math={String.raw`B) $\vec{B}+\vec{C}=\vec{A}$`} />,
    optionC: <MathEq math={String.raw`C) $\vec{C}+\vec{A}=\vec{B}$`} />,
    optionD: <MathEq math={String.raw`D) $\vec{A}+\vec{B}+\vec{C}=0$`} />,
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`The value of the sum of two vectors $\vec{A}$ and $\vec{B}$ with $\theta$ as the angle between them is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\sqrt{A^{2}+B^{2}+2ABcos\theta}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{A^{2}-B^{2}+2ABcos\theta}$`} />,
    optionC: <MathEq math={String.raw`C) $\sqrt{A^{2}+B^{2}-2ABsin\theta}$`} />,
    optionD: <MathEq math={String.raw`D) $\sqrt{A^{2}+B^{2}+2ABsin\theta}$`} />,
  },
  {
    id: "30.",
    question:
      "For the resultant of the two vectors to be maximum, what must be the angle between them",

    optionA: <MathEq math={String.raw`A) $0^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $60^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $90^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $180^{\circ}$`} />,
  },

  {
    id: "31.",
    question: "The correct match for the entries in Column A and column B are",
    image1: <Image g={i6} />,

    optionA: "A)	A-q, B-r, C-p, D-s",
    optionB: "B) A-p, B-r, C-s, D-q	",
    optionC: "C) A-q, B-r, C-s, D-p	",
    optionD: "D) A-s, B-r, C-p, D-q",
  },

  {
    id: "32.",
    question: "Which of the following statements is wrong?",

    optionA:
      "A)	The volatile compounds evaporate faster than less volatile compounds",
    optionB: "B)	The rate of evaporation decreases with increase in humidity",
    optionC: "C)	The rate evaporation increases with decrease of temperature",
    optionD:
      "D) The rate of evaporation increases with increase in surface area",
  },

  {
    id: "33.",
    question:
      "Assertion (A):  Rayon is a man-made fibre.   Reason (R): Rayon is prepared by using wood pulp",

    optionA: "A)	A and R are true, R supports A",
    optionB: "B) A and R are true, R does not support A",
    optionC: "C) A is true, R is false",
    optionD: "D) Both A and R are false",
  },

  {
    id: "34.",
    question: "Generally, non-metallic oxides are _______________ in nature",

    optionA: "A)	basic",
    optionB: "B) neutral",
    optionC: "C) acidic",
    optionD: "D) amphoteric",
  },

  {
    id: "35.",
    question:
      "Two substances A and B when brought together form a substance C with evolution of heat. The properties of C are entirely different from those of A and B. The substance C is _________ and the reaction is ____________respectively,",

    optionA: "A)	A mixture, exothermic",
    optionB: "B) compound, endothermic",
    optionC: "C) an element, exothermic",
    optionD: "D) none of these",
  },

  {
    id: "36.",
    question: "The most characteristic property of metals is their tendency to",

    optionA: "A) Form basic oxides",
    optionB: "B) form hydrides",
    optionC: "C) lose electrons",
    optionD: "D) gain electrons",
  },

  {
    id: "37.",
    question: "Which of the following is a solid solution?",

    optionA: "A)	sugar",
    optionB: "B) gold",
    optionC: "C) Bronze",
    optionD: "D) rust",
  },

  {
    id: "38.",
    question:
      "Assertion (A):  Bases are prepared from oxides of metals.         Reason (R):  Bases change red litmus paper into blue",

    optionA: "A)	A and R are true, R supports A",
    optionB: "B) A and R are true, R does not support A",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false but and R is true",
  },
  {
    id: "39.",
    question:
      "Substances X, Y and Z are beaten hard by hammer. Based on the information provided below in the table which one is a metal?",
    image1: <Image g={i7} />,

    optionA: "A)	Z",
    optionB: "B) Y",
    optionC: "C) X",
    optionD: "D) None of these",
  },
  {
    id: "40.",
    question:
      "A few substances are arranged in the increasing order of “forces of attraction” between their particles. Which one of the following represents a correct arrangement?",

    optionA: "A) Water, wind, air",
    optionB: "B) oxygen, water, sugar",
    optionC: "C) air, sugar, oil",
    optionD: "D) salt, juice, air",
  },

  {
    id: "41.",
    question:
      "Which of the following saves the nature by controlling the usage of wood?",

    optionA: "A) polyester",
    optionB: "B) metal",
    optionC: "C) glass",
    optionD: "D) plastic",
  },

  {
    id: "42.",
    question: "The correct order of metals in the Activity series is:",

    optionA: "A) Na > Al > Ca > Mg",
    optionB: "B) Zn > Cu > Fe > Ag",
    optionC: "C) Al > Ca > Fe >Cu",
    optionD: "D) Ca > Mg >Zn > Cu",
  },

  {
    id: "43.",
    question: "How can you say plastic does not have property of malleability?",

    optionA: "A) Plastic is not available in the form of thin sheets",
    optionB: "B) Plastic is not available in the form of wires",
    optionC: "C) Plastic cannot be changed into thin sheets by hammering",
    optionD: "D) All the above",
  },

  {
    id: "44.",
    question: "Which of the following equations is correct?",

    optionA: <MathEq math={String.raw`A) $2C + 3O_{2}\rightarrow 2CO_{3}$`} />,
    optionB: <MathEq math={String.raw`B) $H_{2}+2O_{2}\rightarrow 2HO_{2}$`} />,
    optionC: <MathEq math={String.raw`C) $C+H_{2}O\rightarrow CO+H_{2}$`} />,
    optionD: (
      <MathEq math={String.raw`D) $2Na+2H_{2}O\rightarrow 2NaOH_{2}$`} />
    ),
  },

  {
    id: "45.",
    question: "The correct match for the entries in Column A and column B are:",
    image1: <Image g={i8} />,

    optionA: "A) 1-c, 2-b, 3-r, 4-d	",
    optionB: "B) 1-c, 2-d, 3-b, 4-a",
    optionC: "C) 1-c, 2-a, 3-b, 4-d",
    optionD: "D) 1-d, 2-a, 3-b, 4-a",
  },
];
