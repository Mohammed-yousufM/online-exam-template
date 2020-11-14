import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
// import i5 from "./I5.PNG";
// import i6 from "./I6.png";
// import i7 from "./I7.PNG";
// import i8 from "./I8.PNG";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
  // { sNO: "1", userID: "ayaan", passw: "1001" },
  // { sNO: "2", userID: "sami", passw: "1002" },
  // { sNO: "3", userID: "santosh", passw: "1003" },
  // { sNO: "4", userID: "rugveda", passw: "1004" },
  // { sNO: "5", userID: "richitha", passw: "1005" },
  // { sNO: "6", userID: "maimuna", passw: "1006" },
  // { sNO: "7", userID: "josephus", passw: "1007" },
  // { sNO: "9", userID: "masood", passw: "1009" },
  // { sNO: "10", userID: "vineel", passw: "1010" },
  // { sNO: "11", userID: "abhinav", passw: "1011" },
  // // // // // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // // New Users - continue S.No.
  // { sNO: "16", userID: "srujana", passw: "1016" },
  // { sNO: "17", userID: "meghana", passw: "1017" },
  // { sNO: "18", userID: "asmitha", passw: "1018" },
  // { sNO: "19", userID: "charan", passw: "1019" },
  // { sNO: "20", userID: "mani", passw: "1020" }, //20
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq math={String.raw`If $A=30^{\circ}$, then $cos^{2}A-sin^{2}A$=`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{4}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{2}$`} />,
    optionC: "C) 0",
    optionD: "D) 1",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`If $A=45^{\circ}$, then $\frac{2tanA}{1-tan^{2}A}$=`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 0",
    optionD: "D) undefined",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`$sin^{2}30^{\circ}+sin^{2}45^{\circ}+sin^{2}60^{\circ}$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{3}{4}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{3}{2}$`} />,
    optionD: "D) 1",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`$tan^{2}30^{\circ}+tan^{2}45^{\circ}+tan^{2}60^{\circ}$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{13}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{10}{3}$`} />,
    optionD: "D) 0",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`$cosec^{2}45^{\circ}.sec^{2}30^{\circ}.sin^{2}90^{\circ}.cos60^{\circ}$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{4}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{2}$`} />,
    optionD: "D) 1",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`$\frac{sin^{2}19^{\circ}}{cos^{2}71^{\circ}}+\frac{cos^{2}73^{\circ}}{sin^{2}17^{\circ}}$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) 2",
    optionD: "D) -1",
  },

  {
    id: "7.",
    question: (
      <MathEq math={String.raw`$cos\left ( \frac{-7\pi}{2} \right )$=`} />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) 2",
    optionD: "D) -1",
  },

  {
    id: "8.",
    question: <MathEq math={String.raw`$sec\left ( 2100^{\circ} \right)$=`} />,

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 2",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`$sin330^{\circ}.cos120^{\circ}+cos210^{\circ}.sin300^{\circ}$=`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 2",
  },

  {
    id: "10.",
    question: <MathEq math={String.raw`$tan75^{\circ}$=`} />,

    optionA: <MathEq math={String.raw`A) $2+\sqrt{3}$`} />,
    optionB: <MathEq math={String.raw`B) $2-\sqrt{3}$`} />,
    optionC: <MathEq math={String.raw`C) $-2+\sqrt{3}$`} />,
    optionD: <MathEq math={String.raw`D) $-2-\sqrt{3}$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq math={String.raw`$sec^{2}60^{\circ}-tan^{2}60^{\circ}$=`} />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 2",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`If $\frac{5m}{6}+\frac{3m}{4}=\frac{19}{12}$, then m=`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) -1",
    optionC: "C) 1",
    optionD: "D) 2",
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`If $x^{2}+2x+k=0$, has a root x=1, then k=`} />
    ),

    optionA: "A) 3",
    optionB: "B) -1",
    optionC: "C) -3",
    optionD: "D) 0",
  },

  {
    id: "14.",
    question: <MathEq math={String.raw`$\sqrt{248+\sqrt{52+\sqrt{144}}}$`} />,

    optionA: "A) 14",
    optionB: "B) 12",
    optionC: "C) 13",
    optionD: "D) 16",
  },

  {
    id: "15.",
    question: "Find the value of 1-[1-(1-{1-2})]",

    optionA: "A) 2",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 0",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`A person travels along a straight road for the first half time with a velocity $v_{1}$ and the next half time with a velocity $v_{2}$. The mean velocity V of the man is`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\frac{2}{V}=\frac{1}{v_{1}}+\frac{1}{v_{2}}$`}
      />
    ),
    optionB: <MathEq math={String.raw`B) $V=\frac{v_{1}+v_{2}}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $V=\sqrt{v_{1}v_{2}}$`} />,
    optionD: <MathEq math={String.raw`D) $V=\sqrt{\frac{v_{1}}{v_{2}}}$`} />,
  },

  {
    id: "17.",
    question:
      "A body is moving along a straight line path with constant velocity. At an instant of time the distance travelled by it is s and its displacement is D, then",

    optionA: "A) D < s",
    optionB: "B) D > s",
    optionC: "C) D = s",
    optionD: <MathEq math={String.raw`D) $D \leq s$`} />,
  },

  {
    id: "18.",
    question:
      "You drive a car at seed of  70 km/hr in a straight road for 8.4 km, and then the car runs out of petrol. You walk for 30 min to reach a petrol pump at a distance of  2 km. The average velocity from the beginning of your drive till you reach the petrol pump is",

    optionA: "A) 16.8 km/hr",
    optionB: "B)	35 km/hr",
    optionC: "C)	64 km/hr",
    optionD: "D)	18.6 km/hr",
  },

  {
    id: "19.",
    question:
      "The three initial and final position of a man on the x-axis are given as (i)  (-8m,7m)  (ii) (7m,-3m) and (iii) (-7m,3m). Which pair gives the negative displacement",

    optionA: "A) (i)",
    optionB: "B) (ii)",
    optionC: "C) (iii)",
    optionD: "D) (i) and (ii)",
  },

  {
    id: "20.",
    question:
      "A boy released a ball from the top of a building. It will clear a window 2m high at a distance 10m below the top in nearly",

    optionA: "A) 1s",
    optionB: "B) 1.3s",
    optionC: "C) 0.6s",
    optionD: "D) 0.13s",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`The velocity of projection of an oblique projectile is $\vec{v}=3\hat{i}+2\hat{j}$ in ($ms^{-1}$). The speed of the projectile at the highest point of the trajectory is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $3ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $2ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $1ms^{-1}$`} />,
    optionD: "D) Zero",
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`A stone is projected from the ground with velocity 50 m/s at an angle of $30^{\circ}$.It crosses a wall after 3 sec. How far beyond the wall the stone will strike the ground($g= 10 m/sec^{2}$)`}
      />
    ),

    optionA: "A) 90.2m",
    optionB: "B) 89.6m",
    optionC: "C) 86.6m",
    optionD: "D) 70.2m",
  },
  {
    id: "23.",
    question:
      "In the case of an oblique projectile, the velocity is perpendicular to acceleration",

    optionA: "A) Once only",
    optionB: "B) Twice",
    optionC: "C)	Thrice",
    optionD: "D)	Four times",
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`If the vector $\vec{A}=2\hat{i}+4\hat{j}$ then its magnitude  is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $5\sqrt{5}$`} />,
    optionB: "B) 10",
    optionC: "C) 15",
    optionD: <MathEq math={String.raw`D) $2\sqrt{5}$`} />,
  },
  {
    id: "25.",
    question: "Newton’s first law of motion describes the following",

    optionA: "A) Energy",
    optionB: "B)	Work",
    optionC: "C)	Inertia",
    optionD: "D)	Moment of inertia",
  },
  {
    id: "26.",
    question:
      "If two forces of 5 N each are acting along X and Y axes, then the magnitude and direction of resultant is",

    optionA: <MathEq math={String.raw`A) $5\sqrt{2}, \pi/3$`} />,
    optionB: <MathEq math={String.raw`B) $5\sqrt{2}, \pi/4$`} />,
    optionC: <MathEq math={String.raw`C) $-5\sqrt{2}, \pi/3$`} />,
    optionD: <MathEq math={String.raw`D) $-5\sqrt{2}, \pi/4$`} />,
  },
  {
    id: "27.",
    question:
      "A player caught a cricket ball of mass 150 gm moving at the rate of 20 m/sec. If the catching process be completed in 0.1 sec the force of the blow exerted by the ball on the hands of player is",

    optionA: "A) 0.3N",
    optionB: "B) 30N",
    optionC: "C) 300N",
    optionD: "D) 3000N",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`Which of the four arrangements in the figure correctly shows the vector addition of two forces $\vec{F_{1}}$ and $\vec{F_{2}}$ to yield the third force $\vec{F_{3}}$`}
      />
    ),

    optionA: <Image g={i1} t="A" />,
    optionB: <Image g={i2} t="B" />,
    optionC: <Image g={i3} t="C" />,
    optionD: <Image g={i4} t="D" />,
  },
  {
    id: "29.",
    question:
      "A particle is moving with a constant speed along a straight line path. A force is not required to",

    optionA: "A) Increase its speed",
    optionB: "B)	Decrease the momentum",
    optionC: "C)	Change in direction",
    optionD: "D)	Keep it moving with uniform velocity",
  },
  {
    id: "30.",
    question: "Newton’s Second law gives the measure of",

    optionA: "A) Acceleration",
    optionB: "B) Force",
    optionC: "C) Momentum",
    optionD: "D) Angular momentum",
  },

  {
    id: "31.",
    question: "Coal is transported by",

    optionA: "A)	cylinders",
    optionB: "B) pipelines",
    optionC: "C) tankers",
    optionD: "D) none of these",
  },

  {
    id: "32.",
    question: "Which of the following is a thermosetting plastic?",

    optionA: "A)	PVC",
    optionB: "B) teflon",
    optionC: "C) bakelite",
    optionD: "D) nylon",
  },

  {
    id: "33.",
    question: (
      <MathEq
        math={String.raw`The reaction Zinc + Copper sulphate(solution)  $\rightarrow$ Zinc sulphate(solution) + Copper  indicates that the metal which is placed lower in the activity series is`}
      />
    ),

    optionA: "A)	Zinc",
    optionB: "B) Zinc (II)",
    optionC: "C) Copper (II)",
    optionD: "D) Copper",
  },

  {
    id: "34.",
    question: "The zone of the candle flame which is moderately hot is called",

    optionA: "A)	Inner dark zone (zone of no combustion)",
    optionB: "B)	Non-luminous zone (zone of complete combustion)",
    optionC: "C) Luminous zone(zone of incomplete combustion)",
    optionD: "D) Lowest blue zone",
  },

  {
    id: "35.",
    question: "A good fuel has the following qualities",

    optionA: "A)	should have low calorific value",
    optionB: "B) should cause pollution",
    optionC: "C) should have high ignition temperature",
    optionD: "D) should be easy to transport",
  },

  {
    id: "36.",
    question: (
      <MathEq
        math={String.raw`The number of moles of He (at mass = 4 amu) present in 52 g of He and $12.044 \times 10^{2}$ atoms of He are respectively`}
      />
    ),

    optionA: "A)	2 and 13",
    optionB: "B) 0.07 and 0.5",
    optionC: "C) 1.3 and 2",
    optionD: "D) 13 and 2",
  },

  {
    id: "37.",
    question: (
      <MathEq
        math={String.raw`If $NaCl, CaSO_{4}, AlCl_{3}$ are respectively molecular formulae for sodium chloride, calcium sulphate and aluminium chloride, which of the following formula is incorrect?`}
      />
    ),

    optionA: "A)	AlN",
    optionB: (
      <MathEq math={String.raw`B) $\left ( NH_{4} \right )_{2}SO_{4}$`} />
    ),
    optionC: <MathEq math={String.raw`C) $Al\left ( SO_{4} \right )_{3}$`} />,
    optionD: <MathEq math={String.raw`D) $Na_{2}SO_{4}$`} />,
  },

  {
    id: "38.",
    question: "Which of the following statements is false?",

    optionA:
      "A)	Naphthalene ball disappears with time without leaving any solid",
    optionB: "B)	We can get the smell of perfume siting several meters away",
    optionC:
      "C)	Ice at 273 K more effective in cooling than water at the same temperature.",
    optionD:
      "D)	Amongst boiling water and steam, boing water produces severe burns",
  },

  {
    id: "39.",
    question: "Digestion of food is an example of",

    optionA: "A)	Complete combustion",
    optionB: "B) Incomplete combustion",
    optionC: "C) slow combustion",
    optionD: "D) rapid combustion",
  },

  {
    id: "40.",
    question:
      "Which of the following sources of energy can be a good alternative to cola in a power stations?    i)	Geothermal energy   	ii) energy from water	iii) Energy from petrol  	iv) energy from plants?",

    optionA: "A) i) and ii) only",
    optionB: "B) iv only",
    optionC: "C) i), ii) and iii) only",
    optionD: "D) all of the above",
  },

  {
    id: "41.",
    question: "Aluminium does not react readily with air or water because",

    optionA: "A)	It occupies high position in electrochemical series",
    optionB: "B)	It lies below hydrogen in electrochemical series",
    optionC: "C)	It is covered with a layer of oxide that does not rub off.",
    optionD: "D)	It is a noble metal",
  },

  {
    id: "42.",
    question: "Complete combustion of carbon produces",

    optionA: "A)	CO + heat + light",
    optionB: "B) heat + light",
    optionC: "C) carbon + heat + light",
    optionD: "D) none of these",
  },

  {
    id: "43.",
    question: "Which of the following is an incorrect statement?",

    optionA: "A)	Non-metals act as oxidizing agents",
    optionB: "B)	Non-metals displace hydrogen from acids",
    optionC: "C)  Non-metals form oxides that are either neutral or acidic",
    optionD:
      "D)Hydrides of non-metals are covalent in nature and may be acidic, neutral or basic in nature.",
  },

  {
    id: "44.",
    question: "Fire extinguishers extinguish fire by",

    optionA: "A)	Cutting off the supply of air",
    optionB: "B)	Bringing down the temperature of fuel",
    optionC: "C)	Supplying air to the fuel",
    optionD: "D)	Both a) & b)",
  },

  {
    id: "45.",
    question:
      "Assertion (A): The temperature increases inside the fractionating column on going from bottom to the top. Reason (R): The column is not heated at the bottom.",

    optionA:
      "A)	Assertion is correct, reason is correct; reason is a correct explanation for assertion",
    optionB:
      "B)	Assertion is correct, reason is correct; reason is not a correct explanation for assertion ",
    optionC: "C)	Both Assertion and reason are correct",
    optionD: "D)	Both Assertion and reason are incorrect",
  },
];
