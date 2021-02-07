import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.bmp";
import i2 from "./I2.bmp";
import i3 from "./I3.bmp";
import i4 from "./I4.bmp";
import i5 from "./I5.bmp";
import i6 from "./I6.bmp";

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
  { sNO: "22", userID: "abhinay", passw: "1022" },
  { sNO: "23", userID: "rizwana", passw: "1023" }, //23
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`The degree of the polynomial $\frac{2}{3} x ^{4} -  \frac{1}{5} x + \frac{7}{8} x ^{7} +3$ is`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 4",
    optionC: "C) 7",
    optionD: "D) 12",
  },

  {
    id: "2.",
    question: "The zeros of the polynomial 2x-3 is",

    optionA: "A) 2/3",
    optionB: "B) 3/2",
    optionC: "C) 0",
    optionD: "D) 3",
  },

  {
    id: "3.",

    question: (
      <MathEq
        math={String.raw`If Degree of $9x^{5}y^{2}z^{r}$ is 15. Then r = _____`}
      />
    ),

    optionA: "A) 8",
    optionB: "B) 15",
    optionC: "C) 7",
    optionD: "D) 6",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Degree of the polynomial $\frac{x^{3}+x^{4}-x^{6}}{x^{2}}$ is _____`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`The addition of ($3x^{2}-6x=xy$), ($2x^{3}-5x^{2}-3y$) and ($7x+8y$) is `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $2x^{3}-8x^{2}+x+xy+5y$`} />,
    optionB: <MathEq math={String.raw`B) $2x^{3}-2x^{2}+x+xy+5y$`} />,
    optionC: <MathEq math={String.raw`C) $2x^{3}-2x^{2}+x+xy+5y$`} />,
    optionD: <MathEq math={String.raw`D) $2x^{3}-2x^{2}-x+xy+5y$`} />,
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`The product of $5x^{4}y^{2}$ and $-4xy$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $12x^{3}y$`} />,
    optionB: <MathEq math={String.raw`B) $12x^{4}y$`} />,
    optionC: <MathEq math={String.raw`C) $-20x^{5}y^{3}$`} />,
    optionD: <MathEq math={String.raw`D) $-12x^{3}y$`} />,
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Divide $4x^{3}-10x^{2}+5x$ by 2x, then the resultant value is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $2x^{2}-5x+\frac{5}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $4x^{2}+5x+\frac{5}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $4x^{2}-5x-\frac{5}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $4x^{2}+5x-\frac{5}{2}$`} />,
  },

  {
    id: "8.",
    question: "(4x-9y)(3x+11y)=",

    optionA: <MathEq math={String.raw`A) $12x^{2}+17xy-99y^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $12x^{2}-17xy+99y^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $12x^{2}-17xy-99y^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $12x^{2}+17xy+99y^{2}$`} />,
  },

  {
    id: "9.",
    question: "The factorisation of 2a(3x+5y)-5b(3x+5y) is",

    optionA: "A) (2a+5b)(3x-5y)",
    optionB: "B) (2a-5b)(3x+5y)",
    optionC: "C) (2a-5b)(3x-5y)",
    optionD: "D) (2a+5b)(3x-5y)", //clone
  },

  {
    id: "10.",
    question: "The factorization of 2r(y-x)+3(x-y) is",

    optionA: "A) (x-y)(2r+3)",
    optionB: "B) (x-y)(3-2r)",
    optionC: "C) (x-y)(2r-3)",
    optionD: "D) (x-y)(r-3)",
  },

  {
    id: "11.",
    question: <MathEq math={String.raw`The factors of $m^{2}-5m+9m-45$ are`} />,

    optionA: "A) (m+5)(m-9)",
    optionB: "B) (m-5)(m+9)",
    optionC: "C) (m-5)(m-9)",
    optionD: "D) (m+5)(m+9)",
  },

  {
    id: "12.",
    question: "The factors of 2a-8ab-1+4b",

    optionA: "A) (2a-1)(1-4b)",
    optionB: "B) (2a-1)(1+4b)",
    optionC: "C) (2a+1)(1+4b)",
    optionD: "D) (a-1)(1-4b)",
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`The factorisation of $x^{2}-6x+8$ is`} />
    ),

    optionA: "A) (x+4)(x+2)",
    optionB: "B) (x-4)(x-2)",
    optionC: "C) (x+4)(x-2)",
    optionD: "D) (x-4)(x+2)",
  },

  {
    id: "14.",
    question: (
      <MathEq math={String.raw`The factorisation of $x^{2}+x-42$ is`} />
    ),

    optionA: "A) (x-7)(x-6)",
    optionB: "B) (x+7)(x-6)",
    optionC: "C) (x-7)(x+6)",
    optionD: "D) (x+7)(x+6)",
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`$1+m^{3}=$`} />,

    optionA: <MathEq math={String.raw`A) (1+m)($1+m+m^{2}$)`} />,
    optionB: <MathEq math={String.raw`B) (1-m)($1-m+m^{2}$)`} />,
    optionC: <MathEq math={String.raw`C) (1+m)($1+m-m^{2}$)`} />,
    optionD: <MathEq math={String.raw`D) (1+m)($1-m+m^{2}$)`} />,
  },

  {
    id: "16.",
    question:
      "A vehicle of 100 kg is moving with a velocity of 5 m/sec. To stop it in 1/10 sec , the required force in opposite direction is",

    optionA: "A) 5000 N",
    optionB: "B) 500 N",
    optionC: "C) 50 N",
    optionD: "D) 1000 N",
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`A boy having a mass equal to 40 kilograms is standing in an elevator. The force felt by the feet of the boy will be greatest when the elevator     g=($9.8 metres/sec^{2}$)`}
      />
    ),

    optionA: "A) Stands still",
    optionB: "B) Moves downward at a constant velocity of 4 metres/sec",
    optionC: (
      <MathEq
        math={String.raw`C) Accelerates downward with an acceleration equal to $4 metres/sec^{2}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) Accelerates upward with an acceleration equal to $4 metres/sec^{2}$}`}
      />
    ),
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`A rocket has an initial mass of $20\times10^{3}$ kg . If it is to blast off with an initial acceleration of $4ms^{-2}$ , the initial thrust needed is ($g\cong \: 10ms^{-2}$) `}
      />
    ),
    optionA: <MathEq math={String.raw`A) $6\times10^{4}$ N`} />,
    optionB: <MathEq math={String.raw`B) $28\times10^{4}$ N`} />,
    optionC: <MathEq math={String.raw`C) $20\times10^{4}$ N`} />,
    optionD: <MathEq math={String.raw`D) $12\times10^{4}$ N`} />,
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`A 500 kg horse pulls a cart of mass 1500 kg along a level road with an acceleration of $1ms^{-2}$ . If the coefficient of sliding friction is 0.2, then the force exerted by the horse in forward direction is	`}
      />
    ),
    optionA: "A)	3000 N",
    optionB: "B)	4000 N",
    optionC: "C)	5000 N",
    optionD: "D)	6000 N",
  },

  {
    id: "20.",
    question:
      "The maximum speed of a car on a road turn of radius 30m; if the coefficient of friction between the tyres and the road is 0.4; will be	",

    optionA: "A)	9.84 m/s ",
    optionB: "B)	10.84 m/s",
    optionC: "C)	7.84 m/s",
    optionD: "D)	5.84 m/s",
  },

  {
    id: "21.",
    question:
      "A block of mass 50 kg slides over a horizontal distance of 1 m.  If the coefficient of friction between their surfaces is 0.2, then work done against friction is",

    optionA: "A) 98 J ",
    optionB: "B) 72 J",
    optionC: "C) 56 J",
    optionD: "D) 34 J",
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`On the horizontal surface of a truck ($\mu  = 0.6$), a block of mass 1 kg is placed.  If the truck is accelerating at the rate of $5m/sec^{2}$ then frictional force on the block will be `}
      />
    ),

    optionA: "A)	5 N",
    optionB: "B)	6 N",
    optionC: "C)	5.88 N",
    optionD: "D)	8 N",
  },
  {
    id: "23.",
    question:
      "From a stationary tank of mass 125000 pound a small shell of mass 25 pound is fired with a muzzle velocity of 1000 ft/sec. The tank recoils with a velocity of	",

    optionA: "A)	0.1 ft/sec",
    optionB: "B)	0.2 ft/sec",
    optionC: "C)	0.4 ft/sec",
    optionD: "D)  0.8 ft/sec",
  },
  {
    id: "24.",
    question:
      "A bomb of 12 kg explodes into two pieces of masses 4 kg  and 8 kg. The velocity of 8kg mass is 6 m/sec. The kinetic energy of the other mass is",

    optionA: "A) 48 J ",
    optionB: "B) 32 J",
    optionC: "C) 24 J",
    optionD: "D) 288 J",
  },
  {
    id: "25.",
    question:
      "The kinetic energy of a body of mass 3 kg and momentum 2 Ns is  ",

    optionA: "A) 1 J ",
    optionB: "B) 2/3 J",
    optionC: "C) 3/2 J",
    optionD: "D) 4 J",
  },
  {
    id: "26.",
    question:
      "If the distance between two masses is doubled, the gravitational attraction between them ",

    optionA: "A)	Is doubled",
    optionB: "B)	Becomes four times",
    optionC: "C)	Is reduced to half",
    optionD: "D)	Is reduced to a quarter",
  },
  {
    id: "27.",
    question:
      "Which of the following is the evidence to show that there must be a force acting on earth and directed towards the sun",

    optionA: "A) Deviation of the falling bodies towards east",
    optionB: "B) Revolution of the earth round the sun",
    optionC: "C) Phenomenon of day and night ",
    optionD: "D) Apparent motion of sun round the earth",
  },
  {
    id: "28.",
    question:
      "The gravitational force between two stones of mass 1 kg each separated by a distance of 1 metre in vacuum is",

    optionA: "A) Zero",
    optionB: <MathEq math={String.raw`B) 6.675x$10^{-5}$ newton`} />,
    optionC: <MathEq math={String.raw`C) 6.675x$10^{-11}$ newton`} />,
    optionD: <MathEq math={String.raw`D) 6.675x$10^{-8}$ newton`} />,
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`The distance of neptune and saturn from sun are nearly $10^{13}$  and $10^{12}$  meters respectively. Assuming that they move in circular orbits, their periodic times will be in the ratio `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\sqrt{10}$}`} />,
    optionB: "B) 100 ",
    optionC: <MathEq math={String.raw`C) $10\sqrt{10}$ `} />,
    optionD: <MathEq math={String.raw`D) $1/\sqrt{10}$ `} />,
  },
  {
    id: "30.",
    question:
      "If the earth is at one-fourth of its present distance from the sun, the duration of the year will be",

    optionA: "A) Half the present year",
    optionB: "B) One-eighth the present year",
    optionC: "C) One-fourth the present year",
    optionD: "D) One-sixth the present year",
  },

  {
    id: "31.",
    question: [
      "Which of the following statements are correct ?",
      <div>(A) molecular mass of ammonium sulphate is 132</div>,
      <div>(B) the cation in stannous chloride is divalent diatomic</div>,
      <div>
        (C) a mixture of sugar and salt can be separated by sedimentation
      </div>,
      <div>(D) all plastics do not have same arrangement of monomer units</div>,
      <div>
        (E) mercury and gallium are metals which exist in liquid state at room
        temperature
      </div>,
    ],

    optionA: "A) A, B and C ",
    optionB: "B) B, C and D",
    optionC: "C) A, D and E  ",
    optionD: "D) all of the above",
  },

  {
    id: "32.",
    question: "Which of the below ions are cations?",

    optionA: "a)	Phosphate",
    optionB: "b) Carbonate",
    optionC: "c) Aluminate",
    optionD: "d) none of these",
  },

  {
    id: "33.",
    question: "Which of the below ions is a trivalent polyatomic?",

    optionA: "a) Ammonium",
    optionB: "b) nitride ",
    optionC: "c) bicarbonate",
    optionD: "d) Phosphate",
  },

  {
    id: "34.",
    question: "Which of the below ions is a trivalent monoatomic?",

    optionA: "a)	cuprous",
    optionB: "b) peroxide",
    optionC: "c) phosphide",
    optionD: "d) Nitrate",
  },

  {
    id: "35.",
    question: [
      "Which of the following statements is/or correct",
      <MathEq
        math={String.raw`I.	5 moles of $CO_{2}$ and 5 moles of $H_{2}O$ have the same mass`}
      />,
      <MathEq
        math={String.raw`II.	100 g of $NH_{3}$ has more atoms than that present in 100 g of $N_{2}$.`}
      />,
      <MathEq
        math={String.raw`III.	16 g of solid sulphur contains $3.76 \times 10^{22}$ molecules.`}
      />,
    ],

    optionA: "a) I and II only",
    optionB: "b) II and III only	",
    optionC: "c) III only",
    optionD: "d) I only",
  },

  {
    id: "36.",
    question: [
      "Rambo prepared a flow chart to show classification of fibres and plastics. He left few columns blank.",
      <Image g={i1} />,
    ],

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "37.",
    question: <Image g={i2} />,

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "38.",
    question: [
      <Image g={i3} />,
      <div>Which of the following statements are correct</div>,
    ],

    optionA: "a) X can be condensed back to coal",
    optionB: "b) Y and Z are useless products",
    optionC: "c) Z starts burning when exposed to air",
    optionD: "d) none of these",
  },

  {
    id: "39.",
    question:
      "Colors of flames produced by kerosene lamp, candle and Bunsen burner are respectively",

    optionA: "A) blue, yellow and yellow	",
    optionB: "B) yellow, yellow and blue",
    optionC: "C) orange, blue and yellow",
    optionD: "D) yellow, orange and yellow",
  },

  {
    id: "40.",
    question: <Image g={i5} />,

    optionA: "a) Gas, liquid and liquid",
    optionB: "b) solid, liquid and liquid ",
    optionC: "c) liquid, solid and liquid",
    optionD: "d) solid, liquid and gas",
  },

  {
    id: "41.",
    question: <Image g={i4} />,

    optionA: "A) I",
    optionB: "B) II",
    optionC: "C) III",
    optionD: "D) IV",
  },

  {
    id: "42.",
    question: (
      <MathEq
        math={String.raw`The atomic number of an element is 13. What will be the number of electrons in its ion $X^{3+}$?`}
      />
    ),

    optionA: "A) 16",
    optionB: "B) 26",
    optionC: "C) 13",
    optionD: "D) None of these",
  },

  {
    id: "43.",
    question: [
      <div>
        Assertion (A): one mole of any substance is equal to its molecular
        weight in grams
      </div>,
      <MathEq
        math={String.raw`Number of moles = $\frac{mass of substance in grams}{molecular weight}$`}
      />,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "44.",
    question: <Image g={i6} />,

    optionA: "a)	Krypton, oxygen, nitrogen, neon",
    optionB: "b) nitrogen, neon, oxygen, krypton",
    optionC: "c)  neon, nitrogen, oxygen, krypton",
    optionD: "d) oxygen, nitrogen, neon, krypton",
  },

  {
    id: "45.",
    question: (
      <MathEq
        math={String.raw`Aspartame, an artificial sweetner has the molecular formula $C_{14}H_{18}N_{2}O_{5}$. What is the mass in grams of one molecule ? (At masses: C= 12.00, H = 1.008, N = 14.01, O = 16.00) `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $4.89 \times 10^{-21}$`} />,
    optionB: <MathEq math={String.raw`B) $2.24 \times 10^{-21}$`} />,
    optionC: <MathEq math={String.raw`C) $3.85 \times 10^{-22}$`} />,
    optionD: <MathEq math={String.raw`D) $4.89 \times 10^{-22}$`} />,
  },
];
