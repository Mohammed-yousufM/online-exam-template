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
      <MathEq math={String.raw`Convert $1110^{\circ}$ to radian system: `} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{7\pi}{6}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{37\pi}{6}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7\pi}{18}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{39\pi}{18}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Convert $\frac{15\pi^{c}}{2}$ to degree system: `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $1350^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $1300^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $1110^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) None`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Evaluate $\frac{sin 10^{\circ}}{cos 80^{\circ}}$ `}
      />
    ),

    optionA: "A) 2",
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: "D) 1",
  },

  {
    id: "4.",
    question: (
      <MathEq math={String.raw`If $sinA = \frac{3}{4}$, then $tanA=$ `} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{3}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{7}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\sqrt{7}}{3}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{3}{\sqrt{7}}$`} />,
  },

  {
    id: "5.",
    question: (
      <MathEq math={String.raw`$sin^{2}120^{\circ} + cos^{2}120^{\circ}$ `} />
    ),

    optionA: "A) 0",
    optionB: "B) -1",
    optionC: "C) 1",
    optionD: "D) None",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`$\frac{1-tan^{2}45^{\circ}}{1+tan^{2}45^{\circ}}$= `}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 0",
    optionC: "C) -1",
    optionD: "D) Undefined",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`If $4cot\theta = 3$ then $\frac{sin\theta - cos \theta}{sin\theta + cos \theta}$ `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-1}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $7$`} />,
    optionD: <MathEq math={String.raw`D) $1$`} />,
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`If $\frac{sin30^{\circ} cos45^{\circ}}{tan60^{\circ}}$= `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{\sqrt{6}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{2\sqrt{6}}$`} />,
    optionD: <MathEq math={String.raw`D) $0$`} />,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If $sin 53 ^{\circ} \: cos 37 ^{\circ}+cos 53 ^{\circ} \: sin 37 ^{\circ}$= `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $2$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $0$`} />,
    optionD: <MathEq math={String.raw`D) $1$`} />,
  },

  {
    id: "10.",
    question: <MathEq math={String.raw`$\frac{3\pi^{c}}{5}$= `} />,

    optionA: <MathEq math={String.raw`A) $108^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $100^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $81^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $54^{\circ}$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`$cos1^{\circ}.cos2^{\circ}.cos3^{\circ}........cos90^{\circ}$= `}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 0",
    optionD: "D) None",
  },

  {
    id: "12.",
    question: <MathEq math={String.raw`$sin15^{\circ}$= `} />,

    optionA: <MathEq math={String.raw`A) $\frac{\sqrt{3}-1}{\sqrt{2}}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{\sqrt{3}+1}{2 \sqrt{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\sqrt{3}+1}{\sqrt{2}}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\sqrt{3}-1}{2\sqrt{2}}$`} />,
  },

  {
    id: "13.",
    question: "Which one of the following is prime.",

    optionA: "A) 161",
    optionB: "B) 221",
    optionC: "C) 373",
    optionD: "D) 437",
  },

  {
    id: "14.",
    question: <MathEq math={String.raw`$\sqrt{5+\sqrt{112+\sqrt{81}}}$= `} />,

    optionA: "A) 4",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 5",
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`$2^{2^{2^{2}}}$= `} />,

    optionA: "A) 256",
    optionB: "B) 128",
    optionC: "C) 512",
    optionD: "D) 32",
  },

  {
    id: "16.",
    question:
      "The v-t graph for a particle is as shown. The distance travelled in the first four second is",
    image1: <Image g={i1} />,

    optionA: "A)	12 m",
    optionB: "B)	16 m",
    optionC: "C)	20 m",
    optionD: "D)	24 m",
  },

  {
    id: "17.",
    question:
      "A body, thrown upwards with some velocity reaches the maximum height of 50 m. Another body with the double the mass thrown up with double the initial velocity will reach a maximum height of",

    optionA: "A)	100 m",
    optionB: "B)	200 m",
    optionC: "C)	300 m",
    optionD: "D)	400 m",
  },

  {
    id: "18.",
    question:
      "A particle moves along a semicircle of radius 10m in 5 seconds. The average velocity of the particle is",

    optionA: <MathEq math={String.raw`A) $2\pi \: ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $4\pi \: ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $2\: ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $4\: ms^{-1}$`} />,
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`A student is standing at a distance of 50 metres from the bus. As soon as the bus begins its motion with an acceleration of $1 \:ms^{-2}$, the student starts running towards the bus with a uniform velocity u. Assuming the motion to be along a straight road, the minimum value of u, so that the student is able to catch the bus is`}
      />
    ),

    optionA: <MathEq math={String.raw`A)	$52 \:ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $8 \:ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $10 \:ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $12 \:ms^{-1}$`} />,
  },

  {
    id: "20.",
    question:
      "A projectile shot into air at some angle with the horizontal has a range of 200 m. If the time of flight is 5 s, then the horizontal component of the velocity of the projectile at the highest point of trajectory is",

    optionA: <MathEq math={String.raw`A) $40 \: ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $0 \: ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $9.8 \: ms^{-1}$`} />,
    optionD: (
      <MathEq
        math={String.raw`D) Equal to the velocity of projection of the projectile`}
      />
    ),
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`If $\vec{A}=2\hat{i}+3\hat{j}+4\hat{k}$ and $\vec{B}=4\hat{i}+3\hat{j}+2\hat{k}$, then angle between $\vec{A}$ and $\vec{B}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\sin^{-1}(25/29)$`} />,
    optionB: <MathEq math={String.raw`B) $\sin^{-1}(29/25)$`} />,
    optionC: <MathEq math={String.raw`C) $\cos^{-1}(25/29)$`} />,
    optionD: <MathEq math={String.raw`D) $\cos^{-1}(29/25)$`} />,
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`The velocity of projection of an oblique projectile is $\vec{v}=3\hat{i}+2\hat{j}$ in ($ms^{-1}$). The speed of the projectile at the highest point of the trajectory is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $3ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $2ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $1ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) Zero`} />,
  },
  {
    id: "23.",
    question:
      "A monkey can jump a maximum horizontal distance of 20 m. Then the velocity of the monkey is",

    optionA: <MathEq math={String.raw`A) $10 \: ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $14 \: ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $20 \: ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $24 \: ms^{-1}$`} />,
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`A bullet fired at an angle of $30^{\circ}$ with the horizontal hits the ground 3 km away. By adjusting its angle of projection, one can hope to hit a target 5 km away. Assume the muzzle speed to be same and the air resistance is negligible`}
      />
    ),

    optionA: "A)	possible to hit a target 5 km away",
    optionB: "B)	not possible to hit a target 5 km away",
    optionC: "C)	prediction is not possible",
    optionD: "D)	None of the above",
  },
  {
    id: "25.",
    question:
      "A stone is just released from the window of a train moving along a horizontal straight track. The stone will hit the ground following (as seen from ground)",

    optionA: "A)	Straight path",
    optionB: "B)	Circular path",
    optionC: "C)	Parabolic path",
    optionD: "D)	Hyperbolic path",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A body is thrown with a velocity of  9.8 m/s making an angle of $30^{\circ}$ with the horizontal. It will hit the ground after a time`}
      />
    ),

    optionA: "A)	1.5 s",
    optionB: "B)	1 s",
    optionC: "C)	3 s",
    optionD: "D)	2 s",
  },
  {
    id: "27.",
    question:
      "The horizontal range and the maximum height of a projectile are equal. The angle of projection of the projectile is",

    optionA: (
      <MathEq
        math={String.raw`A) $\theta = tan^{-1}\left ( \frac{1}{4} \right )$`}
      />
    ),
    optionB: (
      <MathEq math={String.raw`B) $\theta=tan^{-1}\left ( 4 \right )$`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $\theta=tan^{-1}\left ( 2 \right )$`} />
    ),
    optionD: <MathEq math={String.raw`D) $\theta = 45^{\circ}$`} />,
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`A helicopter is flying horizontally at an altitude of 2 km with a speed of $100 ms^{-1}$. A packet is dropped from it. The horizontal distance between the point where the packet is dropped and the point where it hits the ground is ($g=10 ms^{-2}$)`}
      />
    ),

    optionA: "A) 2 km",
    optionB: "B) 0.2 km",
    optionC: "C) 20 km",
    optionD: "D) 4 km",
  },
  {
    id: "29.",
    question:
      "Two tall buildings are 40 m apart. With what speed must a ball be thrown horizontally from a window 145 m above the ground in one building, so that it will enter a window 22.5 m from the ground in the other?",

    optionA: <MathEq math={String.raw`A) $5ms^{-1}$`} />,
    optionB: <MathEq math={String.raw`B) $8ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $10ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $16ms^{-1}$`} />,
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`The vector product of $2\hat{i}+2\hat{j}+\hat{k}$ and $2\hat{i}-2\hat{j}+\hat{k}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $2\hat{i}-4\hat{j}$`} />,
    optionB: <MathEq math={String.raw`B) $4\hat{i}-8\hat{k}$`} />,
    optionC: <MathEq math={String.raw`C) $2\hat{i}-4\hat{j}+2\hat{k}$`} />,
    optionD: <MathEq math={String.raw`D) $4\hat{i}-8\hat{j}$`} />,
  },

  {
    id: "31.",
    question: "The ratio by weight of sulphur to oxygen in sulphur trioxide is",

    optionA: "A) 1:3",
    optionB: "B) 3:1",
    optionC: "C) 3:2",
    optionD: "D) 2:3",
  },

  {
    id: "32.",
    question:
      "Arrange the following threads in order of their increasing strength assuming all threads are of same length and almost same thickness.",

    optionA: "A)	silk < cotton < wool < Nylon  ",
    optionB: "B) cotton < silk < wool < Nylon",
    optionC: "C) cotton < wool < silk < Nylon",
    optionD: "D) cotton < wool < silk < Nylon",
  },

  {
    id: "33.",
    question: "Caustic soda is",

    optionA: "A)	Sodium hydrogen carbonate",
    optionB: "B) sodium carbonate",
    optionC: "C) sodium chlorate",
    optionD: "D) none of these",
  },

  {
    id: "34.",
    question: (
      <MathEq
        math={String.raw`$3Cu+8HNO_{3}\rightarrow 3Cu\left ( NO_{3} \right )_{2}+4H_{2}O+X$. S is: `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $N_{2}O$`} />,
    optionB: <MathEq math={String.raw`B) $N_{2}$`} />,
    optionC: <MathEq math={String.raw`C) $NO$`} />,
    optionD: <MathEq math={String.raw`D) $NO_{2}$`} />,
  },

  {
    id: "35.",
    question:
      "Which of the following conditions makes the clothes dry up the fastest?",

    optionA: "A)	winter season, night time, coastal area",
    optionB: "B) rainy season, day time, non-coastal area",
    optionC: "C) rainy season, night time, at the top of hill",
    optionD: "D) winter season, day time, at the top of the hill",
  },

  {
    id: "36.",
    question:
      "Match the column I with column II and select the correct option for the given codes",
    image1: <Image g={i2} />,

    optionA: "A)	A-p, B-r, C-s, D-r",
    optionB: "B) A-p, B-s, C-q, D-r",
    optionC: "C) A-p, B-q, C-r, D-s",
    optionD: "D) A-q, B-p, C-r, D-s",
  },

  {
    id: "37.",
    question:
      "Which of the following cannot be called as vapor at normal temperature?",

    optionA: "A)	Water vapour",
    optionB: "B) hydrogen chloride",
    optionC: "C) ammonia",
    optionD: "D) nitrogen",
  },

  {
    id: "38.",
    question:
      "Assertion (A): The empirical formula of ethene (C2H4) is half its molecular mass. Reason (R): The empirical formula represents the simplest whole number ratio of various atoms present in a compound.",

    optionA:
      "A)	Assertion is correct, reason is correct; reason is a correct explanation for assertion",
    optionB:
      "B)	Assertion is correct, reason is correct; reason is not a correct explanation for assertion",
    optionC: "C)	Assertion is correct, reason is incorrect",
    optionD: "D)	Assertion is correct, reason is correct",
  },

  {
    id: "39.",
    question: (
      <MathEq
        math={String.raw`The number of atoms in 0.1 mol of a triatomic gas is: ($N_{A}=6.02 \times 10^{23}$)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $6.026 \times 10^{22}$`} />,
    optionB: <MathEq math={String.raw`B) $1.806 \times 10^{23}$`} />,
    optionC: <MathEq math={String.raw`C) $3.600 \times 10^{23}$`} />,
    optionD: <MathEq math={String.raw`D) $1.800 \times 10^{22}$`} />,
  },

  {
    id: "40.",
    question: (
      <MathEq
        math={String.raw`The empirical formula of a compound is $CH_{2}$. One mole of this compound has a mass of 42 g. Its molecular formula`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $C_{2}H_{2}$`} />,
    optionB: <MathEq math={String.raw`B) $C_{2}H_{4}$`} />,
    optionC: <MathEq math={String.raw`C) $C_{3}H_{6}$`} />,
    optionD: <MathEq math={String.raw`D) $C_{3}H_{8}$`} />,
  },

  {
    id: "41.",
    question: (
      <MathEq
        math={String.raw`The number of protons, neutrons and electrons in $_{71}Lu^{75}$ respectively are:`}
      />
    ),

    optionA: "A)	104, 71 and 71",
    optionB: "B) 71, 71 and 104",
    optionC: "C) 175, 14 and 71",
    optionD: "D) 71, 104 and 71",
  },

  {
    id: "42.",
    question: "The mass of a molecule of water is",

    optionA: <MathEq math={String.raw`A) $3\times ^{-25}$kg`} />,
    optionB: <MathEq math={String.raw`B) $3\times ^{-26}$kg`} />,
    optionC: <MathEq math={String.raw`C) $1.5\times ^{-26}$kg`} />,
    optionD: <MathEq math={String.raw`D) $2.5\times ^{-26}$kg`} />,
  },

  {
    id: "43.",
    question: (
      <MathEq
        math={String.raw`The ratio by mass of oxygen combining with a fixed mass of nitrogen in $N_{2}O$, $NO$ and $NO_{2}$ respectively is`}
      />
    ),

    optionA: "A)	2 : 1 : 2",
    optionB: "B) 2 : 1 : 4",
    optionC: "C) 1 : 2: 4",
    optionD: "D) 4 : 2 : 1",
  },

  {
    id: "44.",
    question: (
      <MathEq
        math={String.raw`How many atoms are contained in one mole of sucrose ($C_{12}H_{12}O_{11}$)`}
      />
    ),

    optionA: (
      <MathEq math={String.raw`A) $20\times6.02\times10^{23}$ atoms/mol`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) $45\times6.02\times10^{23}$ atoms/mol`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $5\times6.02\times10^{23}$ atoms/mol`} />
    ),
    optionD: <MathEq math={String.raw`D) None of these`} />,
  },

  {
    id: "45.",
    question: (
      <MathEq
        math={String.raw`The volume at STP occupied by  240 g of $SO_{2}$ in litres is`}
      />
    ),

    optionA: "A)	64",
    optionB: "B) 84",
    optionC: "C) 59",
    optionD: "D) 73",
  },
];
