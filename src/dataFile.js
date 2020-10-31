import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
// import i3 from "./I3.png";
// import i4 from "./I4.PNG";
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
  // // // // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // New Users - continue S.No.
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
      <MathEq math={String.raw`Convert $40^{\circ}$ to Radian measure`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{2\pi}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{2\pi}{9}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\pi}{9}$ `} />,
    optionD: "D) 0",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Convert the $\frac{4\pi ^{c}}{5}$ to Degree measure`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $144^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $142^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $138^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $146^{\circ}$`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Convert the $\frac{7\pi ^{c}}{6}$ to Degree measure`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $200^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $210^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $320^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $0^{\circ}$`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq math={String.raw`Convert $270^{\circ}$ to Radian measure`} />
    ),

    optionA: <MathEq math={String.raw`A) $3\pi^{c}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{2\pi^{c}}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{3\pi^{c}}{2}$ `} />,
    optionD: <MathEq math={String.raw`D) $\frac{3\pi^{c}}{4}$ `} />,
  },

  {
    id: "5.",
    question: <MathEq math={String.raw`If $sinA=\frac{3}{4}$, then $tanA$=`} />,

    optionA: <MathEq math={String.raw`A) $\frac{3}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{\sqrt{7}}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{\sqrt{7}}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{3}{\sqrt{7}}$`} />,
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
        math={String.raw`Find $\frac{\left ( 1+sin\theta  \right )\left ( 1-sin\theta \right )}{\left ( 1+sin\theta  \right )\left ( 1-cos\theta \right )}$ if $cot\theta = \frac{7}{8}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{49}{6}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{64}{49}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{49}{64}$`} />,
    optionD: "D) 0",
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
        math={String.raw`Find the value of $\frac{cos60^{\circ}+sin60^{\circ}}{cos60^{\circ}-sin60^{\circ}}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $-\left ( \sqrt{3}+2 \right )$`} />,
    optionB: "B) 1",
    optionC: <MathEq math={String.raw`C) $-\sqrt{3}+2$`} />,
    optionD: "D) 0",
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

    optionA: <MathEq math={String.raw`$\frac{5}{2}$`} />,
    optionB: <MathEq math={String.raw`$\frac{3}{2}$`} />,
    optionC: <MathEq math={String.raw`$\frac{7}{2}$`} />,
    optionD: <MathEq math={String.raw`$\frac{1}{2}$`} />,
  },

  {
    id: "12.",
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
      <MathEq
        math={String.raw`If $x=2$ is the root of Quadratic equation $x^{2}-3x+k=0$ then k is`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) -2",
    optionC: "C) 6",
    optionD: "D) -4",
  },

  {
    id: "15.",
    question: "Find the value of 1-[(2-1)-(3-1)]",

    optionA: "A) 2",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) -2",
  },

  {
    id: "16.",
    question:
      "A boy walks to his school at a distance of 6 km with constant speed of 2.5 km/hour and walks back with a constant speed of 4 km/hr. His average speed for round trip expressed in km/hour, is",

    optionA: "A)	24/13",
    optionB: "B)	40/13",
    optionC: "C)	3",
    optionD: "D)	1/2",
  },

  {
    id: "17.",
    question:
      "A car travels the first half of a distance between two places at a speed of 30 km/hr and the second half of the distance at 50 km/hr. The average speed of the car for the whole journey is",

    optionA: "A)	42.5 km/hr",
    optionB: "B)	40.0 km/hr",
    optionC: "C)	37.5 km/hr",
    optionD: "D)	35.0 km/hr",
  },

  {
    id: "18.",
    question:
      "A body falls from rest, its velocity at the end of first second is (g=32 ft/sec)",

    optionA: "A) 16 ft/sec",
    optionB: "B) 32 ft/sec",
    optionC: "C) 64 ft/sec",
    optionD: "D) 24 ft/sec",
  },

  {
    id: "19.",
    question:
      "A stone is shot straight upward with a speed of 20 m/sec from a tower 200 m high. The speed with which it strikes the ground is approximately",

    optionA: "A)	60 m/sec",
    optionB: "B)	65 m/sec",
    optionC: "C)	70 m/sec",
    optionD: "D)	75 m/sec",
  },

  {
    id: "20.",
    question:
      "The v-t plot of a moving object is shown in the figure. The average velocity of the object during the first 10 seconds is",
    image1: <Image g={i1} />,

    optionA: <MathEq math={String.raw`A) 0 $ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) 2.5 $ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) 5 $ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) 2 $ms^{-1}$`} />,
  },

  {
    id: "21.",
    question:
      "Position of a particle in a rectangular-co-ordinate system is (3, 2, 5). Then its position vector will be",

    optionA: <MathEq math={String.raw`A) $3\hat{i}+5\hat{j}+2\hat{k}$`} />,
    optionB: <MathEq math={String.raw`B) $3\hat{i}+2\hat{j}+5\hat{k}$`} />,
    optionC: <MathEq math={String.raw`C) $5\hat{i}+3\hat{j}+2\hat{k}$`} />,
    optionD: "D) None of these",
  },
  {
    id: "22.",
    question:
      "A body moves due East with velocity 20 km/hour and then due North with velocity 15 km/hour. The resultant velocity",

    optionA: "A)	5 km/hour",
    optionB: "B)	15 km/hour",
    optionC: "C)	20 km/hour",
    optionD: "D)	25 km/hour",
  },
  {
    id: "23.",
    question:
      "Which pair of the following forces will never give resultant force of 2 N",

    optionA: "A)	2 N and 2 N",
    optionB: "B)	1 N and 1 N",
    optionC: "C)	1 N and 3 N",
    optionD: "D)	1 N and 4 N",
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`The cross product of $\vec{F}=\left ( 2\hat{i}-3\hat{j}+4\hat{k} \right )$ and $\vec{r}=\left ( 3\hat{i}+2\hat{j}+3\hat{k} \right )$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $6\hat{i}-6\hat{j}+12\hat{k}$`} />,
    optionB: <MathEq math={String.raw`B) $17\hat{i}-6\hat{j}-13\hat{k}$`} />,
    optionC: <MathEq math={String.raw`C) $-6\hat{i}+6\hat{j}-12\hat{k}$`} />,
    optionD: <MathEq math={String.raw`D) $-17\hat{i}+6\hat{j}+13\hat{k}$`} />,
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`A projectile fired with initial velocity u at some angle $\theta$ has a range R. If the initial velocity be doubled at the same angle of projection, then the range will be`}
      />
    ),

    optionA: "A) 2R",
    optionB: "B) R/2",
    optionC: "C) R",
    optionD: "D) 4R",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A bullet is fired from a cannon with velocity 500 m/s. If the angle of projection is $15^{\circ}$ and $g=10 m/s^{2}$. Then the range is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $25\times 10^{3}$m`} />,
    optionB: <MathEq math={String.raw`B) $12.5\times 10^{3}$m`} />,
    optionC: <MathEq math={String.raw`C) $50\times 10^{2}$m`} />,
    optionD: <MathEq math={String.raw`D) $25\times 10^{2}$m`} />,
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`27.	A ball thrown by a boy is caught by another after 2 sec. some distance away in the same level. If the angle of projection is $30^{\circ}$, the velocity of projection is`}
      />
    ),

    optionA: "A) 19.6 m/s",
    optionB: "B) 9.8 m/s",
    optionC: "C) 14.7 m/s",
    optionD: "D) None of these",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`A football player throws a ball with a velocity of 50 metre/sec at an angle 30 degrees from the horizontal. The ball remains in the air for ($g=10m/s^{2}$)`}
      />
    ),

    optionA: "A)	2.5 sec",
    optionB: "B)	1.25 sec",
    optionC: "C)	5 sec",
    optionD: "D)	0.625 sec",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`A ball is thrown upwards at an angle of $60^{\circ}$ to the horizontal.  It falls on the ground at a distance of 90 m.  If the ball is thrown with the same initial velocity at an angle $30^{\circ}$, it will fall on the ground at a distance of`}
      />
    ),

    optionA: "A) 30m",
    optionB: "B) 60m",
    optionC: "C) 90m",
    optionD: "D) 120m",
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`Four bodies P, Q, R and S are projected with equal velocities having angles of projection $15^{\circ},\: 30^{\circ}, \: 45^{\circ}$ and $60^{\circ}$ with the horizontal respectively.  The body having shortest range is`}
      />
    ),

    optionA: "A) P",
    optionB: "B) Q",
    optionC: "C) R",
    optionD: "D) S",
  },

  {
    id: "31.",
    question: "Which of the following is a natural polymer?",

    optionA: "A)	poly(butadiene-styrene)",
    optionB: "B) polybutadiene",
    optionC: "C) poly(butadiene-acrylonitirle)",
    optionD: "D) cis-1,4-polyisoprene",
  },

  {
    id: "32.",
    question: "Which of the following are the correct examples of matter?",

    optionA: "A)	Glass bottles, water and noise",
    optionB: "B) air, wood and vacuum",
    optionC: "C) silver foil, hot air and chalk",
    optionD: "D) aluminium foil, oxygen and light flash",
  },

  {
    id: "33.",
    question:
      "There is a mixture of three solid compounds P, Q and R. Out of these compounds P and R are soluble in water while Q is insoluble in water and compound R is sublimable also. In what sequence the following techniques can be used for their effective separation? I.	Filtration II. Sublimation	III. Crystallization from water extract 	IV. Dissolution in water",

    optionA: "A)	II, I, IV, III",
    optionB: "B) IV, I, II, III",
    optionC: "C)  II, IV, I, III",
    optionD: "D) I, II, III, IV",
  },

  {
    id: "34.",
    question: (
      <MathEq
        math={String.raw`1.80 g of glucose ($C_{6}H_{12}O_{6}$) is dissolved in 36.00 g of water in a beaker. The total number of oxygen atoms in the solution is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $12.405 \times 10^{23}$`} />,
    optionB: <MathEq math={String.raw`B) $12.405 \times 10^{22}$`} />,
    optionC: <MathEq math={String.raw`C) $6.022 \times 10^{23}$`} />,
    optionD: <MathEq math={String.raw`D) $6.022 \times 10^{22}$`} />,
  },

  {
    id: "35.",
    question: "Which of the following is a feasible reaction?",

    optionA: (
      <MathEq
        math={String.raw`A) $Ba$(s)+$K_{2}SO_{4}$(aq) $\rightarrow$ $BaSO_{4}$(aq) + $2K$(s) `}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`A) $Zn$(s)+$2AgNO_{3}$(aq) $\rightarrow$ $Zn$($NO_{3}$)$_{2}$(aq) + $2Ag$(s) `}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`A) $Mg$(s)+$Na_{2}SO_{4}$(aq) $\rightarrow$ $MgSO_{4}$(aq) + $2Na$(s) `}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`A) $Cu$(s)+$MgSO_{4}$(aq) $\rightarrow$ $CuSO_{4}$(aq) + $Mg$(s) `}
      />
    ),
  },

  {
    id: "36.",
    question:
      "Match the column I with column II and select the correct option for the given codes  ",
    image1: <Image g={i2} />,

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "37.",
    question:
      "Four substances were thoroughly mixed with water separately to obtain mixtures A, B, C and D. Some of their properties are given below :I. Path of a beam of light passing through it was visible in A, B and D but invisible in C. II. On leaving undisturbed, the particles of the substance settle down in A but not in B, C and D. III. The solute particles are visible to naked eye in A but invisible in B,C and D. Which of the following is correct about A, B, C and D ?",

    optionA: "A) A, B and D are colloids. C is a solution",
    optionB: "B) A is a suspension. B and D are colloids. C is a solution",
    optionC: "C) A is a colloid. B, C and D are solutions.",
    optionD: "D) A is a suspension B, C and D are colloids",
  },

  {
    id: "38.",
    question: "The element that cannot be used as a reducing agent is",

    optionA: "A)	carbon",
    optionB: "B) aluminium",
    optionC: "C) sulphur",
    optionD: "D) sodium",
  },

  {
    id: "39.",
    question: (
      <MathEq
        math={String.raw`An element X reacts with dilute $H_{2}SO_{4}$ as well as with $NaOH$ to produce salt and $H_{2}$(g) Hence, it may be concluded that :
    I.	X is an electropositive element.
    II.	oxide of X is basic in nature.
    III.	oxide of X is acidic in nature.
    IV.	X is an electronegative element.
    `}
      />
    ),

    optionA: "A)	I, II, III",
    optionB: "B) IV, I, II",
    optionC: "C) III, IV, I",
    optionD: "D) II, III, IV",
  },

  {
    id: "40.",
    question: "Ethyl mercaptan is added to  LPG",

    optionA: "A)	To make LPG liquid",
    optionB: "B) to give volume to it",
    optionC: "C) to give color to LPG",
    optionD: "D) to give smell to LPG",
  },

  {
    id: "41.",
    question:
      "Assertion (A) : Coal is a fossil fuel.    Reason (R)  :  It is formed due to compression of inorganic material over millions of years.Select the correct option from the given alternatives.",

    optionA: "A) Both (A) and (R) are true, and (R) explain (A)",
    optionB: "B) Both (A) and (R) are true, but (R) does not explain (A)",
    optionC: "C) (A) is true and (R) is false",
    optionD: "D) (A) is false and (R) is true",
  },

  {
    id: "42.",
    question: "Paper chromatography is an example of",

    optionA: "A)	partition chromatography",
    optionB: "B) thin layer chromatography",
    optionC: "C)	column chromatography",
    optionD: "D) adsorption chromatography",
  },

  {
    id: "43.",
    question: "Which one of following has maximum number of atoms?",

    optionA: "A)	1 g of Mg(s) [Atomic mass of Mg = 24]",
    optionB: (
      <MathEq math={String.raw`B) 1 g of $O_{2}$(g) [Atomic mass of O = 16]`} />
    ),
    optionC: "C) 1 g of Li(s) [Atomic mass of Li = 7]",
    optionD: "D) 1 g of Ag(s) [Atomic mass of Ag = 108]",
  },

  {
    id: "44.",
    question:
      "Which of the following method is adopted to obtain gasoline from crude oil?",

    optionA: "A)	Vacuum distillation",
    optionB: "B) steam distillation",
    optionC: "C) adsorption on charcoal",
    optionD: "D) fractional distillation",
  },

  {
    id: "45.",
    question: "The option(s) with only amphoteric oxides is(are)",

    optionA: <MathEq math={String.raw`A) $Cr_{2}O_{3}, BeO, SnO, SnO_{2}$`} />,
    optionB: <MathEq math={String.raw`B) $Cr_{2}O_{3}, CrO, SnO, PbO$`} />,
    optionC: <MathEq math={String.raw`C) $NO, B_{2}O_{3}, PbO, SnO_{2}$`} />,
    optionD: <MathEq math={String.raw`D) $ZnO, AlO, PbO, PbO_{2}$`} />,
  },
];
