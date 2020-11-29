import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
import i6 from "./I6.png";
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
    question: "In which quadrant does the point (-3, -5) lie?",

    optionA: "A) 1st",
    optionB: "B) 2nd",
    optionC: "C) 3rd",
    optionD: "D) 4th",
  },

  {
    id: "2.",
    question: "On which axis does the point (0, -5) lie?",

    optionA: "A) X-axis",
    optionB: "B) Y-axis",
    optionC: "C) None of these",
    optionD: "D) A & B",
  },

  {
    id: "3.",
    question: "The distance of the point P(8, -6) from the origin is:",

    optionA: "A) 2 units",
    optionB: "B) 14 units",
    optionC: "C) 10 units",
    optionD: "D) None of these",
  },

  {
    id: "4.",
    question: "The distance between the points A(b,0) and B(0,a) is:",

    optionA: <MathEq math={String.raw`A) $\sqrt{a^{2} \:- \:b^{2}}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{a^{2} \:+ \:b^{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\sqrt{a \:+ \:b}$`} />,
    optionD: "D) (a + b)",
  },

  {
    id: "5.",
    question: "The distance between the points A(2, -3) and B(2, 2) is:",

    optionA: "A) 2 units",
    optionB: "B) 3 units",
    optionC: "C) 4 units",
    optionD: "D) 5 units",
  },

  {
    id: "6.",
    question:
      "The vertices of a triangle are A(4, 4), B(3, -2) and C(-3, 16). The area of the triangle is:",

    optionA: "A) 36 sq. units",
    optionB: "B) 37 sq. units",
    optionC: "C) 38 sq. units",
    optionD: "D) None of these",
  },

  {
    id: "7.",
    question:
      "If the points A(2, 3), B(5, k) and C(6, 7) are collinear, then k = ?",

    optionA: "A) 4",
    optionB: "B) 6",
    optionC: <MathEq math={String.raw`C) $\frac{-3}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{11}{4}$`} />,
  },

  {
    id: "8.",
    question:
      "If the points A(1, -1), B(5, 2) and C(k, 5) are collinear, then k=?",

    optionA: "A) 6",
    optionB: "B) -3",
    optionC: "C) 9",
    optionD: "D) 4",
  },

  {
    id: "9.",
    question:
      "A point C divides the join of A(1, 3) and B(2, 7) in the ratio 3 : 4. The co-ordinates of C are:",

    optionA: <MathEq math={String.raw`A) $\left( \frac{5}{3},5\right)$`} />,
    optionB: <MathEq math={String.raw`B) $\left(-2,-9 \right)$`} />,
    optionC: (
      <MathEq math={String.raw`C) $\left( \frac{10}{7},\frac{33}{7}\right)$`} />
    ),
    optionD: <MathEq math={String.raw`D) $\left( \frac{3}{2},5 \right)$`} />,
  },

  {
    id: "10.",
    question:
      "The end points of a line segment AB are A(-5,4) and B(7,-8). Its midpoint is:",

    optionA: "A) C(1, -2)",
    optionB: "B) C(2, -1)",
    optionC: "C) C(2, -3)",
    optionD: "D) C(2, -2)",
  },

  {
    id: "11.",
    question: "The equation x-2=0 is ______",

    optionA: "A) parallel to X-axis",
    optionB: "B) parallel to Y-axis",
    optionC: "C) parallel to Z-axis",
    optionD: "D) None of the above",
  },

  {
    id: "12.",
    question: "The equation x-2=0 is ______",

    optionA: "A) perpendicular to X-axis",
    optionB: "B) perpendicular to Y-axis",
    optionC: "C) perpendicular to Z-axis",
    optionD: "D) None of the above",
  },

  {
    id: "13.",
    question: <MathEq math={String.raw`$cos 0^{\circ}$=`} />,

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) Not defined",
    optionD: "D) None of these",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`If $sin\theta=\frac{\sqrt{5}}{3}$ and $cos\theta=\frac{1}{3}$, then $tan\theta$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\sqrt{5}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{\sqrt{5}}{9}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{3}{\sqrt{5}}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\sqrt{5}}{6}$`} />,
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`$cos72^{\circ}-sin18^{\circ}$=`} />,

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: <MathEq math={String.raw`C) $2sin18^{\circ}$`} />,
    optionD: "D) None of these",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`A bullet is fired with a speed of 1000 m/sec in order to hit a target 100 m away. If $g=10m/s^{2}$, the gun should be aimed`}
      />
    ),

    optionA: "A)	Directly towards the target",
    optionB: "B)	5 cm above the target",
    optionC: "C)	10 cm above the target",
    optionD: "D)	15 cm above the target",
  },

  {
    id: "17.",
    question:
      "The v-t graph for a particle is as shown. The distance travelled in the first four second is",
    image1: <Image g={i1} />,

    optionA: "A)	12 m",
    optionB: "B)	16 m",
    optionC: "C)	20 m",
    optionD: "D)	24 m",
  },

  {
    id: "18.",
    question:
      "A body is projected with a velocity v and after some time it returns  to the point from which it was projected. The average velocity and average speed of the body for the total time of flight are",

    optionA: <MathEq math={String.raw`A) $\vec{v}/2$ and v/2`} />,
    optionB: "B)	0 and v/2",
    optionC: "C)	0 and 0",
    optionD: <MathEq math={String.raw`D) $\vec{v}/2$ and 0`} />,
  },

  {
    id: "19.",
    question: [
      <MathEq
        math={String.raw`A particle starts from rest at t=0 and undergoes an acceleration a in $ms^{-2}$ with time t in seconds which is as shown`}
      />,
      <Image g={i2} />,
      <MathEq
        math={String.raw`Which one of the following plot represents velocity V in $ms^{-1}$ versus time t in seconds`}
      />,
    ],

    optionA: <Image g={i3} t="A)" />,
    optionB: <Image g={i4} t="B)" />,
    optionC: <Image g={i5} t="C)" />,
    optionD: <Image g={i6} t="D)" />,
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`Consider a vector $\vec{F}=4\hat{i}-3\hat{j}$. Another vector that is perpendicular to $\vec{F}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $4\hat{i}+3\hat{j}$`} />,
    optionB: <MathEq math={String.raw`B) $6\hat{j}$`} />,
    optionC: <MathEq math={String.raw`C) $7\hat{j}$`} />,
    optionD: <MathEq math={String.raw`D) $3\hat{i}-4\hat{j}$`} />,
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`A particle is projected with a velocity $200ms^{-1}$ at an angle of $60^{\circ}$. At the highest point, it explodes into three particles of equal masses. One goes vertically upwards with a velocity $100 ms^{-1}$, the second particle goes vertically downwards. What is the velocity of third particle?`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $120 ms^{-1}$ making $60^{\circ}$ angle with horizontal`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $200 ms^{-1}$ making $60^{\circ}$ angle with horizontal`}
      />
    ),
    optionC: <MathEq math={String.raw`C) $300 ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $200 ms^{-1}$`} />,
  },
  {
    id: "22.",
    question:
      "The maximum height attained by a projectile is increased by 10% by increasing its speed of projection, without changing the angle of projection. The percentage increase in the horizontal range will be",

    optionA: "A)	5%",
    optionB: "B)	10%",
    optionC: "C)	15%",
    optionD: "D)	20%",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`For an object thrown at $45^{\circ}$ to horizontal, the maximum height (H) and horizontal range (R ) are related as`}
      />
    ),

    optionA: "A)	R=16H",
    optionB: "B)	R=8H",
    optionC: "C)	R=4H",
    optionD: "D)	R=2H",
  },
  {
    id: "24.",
    question:
      "A stone is just released from the window of a train moving along a horizontal straight track. The stone will hit the ground following",

    optionA: "A) Straight path",
    optionB: "B)	Circular path",
    optionC: "C)	Parabolic path",
    optionD: "D)	Hyperbolic path",
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`While waiting in a car at a stoplight, and 80 kg man and his car are suddenly accelerated to a speed of $5ms^{-1}$ as a result or rear end colllison. If the time of impact is 0.4 s, find the average force on the man`}
      />
    ),

    optionA: "A)	100 N",
    optionB: "B)	200 N",
    optionC: "C)	500 N",
    optionD: "D)	1000 N",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A machine gun fires a bullet of mass 40 g with a velocity $1200ms^{-1}$. The man holding it can exert a maximum force of 144 N on the gun. How many bullets can be fired per second at the most?`}
      />
    ),

    optionA: "A)	Only one",
    optionB: "B)	Three ",
    optionC: "C)	Can fire any number of bullets",
    optionD: "D)	144 x 48",
  },
  {
    id: "27.",
    question:
      "A ball of mass 0.5 kg moving with a velocity of 2 m/sec strikes a wall normally and bounces back with the same speed. If the time of contact between the ball and the wall is one millisecond, the average force exerted by the wall on the ball is",

    optionA: "A)	2000 N",
    optionB: "B)	1000 N",
    optionC: "C)	5000 N",
    optionD: "D)	125 N",
  },
  {
    id: "28.",
    question: "Impulse is",

    optionA: "A)	A scalar",
    optionB: "B)	Equal to change in the momentum of a body",
    optionC: "C)	Equal to rate of change of momentum of a body",
    optionD: "D)	A force",
  },
  {
    id: "29.",
    question:
      "If two forces of 5 N each are acting along X and Y axes, then the magnitude and direction of resultant is",

    optionA: <MathEq math={String.raw`A) $5\sqrt{2}$, $\pi/3$`} />,
    optionB: <MathEq math={String.raw`B) $5\sqrt{2}$, $\pi/4$`} />,
    optionC: <MathEq math={String.raw`C) $-5\sqrt{2}$, $\pi/3$`} />,
    optionD: <MathEq math={String.raw`D) $-5\sqrt{2}$, $\pi/4$`} />,
  },
  {
    id: "30.",
    question:
      "Ten one –rupee coins are put on top of each other on a table. Each coin has a mass  m. Which of the following statements is not true",

    optionA: (
      <MathEq
        math={String.raw`A) The force on the $6^{th}$ (counted from the bottom) due to all the coins on its top is equal to 4 mg (downwards)`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) The force on the $6^{th}$ coin due to $7^{th}$ coin is 4mg (downwards)`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) The reaction on the $6^{th}$ coin due to $7^{th}$ coin is 4mg (upwards)`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) The total force on the $10^{th}$ coin is 9 mg (downwards)`}
      />
    ),
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
