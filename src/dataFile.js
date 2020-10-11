import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";

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
  // // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // New Users - continue S.No.
  { sNO: "16", userID: "srujana", passw: "1016" },
  { sNO: "17", userID: "meghana", passw: "1017" },
  { sNO: "18", userID: "asmitha", passw: "1018" },
  { sNO: "19", userID: "charan", passw: "1019" }, //19
];

export const questionsAll = [
  {
    id: "1.",
    question: <MathEq math={String.raw`Solve: $\frac{x}{x+15}=\frac{4}{9}$`} />,

    optionA: "A) 10",
    optionB: "B) 11",
    optionC: "C) 12",
    optionD: "D) 13",
  },

  {
    id: "2.",
    question: "Solve: 3(t-3)=5(2t+1)",

    optionA: "A) 2",
    optionB: "B) -2",
    optionC: "C) 1",
    optionD: "D) -1",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Solve: $\frac{x}{2}-\frac{1}{5}=\frac{x}{3}+\frac{1}{4}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{10}{27}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{27}{10}$`} />,
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "4.",
    question: "Solve: 3x=2x+18",

    optionA: "A) 18",
    optionB: "B) -18",
    optionC: "C) 12",
    optionD: "D) -12",
  },

  {
    id: "5.",
    question: "Solve: 2x-1=14-x",

    optionA: "A) 5",
    optionB: "B) -5",
    optionC: "C) 12",
    optionD: "D) 3",
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`Solve: $\frac{2x}{3}+1=\frac{7x}{15}+3$`} />
    ),

    optionA: "A) 10",
    optionB: "B) -10",
    optionC: "C) 2",
    optionD: "D) 40",
  },

  {
    id: "7.",
    question:
      "The ages of Rahul and Haroon are in the ratio 5 : 7, 4years later the sum of their ages will be 56years. What is the present age of Rahul?",

    optionA: "A) 28",
    optionB: "B) 20",
    optionC: "C) 18",
    optionD: "D) 12",
  },

  {
    id: "8.",
    question:
      "The sum of three consecutive multiples of 8 is 888. Find the greatest multiple?",

    optionA: "A) 288",
    optionB: "B) 304",
    optionC: "C) 296",
    optionD: "D) 46",
  },

  {
    id: "9.",
    question: <MathEq math={String.raw`Solve: $\frac{x}{3}+1=\frac{7}{15}$`} />,

    optionA: <MathEq math={String.raw`A) $\frac{8}{5}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{5}{8}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{-5}{8}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-8}{5}$`} />,
  },

  {
    id: "10.",
    question: "If (x-9)=10, the x=__",

    optionA: "A) 10",
    optionB: "B) 12",
    optionC: "C) 18",
    optionD: "D) 19",
  },

  {
    id: "11.",
    question: "Solve: 3(7y+4)+4(y+2) = 0",

    optionA: <MathEq math={String.raw`A) $\frac{4}{5}$`} />,
    optionB: <MathEq math={String.raw`A) $\frac{2}{5}$`} />,
    optionC: <MathEq math={String.raw`A) $\frac{-4}{5}$`} />,
    optionD: <MathEq math={String.raw`A) $\frac{-2}{5}$`} />,
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`Sum of roots of quadratic equation $x^{2}-2x+1=0$ is__`}
      />
    ),

    optionA: "A) -2",
    optionB: "B) 1",
    optionC: "C) 2",
    optionD: "D) -1",
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`Multiplicative inverse of $\frac{-3}{19}$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{13}{19}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-19}{13}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{19}{13}$`} />,
    optionD: "D) 1",
  },

  {
    id: "14.",
    question: (
      <MathEq math={String.raw`If $a=-1$, $b=2$,then $a^{b}+b^{a}=$__`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{3}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{2}{3}$`} />,
    optionC: "C) 1",
    optionD: "D) 2",
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`Factorize: $x^{2}-64$ :`} />,

    optionA: "A) (x+8)(x-8)",
    optionB: "B) (x+4)(x-4)",
    optionC: "C) (x-64)(x+8)",
    optionD: "D) (x-8)(x-8)",
  },
  {
    id: "16.",
    question:
      "A body, thrown upwards with some velocity reaches the maximum height of 50 m. Another body with the double the mass thrown up with double the initial velocity will reach a maximum height of",

    optionA: "A) 100m",
    optionB: "B) 200m",
    optionC: "C) 300m",
    optionD: "D) 400m",
  },

  {
    id: "17.",
    question:
      "Figure given shows the distance–time graph of the motion of a car. It follows from the graph that the car is",
    image1: <Image g={i1} />,

    optionA: "A) At rest",
    optionB: "B) In uniform motion",
    optionC: "C) In non-unifrom acceleration",
    optionD: "D) Uniformly accelerated",
  },

  {
    id: "18.",
    question:
      "A particle moves along a semicircle of radius 10m in 5 seconds. The average velocity of the particle is",

    optionA: <MathEq math={String.raw`A) $2\pi \, ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $4\pi \, ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $2\, ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $2\, ms^{-1}$`} />,
  },

  {
    id: "19.",
    question:
      "Two balls are dropped from height h and 2h respectively from the earth surface. The ratio of time of these balls to reach the earth is",

    optionA: <MathEq math={String.raw`A) $1 \, : \, \sqrt{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{2} \, : \, 1$`} />,
    optionC: "C) 2 : 1",
    optionD: "D) 1 : 4",
  },

  {
    id: "20.",
    question:
      "A body is projected with a velocity v and after some time it returns  to the point from which it was projected. The average velocity and average speed of the body for the total time of flight are",

    optionA: <MathEq math={String.raw`A) $\vec{v}/2$ and $v/2$`} />,
    optionB: <MathEq math={String.raw`B) 0 and $v/2$`} />,
    optionC: <MathEq math={String.raw`C) $0$ and $0$`} />,
    optionD: <MathEq math={String.raw`D) $\vec{v}/2$ and $0$`} />,
  },

  {
    id: "21.",
    question: "Which of the following speed-time graphs exist in the nature?",

    optionA: <Image g={i2} t="A) " />,
    optionB: <Image g={i3} t="B) " />,
    optionC: <Image g={i4} t="C) " />,
    optionD: "D) All of the above",
  },
  {
    id: "22.",
    question:
      "A body is moving in a straight line a shown in velocity-time graph. The displacement and distance travelled by in 8s  are respectively",
    image1: <Image g={i5} />,

    optionA: "A) 12 m, 20 m",
    optionB: "B) 20m, 12 m",
    optionC: "C) 12 m, 12 m",
    optionD: "D) 20 m, 20 m",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`A body moves with initial velocity $10 ms^{1}$. If it covers a distance of $20m$ in $2s$, then acceleration of the body is`}
      />
    ),

    optionA: "A) Zero",
    optionB: <MathEq math={String.raw`B) $10ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) $5ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) $2ms^{-2}$`} />,
  },
  {
    id: "24.",
    question:
      "A stone is thrown with an initial speed of  4.9 m/s from a bridge in vertically upward direction. It falls down in water after 2 sec. The height of the bridge is",

    optionA: "A) 4.9m",
    optionB: "B) 9.8m",
    optionC: "C) 19.8m",
    optionD: "D) 24.7m",
  },
  {
    id: "25.",
    question: "Which of the following is not a vector quantity?",

    optionA: "A) Acceleration",
    optionB: "B) Velocity",
    optionC: "C) Displacement",
    optionD: "D) Average speed",
  },
  {
    id: "26.",
    question: "For a physical quantity to be called a vector, it must",

    optionA: "A) have magnitude and unit",
    optionB: "B) have magnitude and direction",
    optionC: "C) have magnitude, direction and obey vector laws of addition",
    optionD:
      "D) have magnitude, direction and need not obey vector laws of addition",
  },
  {
    id: "27.",
    question:
      "If a velocity vector v having magnitude 10 m/s along west is multiplied by 4 then it becomes",

    optionA: "A) 40 m/s along east",
    optionB: "B) -40 m/s along west",
    optionC: "C) 40 m/s along west",
    optionD: "D) remains unchanged",
  },
  {
    id: "28.",
    question: "If a vector is divided by its magnitude then _____ is obtained.",

    optionA: "A) same vector",
    optionB: "B) unit vector",
    optionC: "C) null vector",
    optionD: "D) unlike vector",
  },
  {
    id: "29.",
    question:
      "A displacement vector 4 m along North is rotated in clockwise direction by 270 degree. Then",

    optionA: "A) only magnitude is changed",
    optionB: "B) only direction is changed",
    optionC: "C) both magnitude and direction change",
    optionD: "D) both magnitude and direction remain same",
  },
  {
    id: "30.",
    question:
      "Vector P makes angle 30 degree with Y-axis in anticlockwise direction. Another vector Q makes angle 30 degree with X-axis in clockwise direction. The angle between vectors P and Q is",

    optionA: "A)150 degree",
    optionB: "B) 60 degree",
    optionC: "C) 30 degree",
    optionD: "D) 180 degree",
  },
  {
    id: "31.",
    question: "546 K, 268 K, 300 K are equal to",

    optionA: (
      <MathEq
        math={String.raw`A) $546^{\circ}$, $268^{\circ}$, $300^{\circ}$`}
      />
    ),
    optionB: (
      <MathEq math={String.raw`A) $273^{\circ}$, $5^{\circ}$, $27^{\circ}$`} />
    ),
    optionC: (
      <MathEq
        math={String.raw`A) $-273^{\circ}$, $-5^{\circ}$, $-27^{\circ}$`}
      />
    ),
    optionD: (
      <MathEq math={String.raw`A) $273^{\circ}$, $-5^{\circ}$, $27^{\circ}$`} />
    ),
  },

  {
    id: "32.",
    question: "The common characteristic of both solid and liquid states are:",

    optionA: "A) both have fixed shape",
    optionB: "B) both have fixed volume",
    optionC: "C) both are rigid",
    optionD: "D) none of these",
  },

  {
    id: "33.",
    question: "Which of the following is a polymer of tetrafluoroethene?",

    optionA: "A) PVC",
    optionB: "B) nylon",
    optionC: "C) teflon",
    optionD: "D) bakelite",
  },

  {
    id: "34.",
    question: "Which has the least energetic molecules?",

    optionA: "A)	plasmas",
    optionB: "B) liquids",
    optionC: "C) solids",
    optionD: "D) gases",
  },

  {
    id: "35.",
    question:
      "Select the correct order of evaporation for water, alcohol (ingredient of sanitizers), petrol and kerosene oil:",

    optionA: "A)	Petrol < kerosene < alcohol < water",
    optionB: "B) alcohol > petrol > water > kerosene oil",
    optionC: "C) kerosene oil < water < petrol < alcohol",
    optionD: "D) Water < kerosene oil < alcohol < petrol",
  },

  {
    id: "36.",
    question:
      "When a tea-spoon of solid sugar is dissolved in a glass of liquid water; what phase or phases are present after mixing? ",

    optionA: "A)	Solid only",
    optionB: "B) still solid and liquid",
    optionC: "C) liquid only",
    optionD: "D) none of these",
  },

  {
    id: "37.",
    question:
      "All gases will occupy zero volume when the temperature is reduced to",

    optionA: <MathEq math={String.raw`A) $273^{\circ}C$`} />,
    optionB: <MathEq math={String.raw`B) $273^{\circ}A$`} />,
    optionC: <MathEq math={String.raw`C) $-273^{\circ}C$`} />,
    optionD: <MathEq math={String.raw`D) $0^{\circ}C$`} />,
  },

  {
    id: "38.",
    question: "_________contains carbon, hydrogen, oxygen and nitrogen.",

    optionA: "A) polyester",
    optionB: "B) polyethene",
    optionC: "C) phenyl vinyl chloride",
    optionD: "D) polyamide",
  },

  {
    id: "39.",
    question: "The inter-particle forces are the strongest in",

    optionA: "A)	hydrogen",
    optionB: "B) water",
    optionC: "C) methyl alcohol",
    optionD: "D) hydrogen chloride",
  },

  {
    id: "40.",
    question: "Badminton and tennis racquets are made of",

    optionA: "A)	rayon",
    optionB: "B) polyester",
    optionC: "C) nylon",
    optionD: "D) all of these",
  },

  {
    id: "41.",
    question: "Which one of the following is a surface phenomenon?",

    optionA: "A)	crystallization",
    optionB: "B) freezing",
    optionC: "C) melting",
    optionD: "D) evaporation",
  },

  {
    id: "42.",
    question:
      "The term used to describe the phase change of a solid to a liquid is:",

    optionA: "A)	freezing",
    optionB: "B) boiling",
    optionC: "C) condensation",
    optionD: "D) none of these",
  },

  {
    id: "43.",
    question:
      "During summer, water kept in an earthen pot becomes cool because of the phenomenon of",

    optionA: "A)	diffusion",
    optionB: "B) osmosis",
    optionC: "C) transpiration",
    optionD: "D) evaporation",
  },

  {
    id: "44.",
    question: "Valency of an atom or radical is its",

    optionA: "A)	Ionization energy",
    optionB: "B) Electron affinity",
    optionC: "C) combining capacity",
    optionD: "D) none of these",
  },

  {
    id: "45.",
    question: "The correct order is",

    optionA: (
      <MathEq
        math={String.raw`A) Monomer $\rightarrow$ Fibre $\rightarrow$ Polymer`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) Polymer $\rightarrow$ Monomer $\rightarrow$ Fibre`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) Fibre $\rightarrow$ Monomer $\rightarrow$ Polymer`}
      />
    ),
    optionD: "D) None of these",
  },
];
