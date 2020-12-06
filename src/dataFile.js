import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
// import i4 from "./I4.png";
// import i5 from "./I5.png";
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
        math={String.raw`Find the angle which straight line $y=\sqrt{3}x-4$ makes with x-axis`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $30^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $60^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $45^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $90^{\circ}$`} />,
  },

  {
    id: "2.",
    question: "Find the equation of line passing through (1,-2), (-2, 3)",

    optionA: "A) 5x+3y+1=0",
    optionB: "B) x-4y+3=0",
    optionC: "C) x-2y-2=3",
    optionD: "D) -4x+y+3=0",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Find the equation of line with $\theta = 150^{\circ}$, c=2.   (y=mx+c)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $y=\frac{-1}{\sqrt{3}}x+2$`} />,
    optionB: <MathEq math={String.raw`B) $y=2x+\frac{-1}{\sqrt{3}}$`} />,
    optionC: <MathEq math={String.raw`C) $y=\frac{1}{\sqrt{3}}x+6$`} />,
    optionD: "D) None of the above",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Find the equation of line with $\theta = \frac{\pi}{3}$ and pass through (1, 2).`}
      />
    ),

    optionA: (
      <MathEq math={String.raw`A) $y-2 = \sqrt{3} \left( x-1\right)$`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) $y-2 = \sqrt{3} \left( x+1\right)$`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $y-2 = \sqrt{1} \left( x-2\right)$`} />
    ),
    optionD: (
      <MathEq math={String.raw`D) $y-2 = \sqrt{1} \left( x+2\right)$`} />
    ),
  },

  {
    id: "5.",
    question: "In which quadrant does the point (-5, 7) lie?",

    optionA: "A) 1st",
    optionB: "B) 2nd",
    optionC: "C) 3rd",
    optionD: "D) 4th",
  },

  {
    id: "6.",
    question: "In which axis does the point (6, 0) lie?",

    optionA: "A) X- axis",
    optionB: "B) Y- axis",
    optionC: "C) Either X or Y",
    optionD: "D) At origin",
  },

  {
    id: "7.",
    question: "The distance of the point P(8, -6) from the origin is",

    optionA: "A) 2 units",
    optionB: "B) 8 units",
    optionC: "C) 10 units",
    optionD: "D) 16 units",
  },

  {
    id: "8.",
    question:
      "The vertices of a triangle are A(4, 4), B(3, -2) and C(-3, 16). The area of the triangle is",

    optionA: "A) 30 sq units",
    optionB: "B) 36 sq units",
    optionC: "C) 27 sq units",
    optionD: "D) 40 sq units",
  },

  {
    id: "9.",
    question:
      "If the points A(1, -1), B(5, 2) and C(k, 5) are collinear, then k=?",

    optionA: "A) 2",
    optionB: "B) 4",
    optionC: "C) 6",
    optionD: "D) 9",
  },

  {
    id: "10.",
    question: "Solpe of X- axis is",

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) infinity",
  },

  {
    id: "11.",
    question: "Slope of Y- axis is",

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) infinity",
  },

  {
    id: "12.",
    question: "The points (2,2) (6,3) and (4, 11) are the vertices of",

    optionA: "A) an equilateral",
    optionB: "B) a right angled triangle",
    optionC: "C) an isosceles triangle",
    optionD: "D) a scalene triangle",
  },

  {
    id: "13.",
    question:
      "A point C divides the line AC, where A(1, 3) and B(2, 7) in the ratio of 3:4. The coordinates of C are",

    optionA: "A) (5/3, 5)",
    optionB: "B) (-2, -9)",
    optionC: "C) (3/5, 5)",
    optionD: "D) (10/7, 33/7)",
  },

  {
    id: "14.",
    question:
      "The slope of a line passing through the points A(4, -3) and B(6, -3) is",

    optionA: "A) 4",
    optionB: "B) 0",
    optionC: "C) infinity",
    optionD: "D) 5",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`If the inclination of a line joining the points A(x, -3) and B(2, 5) is $135^{\circ}$, then x=?`}
      />
    ),

    optionA: "A) 10",
    optionB: "B) 15",
    optionC: "C) 20",
    optionD: "D) 25",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`If $\vec{A}$ and $\vec{B}$ are perpendicular vectors and vector $\vec{A}=5\hat{i}+7\hat{j}-3\hat{k}$ and $\vec{B}=2\hat{i}+2\hat{j}-a\hat{k}$. The value of a is`}
      />
    ),

    optionA: "A) -2",
    optionB: "B) 8",
    optionC: "C) -7",
    optionD: "D) -8",
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`A force vector applied on a mass is represented as $\vec{F}=6\hat{i}-8\hat{j}+10\hat{k}$ and accelerates with $1 \, m/s^{2}$. What will be the mass of the body in kg.`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $10\sqrt{2}$`} />,
    optionB: "B) 20",
    optionC: <MathEq math={String.raw`C) $2\sqrt{10}$`} />,
    optionD: "D) 10",
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`A ball is thrown vertically upwards from the top of a tower at $4.9 ms^{-1}$. It strikes the pond near the base of the tower after 3 seconds. The height of the tower is`}
      />
    ),

    optionA: "A)	73.5 m",
    optionB: "B)	44.1 m",
    optionC: "C)	29.4 m",
    optionD: "D)	None of these",
  },

  {
    id: "19.",
    question:
      "An aeroplane is moving with horizontal velocity u at height h.  The velocity of a packet dropped from it on the earth's surface will be (  is acceleration due to gravity)",

    optionA: <MathEq math={String.raw`A) $\sqrt{u^{2}+2gh}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{2gh}$`} />,
    optionC: <MathEq math={String.raw`C) 2gh`} />,
    optionD: <MathEq math={String.raw`D) $\sqrt{u^{2}-2gh}$`} />,
  },

  {
    id: "20.",
    question:
      "At the top of the trajectory of a projectile, the directions of its velocity and acceleration are ",

    optionA: "A)	Perpendicular to each other	",
    optionB: "B)	Parallel to each other",
    optionC: "C) Inclined to each other at an angle of 45 degree",
    optionD: "D) Antiparallel to each other",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`An object is thrown along a direction inclined at an angle of $45^{\circ}$ with the horizontal direction. The horizontal range of the particle is equal to`}
      />
    ),

    optionA: "A)	Vertical height",
    optionB: "B)	Twice the vertical height",
    optionC: "C)	Thrice the vertical height",
    optionD: "D)	Four times the vertical height",
  },
  {
    id: "22.",
    question:
      "A ball thrown by a boy is caught by another after 2 sec. some distance away in the same level. If the angle of projection is 30 degree, the velocity of projection is",

    optionA: "A)	19.6 m/s ",
    optionB: "B)	9.8 m/s",
    optionC: "C)	14.7 m/s",
    optionD: "D)	None of these",
  },
  {
    id: "23.",
    question:
      "A body of mass 2 kg moving on a horizontal surface with an initial velocity of 4 m/sec comes to rest after 2 sec. If one wants to keep this body moving on the same surface with a velocity of 4 m/sec, the force required is",

    optionA: "A)	8 N",
    optionB: "B)	4 N",
    optionC: "C)	Zero",
    optionD: "D)	2 N",
  },
  {
    id: "24.",
    question:
      "A body of mass 2 kg is hung on a spring balance mounted vertically in a lift. If the lift descends with an acceleration equal to the acceleration due to gravity ‘g’, the reading on the spring balance will be",

    optionA: "A)	2 kg",
    optionB: "B) (4 x g) kg",
    optionC: "C) (2 x g) kg",
    optionD: "d) Zero",
  },
  {
    id: "25.",
    question:
      "In doubling the mass and acceleration of the mass, the force acting on the mass with respect to the previous value",

    optionA: "A)	Decreases to half",
    optionB: "B)	Remains unchanged",
    optionC: "C)	Increases two times",
    optionD: "D)	Increases four times",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A force of 5 N  acts on a body of weight 9.8 N. What is the acceleration produced in $m/sec^{2}$`}
      />
    ),

    optionA: "A)	49.00",
    optionB: "B)	5.00",
    optionC: "C)	1.46",
    optionD: "D)	0.51",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`A block A of mass 7 kg is placed on a frictionless table. A thread tied to it passes over a frictionless pulley and carries a body B of mass 3 kg at the other end. The acceleration of the system is (given $g= 10 ms^{-2}$)`}
      />
    ),
    image1: <Image g={i1} />,

    optionA: <MathEq math={String.raw`A) 100 $ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) 3 $ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) 10 $ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) 30 $ms^{-2}$`} />,
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`Three blocks of masses 2 kg, 3 kg and 5 kg are connected to each other with light string and are then placed on a frictionless surface as shown in the figure. The system is pulled by a force F= 10N then tension $T_{1}$ `}
      />
    ),
    image1: <Image g={i2} />,

    optionA: "A)	1N",
    optionB: "B)	5 N",
    optionC: "C)	8 N",
    optionD: "D)	10 N",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`Two masses $m_{1}$ and $m_{2}$ are attached to a string which passes over a frictionless smooth pulley. When $m_{1}=10kg$, $m_{2}=6kg$, the acceleration of masses is `}
      />
    ),
    image1: <Image g={i3} />,

    optionA: <MathEq math={String.raw`A) $20 m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $5 m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $2.5 m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $10 m/s^{2}$`} />,
  },
  {
    id: "30.",
    question: "The momentum of a system is conserved",

    optionA: "A)	Always",
    optionB: "B)	Never",
    optionC: "C)	In the absence of an external force on the system",
    optionD: "D)	None of the above",
  },

  // {
  //   id: "31.",
  //   question: [
  //     "Consider the following statements:",
  //     <br />,
  //     "i)	Molecular formula of CH3OH is32 u",
  //     <br />,
  //     "ii)	In NH3, the ratio ofN and H by mass is 1 : 3",
  //     <br />,
  //     "iii)	The formula weight of CaCl2 is 111 u.",
  //     <br />,
  //     "iv)	Isotopes have the same atomic mass",
  //     <br />,
  //     "Which of the above statements are correct?",
  //   ],

  //   optionA: "A) i) & iii)",
  //   optionB: "B) i), ii) & iv)",
  //   optionC: "C) i), ii), and iii)",
  //   optionD: "D) i), iii) and iv)",
  // },

  // {
  //   id: "32.",
  //   question: [
  //     "A teacher instructed four students A, B, C and D to prepare a suspension of chalk in water. The students prepared suspension in the following manner.",
  //     <br />,
  //     "-Student ‘A’ placed a piece of chalk in water",
  //     <br />,
  //     "-Student ‘B’ places powdered chalk in water",
  //     <br />,
  //     "-Student ‘C’ places powdered chalk in water and then shakes the mixture vigorously",
  //     <br />,
  //     "-Student ‘D’ places powdered chalk in dil. HCl",
  //     <br />,
  //     "Which of the students has correct way of preparation of suspension?",
  //   ],

  //   optionA: "A)	Student A",
  //   optionB: "B) student B",
  //   optionC: "C) student C",
  //   optionD: "D) student D",
  // },

  // {
  //   id: "33.",
  //   question: "Which of the following is correct order of density?",

  //   optionA:
  //     "A)	Air < exhaust from chimneys < honey  < water < chalk < cotton < iron",
  //   optionB:
  //     "B)	Air < exhaust from chimneys <cotton < chalk <water < honey <  iron",
  //   optionC:
  //     "C)	Air < exhaust from chimneys < honey < water < chalk < iron < cotton",
  //   optionD:
  //     "D)	Air < exhaust from chimneys <cotton<water <honey < chalk  < iron",
  // },

  // {
  //   id: "34.",
  //   question: [
  //     "Curd cannot be stored in",
  //     <br />,
  //     "i)	Brass vessel",
  //     <br />,
  //     "ii) copper vessel",
  //     <br />,
  //     "iii) steel",
  //     <br />,
  //     "iv) bronze",
  //   ],

  //   optionA: "A)	i), ii), and iii)",
  //   optionB: "B) ii), iii),and iv)",
  //   optionC: "C) i), ii),and iv)",
  //   optionD: "D) i), iii) and iv)",
  // },

  // {
  //   id: "35.",
  //   question: [
  //     "Which of the following are the characteristics of isobars?",
  //     <br />,
  //     "i)	Isobars have same number of neutrons",
  //     <br />,
  //     "ii)	Isobars have same number of protons and neutrons",
  //     <br />,
  //     "iii)	Isobars have similar physical properties",
  //     <br />,
  //     "iv)	Isobars have same mass number",
  //   ],

  //   optionA: "A)	i) and iii) ",
  //   optionB: "B) ii) and iv)",
  //   optionC: "C) i), iii) and iv)",
  //   optionD: "D) iii) and iv)",
  // },

  // {
  //   id: "36.",
  //   question: "The dye from blue fountain pen ink can be separated by",

  //   optionA: "A)	evaporation",
  //   optionB: "B) distillation",
  //   optionC: "C) chromatography",
  //   optionD: "D) separating funnel",
  // },

  // {
  //   id: "37.",
  //   question: [
  //     "Burning  magnesium ribbon is brought in the gas jar of carbon dioxide. Which of the following is correct?",
  //     <br />,
  //     "i)	It keeps on burning",
  //     <br />,
  //     "ii)	It gets extinguished",
  //     <br />,
  //     "iii)	Although CO2 is non-supporter of combustion, but burning magnesium breaks CO2 into carbon and oxygen and oxygen helps in burning",
  //     <br />,
  //     "iv)	Carbon dioxide is supporter of combustion",
  //   ],

  //   optionA: "A)	i) and iv)",
  //   optionB: "B) i) and iii)",
  //   optionC: "C) i) and ii)",
  //   optionD: "D) iii) and iv)",
  // },

  // {
  //   id: "38.",
  //   question: (
  //     <MathEq
  //       math={String.raw`Four test tubes were taken and marked A, B, C and D respectively. 2 mL of solution of $Al_{2} \left( SO_{4} \right)_{3}$ in water was filled in each of the four test tubes. Clean piece of metal Zn was placed in test-tube A, clean iron nail was put in test-tube B, clean copper wire was placed in test-tube C and a clean aluminium wire was placed in test-tube D. It was observed that no change occurred in any of the test-tubes. The correct inference drawn is:`}
  //     />
  //   ),

  //   optionA: "A)	Zinc is more active than Al",
  //   optionB: "B) zinc is more active than Cu",
  //   optionC: "C)	Copper is more active than Al",
  //   optionD: "D) zinc, iron & copper are less active than Al",
  // },

  // {
  //   id: "39.",
  //   question: [
  //     "Arrange the following in decreasing order of mass",
  //     <br />,
  //     <MathEq math={String.raw`i)	$10^{23}$ molecules of $H_{2}$`} />,
  //     <br />,
  //     <MathEq math={String.raw`ii) 0.1 mole of $H_{2}O$`} />,
  //     <br />,
  //     "iii) 0.01 mole of atoms of nitrogen",
  //     <br />,
  //     <MathEq math={String.raw`iv) 2.24 L of $O_{2}$ at STP`} />,
  //   ],

  //   optionA: "A)	iv, iii, i, ii",
  //   optionB: "B) iv, i, ii, iii",
  //   optionC: "C) iv, ii, i, iii",
  //   optionD: "D) iv, i, iii, ii",
  // },

  // {
  //   id: "40.",
  //   question:
  //     "A student accidentally spilled a few drops of a solution over the shirt. The area became blue-black because the solution was",

  //   optionA: "A)	An acid which burnt the patch of cloth",
  //   optionB: "B)	Iodine which reacted with starched part of shirt",
  //   optionC: "C)	Potassium dichromate which oxidized the piece of shirt",
  //   optionD: "D)	HCl which reacted with metanil pigment of the shirt",
  // },

  // {
  //   id: "41.",
  //   question: [
  //     "Consider the following statements:",
  //     <br />,
  //     "i)	e/m ratio of particles of  the canal rays remains constant",
  //     <br />,
  //     "ii)	 the energy of orbit closest to nucleus is lowest",
  //     <br />,
  //     "iii)	Cl- has 18 electrons and 18 protons",
  //     <br />,
  //     <MathEq
  //       math={String.raw`iv)	The maximum number of electrons  in an energy level is equal to $2n^{2}$.`}
  //     />,
  //     <br />,
  //     "Which of the above statement(s) is/are correct?",
  //   ],

  //   optionA: "A)	Only ii)",
  //   optionB: "B) i), iii) and iv)",
  //   optionC: "C) ii) and iv)",
  //   optionD: "D) ii), iii) and iv)",
  // },

  // {
  //   id: "42.",
  //   question: (
  //     <MathEq
  //       math={String.raw`A metal sulphate has the formula $MSO_{4}$. The  phosphate  of  the  same  metal  will have the formula`}
  //     />
  //   ),

  //   optionA: <MathEq math={String.raw`A) $M_{3} \left(PO_{4}\right)_{3}$`} />,
  //   optionB: <MathEq math={String.raw`B) $M_{2}PO_{4}$`} />,
  //   optionC: <MathEq math={String.raw`C) $M \left(PO_{4}\right)_{3}$`} />,
  //   optionD: <MathEq math={String.raw`D) $M_{3} \left(PO_{4}\right)_{2}$`} />,
  // },

  // {
  //   id: "43.",
  //   question:
  //     "An element ‘X’ has the same number of electrons in the first and the fourth shell as well  as  in  the  second  and  the  third shell. What is the formula and nature of its oxide?",

  //   optionA: "A)	XO, Neutral	",
  //   optionB: <MathEq math={String.raw`B) $XO_{2}$, Acidic`} />,
  //   optionC: <MathEq math={String.raw`C) $XO_{2}$, Amphoteric`} />,
  //   optionD: "D) XO, Basic",
  // },

  // {
  //   id: "44.",
  //   question:
  //     "How much percent of iron ore is found in magnetite (At. Mass of iron = 55.84)?",

  //   optionA: "A) 70%",
  //   optionB: "B) 65%",
  //   optionC: "C) 60%",
  //   optionD: "D) 72%",
  // },

  // {
  //   id: "45.",
  //   question: [
  //     <MathEq
  //       math={String.raw`Assertion (A): both 44 g of $CO_{2}$ and 16 g of $CH_{4}$ have same number of carbon atoms.`}
  //     />,
  //     <br />,
  //     <MathEq
  //       math={String.raw`Reason (R): both contain 1 g atom of carbon which contains $6.023 x 10^{23}$ carbon atoms.`}
  //     />,
  //   ],

  //   optionA:
  //     "A)	Assertion is correct, reason is correct; reason is a correct explanation for assertion",
  //   optionB:
  //     "B)	Assertion is correct, reason is correct; reason is not a correct explanation for assertion ",
  //   optionC: "C)	Both Assertion and reason are correct",
  //   optionD: "D)	Both Assertion and reason are incorrect",
  // },
];
