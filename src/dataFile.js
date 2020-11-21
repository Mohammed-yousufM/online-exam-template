import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.png";
// import i2 from "./I2.png";
// import i3 from "./I3.png";
// import i4 from "./I4.png";
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
      <MathEq math={String.raw`$\sec \left ( 2100^{\circ} \right )=$`} />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`$\cos ^{2}45^{\circ}+\cos ^{2}135^{\circ}+\cos ^{2}225^{\circ}+\cos ^{2}315^{\circ}=$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "3.",
    question: (
      <MathEq math={String.raw`$cosec\left ( 5\pi+\theta \right )=$`} />
    ),

    optionA: <MathEq math={String.raw`A) $-cosec\theta$`} />,
    optionB: <MathEq math={String.raw`B) $cosec\theta$`} />,
    optionC: <MathEq math={String.raw`C) $sec\theta$`} />,
    optionD: <MathEq math={String.raw`D) $-sec\theta$`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`$sec\theta - tan\theta \: = \frac{1}{2}$ then $sec\theta + tan\theta \: =$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`If A = $30^{\circ}$, then $cos^{2}A-sin^{2}A$ is`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: <MathEq math={String.raw`C) $\frac{1}{2}$`} />,
    optionD: "D) 0",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`$\frac{cos45^{\circ}}{sec30^{\circ}+cosec30^{\circ}}$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{\sqrt{3}}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{\sqrt{3}}{2\sqrt{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\sqrt{3}}{2\sqrt{6}}$`} />,
    optionD: (
      <MathEq math={String.raw`D) $\frac{\sqrt{3}}{2\sqrt{2}+2\sqrt{6}}$`} />
    ),
  },

  {
    id: "7.",
    question: (
      <MathEq math={String.raw`$\frac{tan26^{\circ}}{cot64^{\circ}}$`} />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "8.",
    question: <MathEq math={String.raw`$cosA = \frac{4}{5}$, then $tanA$=`} />,

    optionA: <MathEq math={String.raw`A) $\frac{3}{4}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{5}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{4}{3}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{5}{3}$`} />,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`The angle of elevation of a tower from a distance 50m from its foot is $30\deg$. The height of the tower is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $50\sqrt{3}$`} />,
    optionB: <MathEq math={String.raw`B) $25\sqrt{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{50}{\sqrt{3}}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{100}{\sqrt{3}}$`} />,
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`A ladder 15m long just reaches the top of a vertical wall. If the ladder makes an angle of $60^{\circ}$ with the wall, find the height of the wall.`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{15\sqrt{3}}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $15\sqrt{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{15}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\sqrt{3}}{2}$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`$\frac{1-cos^{2}60^{\circ}}{1+cos^{2}60^{\circ}}$=`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{3}{4}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{5}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{3}{5}$`} />,
    optionD: "D) 0",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`$cos 64^{\circ}cos26^{\circ}-sin64^{\circ}sin26^{\circ}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`$cosec^{2}60^{\circ}-cot^{2}60^{\circ}$=`} />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$Tan0^{\circ}.Tan1^{\circ}.Tan2^{\circ}....Tan50^{\circ}$=`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`$sin^{2}50^{\circ}+cos^{2}50^{\circ}+sec^{2}24^{\circ}-tan^{2}24^{\circ}$=`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 0",
    optionD: "D) -1",
  },

  {
    id: "16.",
    question:
      "A particle moves for 20 seconds with velocity 3 m/s and then velocity 4 m/s for another 20 seconds and finally moves with velocity 5 m/s for next 20 seconds. What is the average velocity of the particle",

    optionA: "A) 3 m/s",
    optionB: "B) 4 m/s",
    optionC: "C) 5 m/s",
    optionD: "D) Zero",
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`If body having initial velocity zero is moving with uniform acceleration $8 m/sec^{2}$ the distance travelled by it in fifth second will be`}
      />
    ),

    optionA: "A) 36 metres",
    optionB: "B) 40 metres",
    optionC: "C) 100 metres",
    optionD: "D) Zero",
  },

  {
    id: "18.",
    question:
      "A boggy of uniformly moving train is suddenly detached from train and stops after covering some distance. The distance covered by the boggy and distance covered by the train in the same time has relation ",

    optionA: "A) Both will be equal",
    optionB: "B)	First will be half of second",
    optionC: "C)	First will be 1/4 of second",
    optionD: "D) No definite ratio",
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`What displacement must be added to the displacement $25\hat{i}-6\hat{j}$m to give a displacement of 7.0 m pointing in the x- direction`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $18\hat{i}-6\hat{j}$`} />,
    optionB: <MathEq math={String.raw`B) $32\hat{i}-13\hat{j}$`} />,
    optionC: <MathEq math={String.raw`C) $-18\hat{i}+6\hat{j}$`} />,
    optionD: <MathEq math={String.raw`D) $-25\hat{i}+13\hat{j}$`} />,
  },

  {
    id: "20.",
    question:
      "A body moves due East with velocity 20 km/hour and then due North with velocity 15 km/hour. The resultant velocity",

    optionA: "A)	5 km/hour",
    optionB: "B)	15 km/hour",
    optionC: "C)	20 km/hour",
    optionD: "D)	25 km/hour ",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`The magnitudes of vectors $\vec{A}, \vec{B}$ and $\vec{C}$ and are 3, 4 and 5 units respectively. If $\vec{A}+\vec{B}=\vec{C}$, the angle between $\vec{A}$ and $\vec{B}$ is `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{\pi}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $cos^{-1}\left( 0.6 \right)$`} />,
    optionC: (
      <MathEq math={String.raw`C) $tan^{-1} \left( \frac{7}{5} \right)$`} />
    ),
    optionD: <MathEq math={String.raw`D) $\frac{\pi}{4}$`} />,
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`The range of a projectile for a given initial velocity is maximum when the angle of projection is $45^{\circ}$. The range will be minimum, if the angle of projection is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $90^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $180^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $60^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $75^{\circ}$`} />,
  },
  {
    id: "23.",
    question:
      "The angle of projection at which the horizontal range and maximum height of projectile are equal is",

    optionA: <MathEq math={String.raw`A) $45^{\circ}$`} />,
    optionB: (
      <MathEq math={String.raw`B) $\theta= tan^{-1} \left(0.25 \right)$`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $\theta=tan^{-1}4$ or $\theta=76^{\circ}$`} />
    ),
    optionD: <MathEq math={String.raw`D) $60^{\circ}$`} />,
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`The range of a particle when launched at an angle of $15^{\circ}$ with the horizontal is 1.5 km. What is the range of the projectile when launched at an angle of $45^{\circ}$ to the horizontal`}
      />
    ),

    optionA: "A)	1.5 km",
    optionB: "B)	3.0 km",
    optionC: "C)	6.0 km",
    optionD: "D)	0.75 km",
  },
  {
    id: "25.",
    question:
      "If a bullet of mass 5 gm moving with velocity 100 m /sec, penetrates the wooden block upto 6 cm. Then the average force imposed by the bullet on the block is ",

    optionA: "A)	8300 N",
    optionB: "B)	417 N",
    optionC: "C)	830 N",
    optionD: "D)	Zero",
  },
  {
    id: "26.",
    question:
      "A student attempts to pull himself up by tugging on his hair. He will not succeed",

    optionA: "A)	As the force exerted is small",
    optionB: "B)	The frictional force while gripping, is small.",
    optionC: "C)	Newton's law of inertia is not applicable to living beings.",
    optionD: "D)	As the force applied is internal to the system.",
  },
  {
    id: "27.",
    question:
      "A man is standing at the centre of frictionless pond of ice. How can he get himself to the shore",

    optionA: "A)	By throwing his shirt in vertically upward direction",
    optionB: "B)	By spitting horizontally",
    optionC: "C) He will wait for the ice to melt in pond",
    optionD: "D)	Unable to get at the shore",
  },
  {
    id: "28.",
    question:
      "If a force of 250 N act on body, the momentum acquired is 125 kg-m/s. What is the period for which force acts on the body",

    optionA: "A)	0.5 sec",
    optionB: "B)	0.2 sec",
    optionC: "C)	0.4 sec",
    optionD: "D)	0.25 sec",
  },
  {
    id: "29.",
    question:
      "	A player caught a cricket ball of mass 150 gm moving at a rate of 20 m/s. If the catching process be completed in 0.1 s, then the force of the blow exerted by the ball on the hands of the player is",

    optionA: "A)	0.3 N",
    optionB: "B)	30 N",
    optionC: "C)	300 N",
    optionD: "D)	3000 N",
  },
  {
    id: "30.",
    question:
      "A bullet of mass 0.1 kg is fired with a speed of 100 m/sec, the mass of gun is 50 kg. The velocity of recoil is",

    optionA: "a)	0.2 m/sec",
    optionB: "b)	0.1 m/sec",
    optionC: "c)	0.5 m/sec",
    optionD: "d)	0.05 m/sec",
  },

  {
    id: "31.",
    question: [
      "Consider the following statements:",
      <br />,
      "i)	Molecular formula of CH3OH is32 u",
      <br />,
      "ii)	In NH3, the ratio ofN and H by mass is 1 : 3",
      <br />,
      "iii)	The formula weight of CaCl2 is 111 u.",
      <br />,
      "iv)	Isotopes have the same atomic mass",
      <br />,
      "Which of the above statements are correct?",
    ],

    optionA: "A) i) & iii)",
    optionB: "B) i), ii) & iv)",
    optionC: "C) i), ii), and iii)",
    optionD: "D) i), iii) and iv)",
  },

  {
    id: "32.",
    question: [
      "A teacher instructed four students A, B, C and D to prepare a suspension of chalk in water. The students prepared suspension in the following manner.",
      <br />,
      "-Student ‘A’ placed a piece of chalk in water",
      <br />,
      "-Student ‘B’ places powdered chalk in water",
      <br />,
      "-Student ‘C’ places powdered chalk in water and then shakes the mixture vigorously",
      <br />,
      "-Student ‘D’ places powdered chalk in dil. HCl",
      <br />,
      "Which of the students has correct way of preparation of suspension?",
    ],

    optionA: "A)	Student A",
    optionB: "B) student B",
    optionC: "C) student C",
    optionD: "D) student D",
  },

  {
    id: "33.",
    question: "Which of the following is correct order of density?",

    optionA:
      "A)	Air < exhaust from chimneys < honey  < water < chalk < cotton < iron",
    optionB:
      "B)	Air < exhaust from chimneys <cotton < chalk <water < honey <  iron",
    optionC:
      "C)	Air < exhaust from chimneys < honey < water < chalk < iron < cotton",
    optionD:
      "D)	Air < exhaust from chimneys <cotton<water <honey < chalk  < iron",
  },

  {
    id: "34.",
    question: [
      "Curd cannot be stored in",
      <br />,
      "i)	Brass vessel",
      <br />,
      "ii) copper vessel",
      <br />,
      "iii) steel",
      <br />,
      "iv) bronze",
    ],

    optionA: "A)	i), ii), and iii)",
    optionB: "B) ii), iii),and iv)",
    optionC: "C) i), ii),and iv)",
    optionD: "D) i), iii) and iv)",
  },

  {
    id: "35.",
    question: [
      "Which of the following are the characteristics of isobars?",
      <br />,
      "i)	Isobars have same number of neutrons",
      <br />,
      "ii)	Isobars have same number of protons and neutrons",
      <br />,
      "iii)	Isobars have similar physical properties",
      <br />,
      "iv)	Isobars have same mass number",
    ],

    optionA: "A)	i) and iii) ",
    optionB: "B) ii) and iv)",
    optionC: "C) i), iii) and iv)",
    optionD: "D) iii) and iv)",
  },

  {
    id: "36.",
    question: "The dye from blue fountain pen ink can be separated by",

    optionA: "A)	evaporation",
    optionB: "B) distillation",
    optionC: "C) chromatography",
    optionD: "D) separating funnel",
  },

  {
    id: "37.",
    question: [
      "Burning  magnesium ribbon is brought in the gas jar of carbon dioxide. Which of the following is correct?",
      <br />,
      "i)	It keeps on burning",
      <br />,
      "ii)	It gets extinguished",
      <br />,
      "iii)	Although CO2 is non-supporter of combustion, but burning magnesium breaks CO2 into carbon and oxygen and oxygen helps in burning",
      <br />,
      "iv)	Carbon dioxide is supporter of combustion",
    ],

    optionA: "A)	i) and iv)",
    optionB: "B) i) and iii)",
    optionC: "C) i) and ii)",
    optionD: "D) iii) and iv)",
  },

  {
    id: "38.",
    question: (
      <MathEq
        math={String.raw`Four test tubes were taken and marked A, B, C and D respectively. 2 mL of solution of $Al_{2} \left( SO_{4} \right)_{3}$ in water was filled in each of the four test tubes. Clean piece of metal Zn was placed in test-tube A, clean iron nail was put in test-tube B, clean copper wire was placed in test-tube C and a clean aluminium wire was placed in test-tube D. It was observed that no change occurred in any of the test-tubes. The correct inference drawn is:`}
      />
    ),

    optionA: "A)	Zinc is more active than Al",
    optionB: "B) zinc is more active than Cu",
    optionC: "C)	Copper is more active than Al",
    optionD: "D) zinc, iron & copper are less active than Al",
  },

  {
    id: "39.",
    question: [
      "Arrange the following in decreasing order of mass",
      <br />,
      <MathEq math={String.raw`i)	$10^{23}$ molecules of $H_{2}$`} />,
      <br />,
      <MathEq math={String.raw`ii) 0.1 mole of $H_{2}O$`} />,
      <br />,
      "iii) 0.01 mole of atoms of nitrogen",
      <br />,
      <MathEq math={String.raw`iv) 2.24 L of $O_{2}$ at STP`} />,
    ],

    optionA: "A)	iv, iii, i, ii",
    optionB: "B) iv, i, ii, iii",
    optionC: "C) iv, ii, i, iii",
    optionD: "D) iv, i, iii, ii",
  },

  {
    id: "40.",
    question:
      "A student accidentally spilled a few drops of a solution over the shirt. The area became blue-black because the solution was",

    optionA: "A)	An acid which burnt the patch of cloth",
    optionB: "B)	Iodine which reacted with starched part of shirt",
    optionC: "C)	Potassium dichromate which oxidized the piece of shirt",
    optionD: "D)	HCl which reacted with metanil pigment of the shirt",
  },

  {
    id: "41.",
    question: [
      "Consider the following statements:",
      <br />,
      "i)	e/m ratio of particles of  the canal rays remains constant",
      <br />,
      "ii)	 the energy of orbit closest to nucleus is lowest",
      <br />,
      "iii)	Cl- has 18 electrons and 18 protons",
      <br />,
      <MathEq
        math={String.raw`iv)	The maximum number of electrons  in an energy level is equal to $2n^{2}$.`}
      />,
      <br />,
      "Which of the above statement(s) is/are correct?",
    ],

    optionA: "A)	Only ii)",
    optionB: "B) i), iii) and iv)",
    optionC: "C) ii) and iv)",
    optionD: "D) ii), iii) and iv)",
  },

  {
    id: "42.",
    question: (
      <MathEq
        math={String.raw`A metal sulphate has the formula $MSO_{4}$. The  phosphate  of  the  same  metal  will have the formula`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $M_{3} \left(PO_{4}\right)_{3}$`} />,
    optionB: <MathEq math={String.raw`B) $M_{2}PO_{4}$`} />,
    optionC: <MathEq math={String.raw`C) $M \left(PO_{4}\right)_{3}$`} />,
    optionD: <MathEq math={String.raw`D) $M_{3} \left(PO_{4}\right)_{2}$`} />,
  },

  {
    id: "43.",
    question:
      "An element ‘X’ has the same number of electrons in the first and the fourth shell as well  as  in  the  second  and  the  third shell. What is the formula and nature of its oxide?",

    optionA: "A)	XO, Neutral	",
    optionB: <MathEq math={String.raw`B) $XO_{2}$, Acidic`} />,
    optionC: <MathEq math={String.raw`C) $XO_{2}$, Amphoteric`} />,
    optionD: "D) XO, Basic",
  },

  {
    id: "44.",
    question:
      "How much percent of iron ore is found in magnetite (At. Mass of iron = 55.84)?",

    optionA: "A) 70%",
    optionB: "B) 65%",
    optionC: "C) 60%",
    optionD: "D) 72%",
  },

  {
    id: "45.",
    question: [
      <MathEq
        math={String.raw`Assertion (A): both 44 g of $CO_{2}$ and 16 g of $CH_{4}$ have same number of carbon atoms.`}
      />,
      <br />,
      <MathEq
        math={String.raw`Reason (R): both contain 1 g atom of carbon which contains $6.023 x 10^{23}$ carbon atoms.`}
      />,
    ],

    optionA:
      "A)	Assertion is correct, reason is correct; reason is a correct explanation for assertion",
    optionB:
      "B)	Assertion is correct, reason is correct; reason is not a correct explanation for assertion ",
    optionC: "C)	Both Assertion and reason are correct",
    optionD: "D)	Both Assertion and reason are incorrect",
  },
];
