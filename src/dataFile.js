import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
import i6 from "./I6.PNG";
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
    question: "Solve 8x+5y=9, 3x+2y=4",

    optionA: "A) x= -2, y= 5",
    optionB: "B) x= -1, y= 7",
    optionC: "C) x= 2, y= 3",
    optionD: "D) x= 9, y= 4",
  },

  {
    id: "2.",
    question:
      "For what value of k, the system of equations kx-y-2=0 and 6x-2y-3=0 has a unique solution",

    optionA: <MathEq math={String.raw`A) $k\neq 4$`} />,
    optionB: <MathEq math={String.raw`B) $k\neq 3$`} />,
    optionC: <MathEq math={String.raw`C) $k\neq 5$`} />,
    optionD: <MathEq math={String.raw`D) $k\neq 2$`} />,
  },

  {
    id: "3.",
    question:
      "For what value of k, the system of equations x+2y+7=0 and 2x+ky+14=0 has an infinite number solutions?",

    optionA: "A) k= 2",
    optionB: "B) k= 4",
    optionC: "C) k= 3",
    optionD: "D) k= 7",
  },

  {
    id: "4.",
    question:
      "For what value of k, the system of equations kx-10y-3=0 and 3x-5y-7=0 has no solution?",

    optionA: "A) k= 6",
    optionB: "B) k= 4",
    optionC: "C) k= 2",
    optionD: "D) k= 5",
  },

  {
    id: "5.",
    question: "On solving 2x+y=8 and 3y=4+4x, we get:",

    optionA: "A) x= 3, y= -4",
    optionB: "B) x= 2, y= 4",
    optionC: "C) x= 1, y= 4",
    optionD: "D) x= 4, y= 1",
  },

  {
    id: "6.",
    question: "If (5,k) is a solution of 2x+y-6=0, then k=?",

    optionA: "A) -4",
    optionB: "B) -3",
    optionC: "C) 4",
    optionD: "D) 6",
  },

  {
    id: "7.",
    question: "The system of equations x+2y=3 and 2x+4y=3 has",

    optionA: "A) Exxactly two solutions",
    optionB: "B) No solution",
    optionC: "C) Infinitely many solutions",
    optionD: "D) A unique solution",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`The value of $\begin{vmatrix}
    4 & 0\\ 
    7 & 2
    \end{vmatrix}$ = `}
      />
    ),

    optionA: "A) 8",
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: "D) 4",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If $\begin{vmatrix}
    m & 0\\ 
    2 & 4
    \end{vmatrix} = 8$, then m is`}
      />
    ),

    optionA: "A) 8",
    optionB: "B) 0",
    optionC: "C) 2",
    optionD: "D) 4",
  },

  {
    id: "10.",
    question: "If 2x+5= -3, then x is",

    optionA: "A) 8",
    optionB: "B) 4",
    optionC: "C) -4",
    optionD: "D) 0",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`The root of quadratic equation $x^{2}+2x+1=0$ is `}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 0",
    optionD: "D) 2",
  },

  {
    id: "12.",
    question: <MathEq math={String.raw`If $2^{x+1}=4^{x+2}$, then x is`} />,

    optionA: "A) 3",
    optionB: "B) -3",
    optionC: "C) 0",
    optionD: "D) 2",
  },

  {
    id: "13.",
    question: "The number 49235714 is divisible by ",

    optionA: "A) 7",
    optionB: "B) 3",
    optionC: "C) 5",
    optionD: "D) 11",
  },

  {
    id: "14.",
    question: "Find the value of 1-[1-(1-{1-1})]",

    optionA: "A) 1",
    optionB: "B) 0",
    optionC: "C) 2",
    optionD: "D) -2",
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`$\sqrt{17161} =$`} />,

    optionA: "A) 121",
    optionB: "B) 119",
    optionC: "C) 141",
    optionD: "D) 131",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`If body having initial velocity zero is moving with uniform acceleration $8 m/sec^{2}$the distance travelled by it in fifth second will be`}
      />
    ),

    optionA: "A) 36 metres",
    optionB: "B) 40 metres",
    optionC: "C) 100 metres",
    optionD: "D) Zero",
  },

  {
    id: "17.",
    question:
      "An alpha particle enters a hollow tube of 4 m length with an initial speed of 1 km/s. It is accelerated in the tube and comes out of it with a speed of 9 km/s. The time for which it remains inside the tube is",

    optionA: <MathEq math={String.raw`A) $8 \times 10^{-3}$s`} />,
    optionB: <MathEq math={String.raw`B) $80 \times 10^{-3}$s`} />,
    optionC: <MathEq math={String.raw`C) $800 \times 10^{-3}$s`} />,
    optionD: <MathEq math={String.raw`D) $8 \times 10^{-4}$s`} />,
  },

  {
    id: "18.",
    question:
      "A body is moving with uniform acceleration describes 40 m in the first 5 sec and 65 m in next 5 sec. Its initial velocity will be",

    optionA: "A) 4 m/s",
    optionB: "B) 2.5 m/s",
    optionC: "C) 5.5 m/s",
    optionD: "D) 11 m/s",
  },

  {
    id: "19.",
    question:
      "A body starting from rest moves with constant acceleration. The ratio of distance covered by the body during the 5th sec to that covered in 5 sec is",

    optionA: "A) 9/25",
    optionB: "A) 3/5",
    optionC: "A) 25/9",
    optionD: "A) 1/25",
  },

  {
    id: "20.",
    question:
      "A ball is dropped downwards. After 1 second another ball is dropped downwards from the same point. What is the distance between them after 3 seconds",

    optionA: "A) 25m",
    optionB: "B) 20m",
    optionC: "C) 50m",
    optionD: "D) 9.8m",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`The angle between the two vectors $\vec{A}=3\hat{i}+4\hat{j}+5\hat{k}$ and $\vec{B}=3\hat{i}+4\hat{j}+5\hat{k}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A)$60^{\circ}$`} />,
    optionB: "B) Zero",
    optionC: <MathEq math={String.raw`C) $90^{\circ}$`} />,
    optionD: "D) None of these",
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`If $\vec{A}=4\hat{i}-3\hat{j}$ and $\vec{B}=6\hat{i}+8\hat{j}$ then magnitude and direction of $\vec{A}+\vec{B}$ will be`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $5$, $tan^{-1}$(3/4)`} />,
    optionB: <MathEq math={String.raw`B) $5\sqrt{5}$, $tan^{-1}$(1/2)`} />,
    optionC: <MathEq math={String.raw`C) $10$, $tan^{-1}$(5)`} />,
    optionD: <MathEq math={String.raw`D) $25$, $tan^{-1}$(3/4)`} />,
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`$\vec{A}=2\hat{i}+\hat{j}$, $\vec{B}=3\hat{j}-\hat{k}$ and $\vec{C}=6\hat{i}-2\hat{k}$. Value of $\vec{A}-2\vec{B}+3\vec{C}$ would be`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $20\hat{i}+5\hat{j}+4\hat{k}$`} />,
    optionB: <MathEq math={String.raw`B) $20\hat{i}-5\hat{j}-4\hat{k}$`} />,
    optionC: <MathEq math={String.raw`C) $4\hat{i}+5\hat{j}+20\hat{k}$`} />,
    optionD: <MathEq math={String.raw`D) $5\hat{i}+4\hat{j}+10\hat{k}$`} />,
  },
  {
    id: "24.",
    question:
      "For the resultant of the two vectors to be maximum, what must be the angle between them",

    optionA: <MathEq math={String.raw`A) $0^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $60^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $90^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $180^{\circ}$`} />,
  },
  {
    id: "25.",
    question:
      "A particle is simultaneously acted by two forces equal to 4 N and 3 N. The net force on the particle is",

    optionA: "7N",
    optionB: "5N",
    optionC: "1N",
    optionD: "Between 1N and 7N",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`If a vector $2\hat{i}+3\hat{j}+8\hat{k}$ is perpendicular to the vector $4\hat{j}-4\hat{i}+\alpha \hat{k}$. Then the value of $\alpha $ is`}
      />
    ),

    optionA: "A) -1",
    optionB: "B) 1/2",
    optionC: "C) -1/2",
    optionD: "D) 1",
  },
  {
    id: "27.",
    question: "Dot product of two mutual perpendicular vector is ",

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: <MathEq math={String.raw`$\alpha$`} />,
    optionD: "D) None of these",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`If $\vec{A}=3\hat{i}+\hat{j}+2\hat{k}$ and $\vec{B}=2\hat{i}-2\hat{j}+4\hat{k}$ then the value of $\left | \vec{A}\times\vec{B} \right |$ will be`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $8\sqrt{2}$`} />,
    optionB: <MathEq math={String.raw`B) $8\sqrt{3}$`} />,
    optionC: <MathEq math={String.raw`C) $8\sqrt{5}$`} />,
    optionD: <MathEq math={String.raw`D) $5\sqrt{8}$`} />,
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`The angle between the two vectors $\vec{A}=5\hat{i}+5\hat{j}$ and $\vec{B}=5\hat{i}-5\hat{j}$ will be`}
      />
    ),

    optionA: "A) Zero",
    optionB: <MathEq math={String.raw`B) $45^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $90^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $180^{\circ}$`} />,
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`The vector $\vec{P}=a\hat{i}+a\hat{j}+3\hat{k}$ and $\vec{Q}=a\hat{i}-2\hat{j}-\hat{k}$ are perpendicular to each other. The positive value of a is`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 4",
    optionC: "C) 9",
    optionD: "D) 13",
  },

  {
    id: "31.",
    question: "The combination of two or more fibres is called",

    optionA: "A)	bleeding ",
    optionB: "B) moulding",
    optionC: "C) melting",
    optionD: "D) none of these",
  },

  {
    id: "32.",
    question: "Match the following:",
    image1: <Image g={i1} />,

    optionA: "(a)",
    optionB: "(b)",
    optionC: "(c)",
    optionD: "(d)",
  },

  {
    id: "33.",
    question: (
      <MathEq
        math={String.raw`The number of moles of $H_{2}$ which is required to produce 10 moles of $NH_{3}$ in the following reaction is`}
      />
    ),
    image1: <Image g={i2} />,

    optionA: "A) 10",
    optionB: "B) 20",
    optionC: "C) 35",
    optionD: "D) 53",
  },

  {
    id: "34.",
    question:
      "Assertion (A): ammonium chloride, iodine and naphthalene are some common examples of the substances which undergo sublimation. Reason(R): all solids are first converted to liquids and then gases on heating",

    optionA: "A)	A and R are true, R supports A        ",
    optionB: "B) A and R are true, R does not support A",
    optionC: "C) A is true, R is false",
    optionD: "D) Both A and R are false",
  },

  {
    id: "35.",
    question:
      "A solution contains 2.5 g of common salt in 22 g of water. The mass by mass percentage of the solution will be",

    optionA: <MathEq math={String.raw`A) 1.13%`} />,
    optionB: <MathEq math={String.raw`B) 8.8%`} />,
    optionC: <MathEq math={String.raw`C) 11.3%`} />,
    optionD: <MathEq math={String.raw`D) 10.20%`} />,
  },

  {
    id: "36.",
    question: "Select the incorrect statement",

    optionA: "A) all minerals are ores",
    optionB: "B) all ores cannot be minerals",
    optionC: "C) all ores are minerals",
    optionD: "D) A mineral cannot be an ore",
  },

  {
    id: "37.",
    question: (
      <MathEq
        math={String.raw`The table below gives information about six substances P, Q, R, S, T, and U. (consider room temperature as $30^{\circ}C$). The substance that will turn into a liquid only on a warm day ($37^{\circ}C$) and the substance that will turn from liquid to a solid when placed in a refrigerator ($4^{\circ}C$) respectively are`}
      />
    ),
    image1: <Image g={i3} />,

    optionA: "A)	P and S",
    optionB: "B) Q and T",
    optionC: "C) S and P",
    optionD: "D) T and P",
  },

  {
    id: "38.",
    question: "The biodegradable polymer is",

    optionA: "A)	Nylon-6,6",
    optionB: "B) Nylon 2-Nylon 6",
    optionC: "C) nylon-6",
    optionD: "D) Buna-S",
  },

  {
    id: "39.",
    question: (
      <MathEq
        math={String.raw`Two substances X and Y reacted to form a third substance $X_{3}Y_{2}$ according to the reaction:`}
      />
    ),
    image1: <Image g={i4} />,

    optionA: "A) (iii) and (iv)",
    optionB: "B) (i), (iii) and (iv)",
    optionC: "C) (ii), (iii) and (iv)",
    optionD: "D) (i), (ii) and (iii) ",
  },

  {
    id: "40.",
    question:
      "There are the following four beakers. In which of these beakers displacement reaction takes place?",
    image1: <Image g={i5} />,

    optionA: "A)	Beaker A",
    optionB: "B) Beaker B",
    optionC: "C) Beaker C",
    optionD: "D) Beaker D",
  },

  {
    id: "41.",
    question: "In dry cleaning shops, the clothes are dry cleaned using",

    optionA: "A)	alcohol",
    optionB: "B) liquid carbondioxide",
    optionC: "C) teflon",
    optionD: "D) tetrachloroethylene",
  },

  {
    id: "42.",
    question: "What are (i), (ii), (iii), (iv), (v), and (vi) ? ",
    image1: <Image g={i6} />,

    optionA: "(a)",
    optionB: "(b)",
    optionC: "(c)",
    optionD: "(d)",
  },

  {
    id: "43.",
    question:
      "A substance which gets oxidized during a reduction-oxidation reaction is known as",

    optionA: "A)	Reducing agent",
    optionB: "B) oxidizing agent",
    optionC: "C) either oxidizing or reducing agent",
    optionD: "D) none of these ",
  },

  {
    id: "44.",
    question: "Which is not a balanced equation? ",

    optionA: (
      <MathEq math={String.raw`A) $NaOH + HCL\rightarrow  Nacl + H_{2}O$`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) $Mg+CuSO_{4}\rightarrow MgSO_{4} +Cu$`} />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $2Mg + 2HNO_{3}\rightarrow Mg \left ( NO_{3} \right )_{2} +H_{2}$`}
      />
    ),
    optionD: (
      <MathEq math={String.raw`D) $SO_{2}+2H_{2}S \rightarrow 2H_{2}O+3S$`} />
    ),
  },

  {
    id: "45.",
    question: "The number of water molecules is maximum in",

    optionA: "A)	18 g of water",
    optionB: "B) 18 moles of water",
    optionC: "C) 18 molecules of water  ",
    optionD: "D) 1.8 g of water",
  },
];
