import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i6 from "./I6.bmp";
import i7 from "./I7.bmp";

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
  { sNO: "22", userID: "abhinay", passw: "1022" }, //22
];

export const questionsAll = [
  {
    id: "1.",
    question: "Which of the following is an empty set",

    optionA: <MathEq math={String.raw`A) {$\phi$}`} />,
    optionB: "B) {0}",
    optionC: <MathEq math={String.raw`C) {n $\epsilon$ N and n<1 }`} />,
    optionD: "D) The set of all even prime numbers",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Let A = {x: x $\epsilon$ R; x$\geq$3}, B = {x: x $\epsilon$ R; x$\leq$5} then $A \cap B$=_____`}
      />
    ),

    optionA: `A) (3,5) `,
    optionB: `B) [3,5] `,
    optionC: `C) B `,
    optionD: `D) (0, 5] `,
  },

  {
    id: "3.",

    question: "If A = {1,2,2,1,3,4,3,4} then n(A)=",

    optionA: "A) 0",
    optionB: "B) 4",
    optionC: "C) 8",
    optionD: "D) 20",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`The solution set of the equation in $x^{2}+x-2=0$ in roster form is`}
      />
    ),

    optionA: "A) {1, -2}",
    optionB: "B) {1, 2}",
    optionC: "C) {-1, 2}",
    optionD: (
      <MathEq math={String.raw`D) {x: x $\epsilon$ R, $1\leq x \leq-2$}`} />
    ),
  },

  {
    id: "5.",
    question: "If A= {1,2,3}, B={2,2,1,3,3} then",
    optionA: "A) A=B",
    optionB: <MathEq math={String.raw`B) $A \: \neq \: B$`} />,
    optionC: "C) Can't say",
    optionD: "D) A, B are not sets",
  },

  {
    id: "6.",
    question: "If U = {a,b,c,d,e,f,g,h} and A={a,b,c} then complement of A is",

    optionA: "A) {d,e,f}",
    optionB: "B) {d,e,f,g,h}",
    optionC: "C) {a,b,c}",
    optionD: "D) {d,e,g,h}",
  },

  {
    id: "7.",
    question: "Which of the following not a well defined collection of objects",

    optionA: "A) The set of Natural Numbers",
    optionB: "B) Rivers of India",
    optionC: "C) Various kinds of triangles",
    optionD: "D) Five most renowned mathematicians of the world",
  },

  {
    id: "8.",
    question:
      'Which of the following is the roster form of letters of word "SCHOOL"',

    optionA: "A) {S,H,O,L}",
    optionB: "B) {S,C,H,O,L}",
    optionC: "C) {S,C,O,L}",
    optionD: "D) {H,O,O,L}",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Write the solution set of the equation $x^{2}+x-6=0$ in roster form`}
      />
    ),

    optionA: "A) {2, -3}",
    optionB: "B) {-1, -2}",
    optionC: "C) {1, 2}",
    optionD: "D) {-1, 2}",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`Write the set {x:x is a positive integer and $x^{2}<40$} in the roster form`}
      />
    ),

    optionA: "A) {1,2,3,4,5,6}",
    optionB: "B) {1,2,3,4,5,6,7}",
    optionC: "C) {2,3,4,5,6,7}",
    optionD: "D) {0,1,2,3,5,6}",
  },

  {
    id: "11.",
    question: "____ set is subset of every set",

    optionA: "A) U",
    optionB: <MathEq math={String.raw`B) $\phi$`} />,
    optionC: "C) finite",
    optionD: "D) infinite set",
  },

  {
    id: "12.",
    question: "Which of the following is subset of A={1,3,5,7,9}",

    optionA: "A) B={1,3}",
    optionB: "B) C={1,3,5,6}",
    optionC: "C) D={1,2,3,5,7}",
    optionD: "D) E={1,2,3}",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`X={Ram, Geeta, Akbar}, Y={Geeta, David, Ashok} then $X \cup Y$`}
      />
    ),
    optionA: "A) {Ram, Geeta, Akbar, David, Akbar}",
    optionB: "B) {Geeta}",
    optionC: "C) {Ram, Akbar}",
    optionD: "D) {David}",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`A={1,2,3......}, B={2,3,5,7} $\Rightarrow$ then $A \cup B$`}
      />
    ),

    optionA: "A) A",
    optionB: "B) B",
    optionC: "C) null set",
    optionD: "D) U",
  },

  {
    id: "15.",
    question: "Let A= {a,e,i,o,u}, B={a,i,k,u} then A-B",

    optionA: "A) {a,e}",
    optionB: "B) {e,i}",
    optionC: "C) {e,o}",
    optionD: "D) {e,i,o}",
  },

  {
    id: "16.",
    question:
      "If a particle moves from point P (2,3,5) to point Q (3,4,5). Its displacement vector be",

    optionA: <MathEq math={String.raw`A) $\hat{i}+\hat{j}+10\hat{k}$`} />,
    optionB: <MathEq math={String.raw`B) $\hat{i}+\hat{j}+5\hat{k}$`} />,
    optionC: <MathEq math={String.raw`C) $\hat{i}+\hat{j}$`} />,
    optionD: <MathEq math={String.raw`D) $2\hat{i}+4\hat{j}+6\hat{k}$`} />,
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`A force of 5 N acts on a particle along a direction making an angle of $60^{circ}$ with vertical. Its vertical component be`}
      />
    ),

    optionA: "A) 10 N",
    optionB: "B) 3 N",
    optionC: "C) 4 N",
    optionD: "D) 2.5 N",
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`The velocity of a body moving with a uniform acceleration of $2 m/sec^{2}$ is 10m/sec . Its velocity after an interval of 4 sec is`}
      />
    ),
    optionA: "A)	12 m / sec",
    optionB: "B)	14 m / sec",
    optionC: "C)	16 m / sec",
    optionD: "D)	18 m / sec",
  },

  {
    id: "19.",
    question:
      "A particle starting from rest travels a distance x in first 2 seconds and a distance y in next two seconds, then",

    optionA: "A)	y = x",
    optionB: "B)	y = 2x",
    optionC: "C)	y = 3x",
    optionD: "D)	y = 4x",
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`The initial velocity of a body moving along a straight line is 7 m / s . It has a uniform acceleration of $4 m / s^{2}$ . The distance covered by the body
    in the 5th second of its motion is`}
      />
    ),

    optionA: "A)	25 m",
    optionB: "B)	35 m",
    optionC: "C)	50 m",
    optionD: "D)	85 m",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`A body of mass m is moving in a circle of radius r with a constant speed v . The force on the body is $\frac{mv^{2}}{r}$ and is directed towards the centre. What is the work done by this force in moving the body over half the circumference of the circle`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{mv^{2}}{r} \times \pi r$`} />,
    optionB: "B) Zero",
    optionC: <MathEq math={String.raw`C) $\frac{mv^{2}}{r^{2}} $`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\pi r^{2}}{mv^{2}}$`} />,
  },
  {
    id: "22.",
    question:
      "If a particle moves in a circle describing equal angles in equal times, its velocity vector",

    optionA: "A)	Remains constant",
    optionB: "B)	Changes in magnitude",
    optionC: "C)	Changes in direction",
    optionD: "D)	Changes both in magnitude and direction",
  },
  {
    id: "23.",
    question:
      "A stone of mass m is tied to a string of length l and rotated in a circle with a constant speed v . If the string is released, the stone flies",

    optionA: "A)	Radially outward",
    optionB: "B)	Radially inward",
    optionC: "C)	Tangentially outward",
    optionD: (
      <MathEq math={String.raw`D) With an acceleration $\frac{mv^{2}}{l}$`} />
    ),
  },
  {
    id: "24.",
    question:
      "A body is moving in a circular path with a constant speed. It has",

    optionA: "A)	A constant velocity",
    optionB: "B)	A constant acceleration",
    optionC: "C)	An acceleration of constant magnitude",
    optionD: "D)	An acceleration which varies with time",
  },
  {
    id: "25.",
    question:
      "In an elevator moving vertically up with an acceleration g, the force exerted on the floor by a passenger of mass M is",

    optionA: "A)	Mg",
    optionB: "B)	1/2 Mg",
    optionC: "C)	Zero",
    optionD: "D)	2 Mg",
  },
  {
    id: "26.",
    question: [
      "A mass 1 kg is suspended by a thread. It is",
      <MathEq
        math={String.raw`lifted up with an acceleration $4.9m / s^{2}$`}
      />,
      <MathEq math={String.raw`lowered with an acceleration $4.9m / s^{2}$`} />,
      <div>The ratio of the tensions is</div>,
    ],

    optionA: "A)	3:1",
    optionB: "B)	1:3",
    optionC: "C)	1:2",
    optionD: "D)	2:1",
  },
  {
    id: "27.",
    question:
      "A body moves a distance of 10 m along a straight line under the action of a force of 5 N. If the work done is 25 joules, the angle which the force makes with the direction of motion of the body is",

    optionA: <MathEq math={String.raw`A) $0^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $30^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $60^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $90^{\circ}$`} />,
  },
  {
    id: "28.",
    question:
      "You lift a heavy book from the floor of the room and keep it in the book-shelf having a height 2 m. In this process you take 5 seconds. The work done by you will depend upon",

    optionA: "A) Mass of the book and time taken",
    optionB: "B) Weight of the book and height of the book-shelf",
    optionC: "C) Height of the book-shelf and time taken",
    optionD: "D) Mass of the book, height of the book-shelf and time taken",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`A force $\vec{F}=5\hat{i}+6\hat{j}-4\hat{k}$ acting on a body, produces a displacement of $\vec{s}=6\vec{i}+5\vec{k}$ Work done by the force is`}
      />
    ),

    optionA: "A) 18 units",
    optionB: "B) 15 units",
    optionC: "C) 12 units",
    optionD: "D) 10 units",
  },
  {
    id: "30.",
    question:
      "A force of 5 N acts on a 15 kg body initially at rest. The work done by the force during the first second of motion of the body is",

    optionA: "A) 5 J",
    optionB: "B) 5/6 J",
    optionC: "C) 6 J",
    optionD: "D) 75 J",
  },

  {
    id: "31.",
    question:
      "Which of the following is a suitableexample for illustrating the law ofconservation of mass ? (Atomic mass ofO = 16; H = 1)",

    optionA: "A) 18 g of water freezes at 4deg C to give same mass of ice",
    optionB:
      "B) 18g of water in liquid state isobtained by heating 18g of ice.",
    optionC:
      "C) 18g of water is completely convertedinto vapour state on heating.",
    optionD:
      "D) d) 18 g of water is formed by the combination of 16 g oxygen with 2 g of hydrogen",
  },

  {
    id: "32.",
    question: "Which of the following equation is incorrect?",

    optionA: (
      <MathEq
        math={String.raw`A) $Number of atoms = \frac{mass of substance x number of atoms in the molecule x N_{A}}{mass of substance}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $Number of moles=\frac{No.of particles}{Avogadro number}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\frac{mass of an electron}{Mass of one atom of hydrogen}=1837$`}
      />
    ),
    optionD: "D) Molar mass = mass x number of moles",
  },

  {
    id: "33.",
    question: "Coal is mainly carbon, also having some other elements like",

    optionA: "A) oxygen, hydrogen, nitrogen, and sulphur",
    optionB: "B) chlorine, nitrogen, sulphur and helium",
    optionC: "C) sulphur, phosphorus, iodine and oxygen",
    optionD: "D) bromine, nitrogen, phosphorus and hydrogen",
  },

  {
    id: "34.",
    question: "Which statements are true for cotton clothes?",

    optionA:
      "a) It absorbs water efficiently but does not burn at a moderate speed.",
    optionB:
      "b) It does not absorb water efficiently but burns at a moderate speed",
    optionC:
      "c) It does not absorb water efficiently and does not burn at a moderate speed",
    optionD: "d) It absorbs water efficiently and burns at a moderate speed",
  },

  {
    id: "35.",
    question: (
      <MathEq
        math={String.raw`‘M’ and ‘N’ are two elements which form $M_{2}N_{3}$ and $M_{3}N_{4}. If 0.2 mol of $M_{2}N_{3}$ weighs 32 g and 0.4 mol of $M_{3}N_{4}$ weighs 92.8 g, the atomic weights of M and N respectively are `}
      />
    ),

    optionA: "A) 16,56",
    optionB: "B) 16,16",
    optionC: "C) 56,16",
    optionD: "D) 56,56",
  },

  {
    id: "36.",
    question: [
      "180 g of water can be represented as",
      <div>i) 5 g mole of water</div>,
      <div>ii) 10 moles of water</div>,
      <MathEq math={String.raw`iii)	$6.023 x 10^{23}$ molecules of water`} />,
      <MathEq math={String.raw`iv)	$6.023 x 10^{24}$ molecules of water`} />,
    ],

    optionA: "A) i  and ii only	",
    optionB: "B) ii and iv only",
    optionC: "C) ii and iii only",
    optionD: "D) i, ii, iii and iv",
  },

  {
    id: "37.",
    question: [
      "Match the column I with column II and select the correct option for the given codes",
      <div>(At.masses: Al-26.98; S-32.06; Na- 22.99; Cu-63.546;)</div>,
      <Image g={i6} />,
      <Image g={i7} />,
    ],

    optionA: "A) m",
    optionB: "B) n",
    optionC: "C) o",
    optionD: "D) p",
  },

  {
    id: "38.",
    question:
      "Place a piece of burning charcoal on an iron plate and cover it with a jar. The charcoal stop burning because",

    optionA: "A) Its ignition temperature is lowered",
    optionB: "B) it becomes cold after sometime",
    optionC: "C) a spontaneous reaction occurs",
    optionD: "D) none of these",
  },

  {
    id: "39.",
    question: [
      "Two chemical species X and Y combine together to form a product P which contains both Xand  Y.",
      <MathEq math={String.raw`X + Y $\rightarrow$ P`} />,
      <div>
        X and Y cannot be broken down into simpler substances by simple chemical
        reactions. Which of the following concerning the species X, Y and P are
        correct?
      </div>,
      <div>(i) P is a compound</div>,
      <div>(ii) X and Y are compounds</div>,
      <div>(iii) X and Y are elements</div>,
      <div>(iv) P has a fixed composition</div>,
    ],

    optionA: "A)	(i), (ii) and (iii)",
    optionB: "B) (i), (ii) and (iv)",
    optionC: "C) (ii), (iii) and (iv)",
    optionD: "D) (i), (iii) and (iv)",
  },

  {
    id: "40.",
    question:
      "The greenish deposit on the surface of copper vessel is chemically a mixture of ",

    optionA: <MathEq math={String.raw`A) $Cu(OH)_{2} \:  and \: CuO$`} />,
    optionB: <MathEq math={String.raw`B) $CuO \: and \: CuCO_{3}$`} />,
    optionC: <MathEq math={String.raw`C) $Cu_{2}O \: and \: CuO$`} />,
    optionD: <MathEq math={String.raw`D) $Cu(OH)_{2} and CuCO_{3}$`} />,
  },

  {
    id: "41.",
    question: "The best conductor of electricity is",

    optionA: "a) Distilled water",
    optionB: "b) tap water",
    optionC: "c) rain water",
    optionD: "d) sea water",
  },

  {
    id: "42.",
    question: (
      <MathEq
        math={String.raw`\Randheer took 2-3 crystals of $KMnO_{4}$ and dissolved them in 50 mL of water. He took 10 mL of this solution (half test-tube)and added 40 mL of water (2 test-tubes). He took 10 mL of new solution and added 40 mL of more water. He kept on diluting (adding water) like this 5 to 6 times and labelled the solutions as I, II, III, IV, V, VI. Which of the following is correct on the basis of experiment?`}
      />
    ),

    optionA: "a) The colour of solution is green.",
    optionB:
      "b)	The order of darkness of purple coloured solutions is : I > II > III > IV > V > VI",
    optionC:
      "c)	The darkness of purple coloured solutions is I < II < III < IV < V < VI",
    optionD: (
      <MathEq
        math={String.raw`d)	One crystal of $KMnO_{4}$ has one tiny particle.`}
      />
    ),
  },

  {
    id: "43.",
    question: [
      <div>
        Assertion (A): solid carbon dioxide changes its state when exposed to
        air
      </div>,
      <MathEq math={String.raw`Reason (R): $CO_{2}$ undergoes sublimation`} />,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "44.",
    question: [
      "Which of the following are the characteristics of isobars of an element?",
      <div>(i) Isobars of an element have same number of neutrons</div>,
      <div>
        (ii) Isobars of an element have same number of protons and neutrons
      </div>,
      <div>(iii) Isobars of an element have similar physical properties</div>,
      <div>(iv) Isobars of an element have same mass number</div>,
    ],

    optionA: "A)	(i) and (iii)",
    optionB: "B) (ii) and (iv)",
    optionC: "C) (i), (iii) and (iv) ",
    optionD: "D) (ii), (iii) and (iv)",
  },

  {
    id: "45.",
    question: [
      "Arrange the following in increasing order of number of molecules",
      <MathEq math={String.raw`I)	0.5 mol of $H_{2}$`} />,
      <MathEq math={String.raw`II)	4.0 g of $H_{2}$`} />,
      <div>III)18 g of water</div>,
      <div>IV. 2.2 g of carbon dioxide</div>,
    ],

    optionA: "A) II > III > I > IV",
    optionB: "B) IV < I < III < II",
    optionC: "C) I < II < III < IV",
    optionD: "D)IV < III < I < II",
  },
];
