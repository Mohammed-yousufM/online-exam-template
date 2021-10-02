import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
// import i2 from "./I2.png";
// // import i3 from "./I3.bmp";
// // import i4 from "./I4.bmp";
// // import i5 from "./I5.bmp";
// // import i6 from "./I6.bmp";
// import i3 from "./I3.png";
// import i4 from "./I4.png";
// import i5 from "./I5.JPG";
// import i6 from "./I6.png";
// import i7 from "./I7.png";
// import i8 from "./I8.png";
// import i9 from "./I9.png";
// import i10 from "./I10.png";
// import i11 from "./I11.png";
// import i12 from "./I12.png";
// import i13 from "./I13.png";
// import i14 from "./I14.png";
// import i15 from "./I15.png";
// import i16 from "./I16.png";
// import i17 from "./I17.png";
// import i18 from "./I18.png";
// import i19 from "./I19.png";
// import i20 from "./I20.png";
// import i21 from "./I21.png";
// import i23 from "./I23.png";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
  { sNO: "1", userID: "ayaan", passw: "1001" },
  { sNO: "2", userID: "sami", passw: "1002" },
  { sNO: "3", userID: "santosh", passw: "1003" },
  // { sNO: "4", userID: "rugveda", passw: "1004" },
  { sNO: "5", userID: "richitha", passw: "1005" },
  { sNO: "6", userID: "maimuna", passw: "1006" },
  // { sNO: "7", userID: "josephus", passw: "1007" },
  // { sNO: "9", userID: "masood", passw: "1009" },
  { sNO: "10", userID: "vineel", passw: "1010" },
  { sNO: "11", userID: "abhinav", passw: "1011" },
  // // // // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // New Users - continue S.No.
  // { sNO: "16", userID: "srujana", passw: "1016" },
  // { sNO: "17", userID: "meghana", passw: "1017" },
  // { sNO: "18", userID: "asmitha", passw: "1018" },
  // { sNO: "19", userID: "charan", passw: "1019" },
  // { sNO: "20", userID: "mani", passw: "1020" },
  { sNO: "21", userID: "jaideep", passw: "1021" },
  { sNO: "22", userID: "abhinay", passw: "1022" },
  // { sNO: "23", userID: "rizwana", passw: "1023" },
  { sNO: "24", userID: "sujith", passw: "1024" }, //24
  // { sNO: "25", userID: "nandini", passw: "1025" },
  { sNO: "26", userID: "madhav", passw: "1026" },
  { sNO: "27", userID: "mahamood", passw: "1027" },
  { sNO: "28", userID: "ananya", passw: "1028" },
  { sNO: "29", userID: "basim", passw: "1029" },
  { sNO: "30", userID: "diya", passw: "1030" },
  { sNO: "31", userID: "fahad", passw: "1031" },
  { sNO: "32", userID: "ashu", passw: "1032" },
  { sNO: "33", userID: "safwan", passw: "1033" },
  { sNO: "34", userID: "tasneem", passw: "1034" },
  { sNO: "35", userID: "yojit", passw: "1035" },
  { sNO: "36", userID: "zoya", passw: "1036" },
  { sNO: "37", userID: "pradyumna", passw: "1037" },
  { sNO: "38", userID: "bhargav", passw: "1038" },
  { sNO: "39", userID: "srimedha", passw: "1039" },
  { sNO: "40", userID: "azra", passw: "1040" },
  { sNO: "41", userID: "bilvika", passw: "1041" },
  { sNO: "42", userID: "adwaith", passw: "1042" },
  { sNO: "43", userID: "neekshitha", passw: "1043" },
  { sNO: "44", userID: "vaibhavi", passw: "1044" },
];

export const questionsAll = [
  {
    id: "1.",
    question:
      "A circus artist climbing a 20m long rope which is tightly stretched and tied from the top of the vertical pole to the ground. Find the height of the pole if the angle made by the rope with ground level is 30 degrees",

    optionA: "A) 10m",
    optionB: "B) 20m",
    optionC: "C) 30m",
    optionD: "D) 40m",
  },

  {
    id: "2.",
    question:
      "Shadow of a building is 10m long, when the angle of elevation of sun is 60 degrees.Find the height of the building.",

    optionA: <MathEq math={String.raw`A) $10$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{10}{\sqrt{3}}$`} />,
    optionC: <MathEq math={String.raw`C) $10\sqrt{3}$`} />,
    optionD: <MathEq math={String.raw`D) $20$`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`If a vertical pole 6m high has a shadow of length $2\sqrt{3}$m. Find the angle of elevation of the sun`}
      />
    ),

    optionA: "A) 30 degrees",
    optionB: "B) 20 degrees",
    optionC: "C) 45 degrees",
    optionD: "D) 60 degrees",
  },

  {
    id: "4.",
    question:
      "A 1.5m tall boy is standing at some distance from a 30m tall building. The angle of elevation from his eyes to the top of the building increases from 30degrees to 60degrees as he walks towards the building. Find the distance he walked towards the building.",

    optionA: <MathEq math={String.raw`A) $19$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{19}{\sqrt{3}}$`} />,
    optionC: <MathEq math={String.raw`C) $19\sqrt{3}$`} />,
    optionD: <MathEq math={String.raw`D) $19/3$`} />,
  },

  {
    id: "5.",
    question:
      "From a point on the ground the angles of elevation of bottom and top of the transmission tower at the top o a 20m high building are 45degrees and 60degrees respectively. Find the height of the tower.",

    optionA: <MathEq math={String.raw`A) $20 \left ( \sqrt{3}-1 \right )$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{20}{\sqrt{3}-1}$`} />,
    optionC: <MathEq math={String.raw`C) $20\sqrt{3}$`} />,
    optionD: <MathEq math={String.raw`D) $20/3$`} />,
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`$sin\theta = \frac{1}{\sqrt{2}} \:$ $cos\theta = \frac{1}{\sqrt{2}}$ then find $tan\theta  \:+ \: cot\theta$`}
      />
    ),

    optionA: "A) 4",
    optionB: "B) 2",
    optionC: "C) 1",
    optionD: "D) 3",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`If $5tan\theta = 4$ then $\frac{5sin\theta \:-\: 3cos\theta}{5sin\theta \:+\: 2cos\theta}$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) 1/6",
    optionD: "D) 6",
  },

  {
    id: "8.",
    question: <MathEq math={String.raw`$-13 \pi /6$ radians =`} />,

    optionA: <MathEq math={String.raw`A) $-390^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $-490^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $-410^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $-30^{\circ}$`} />,
  },

  {
    id: "9.",
    question: "If x= 45degrees, then tanx + cotx =",

    optionA: "A) 2",
    optionB: "B) 4",
    optionC: "C) 3",
    optionD: "D) 1",
  },

  {
    id: "10.",
    question: "secA + tanA = 3, then secA =",

    optionA: "A) 5/3",
    optionB: "B) 10/3",
    optionC: "C) 7/3",
    optionD: "D) 10",
  },

  {
    id: "11.",
    question:<MathEq math={String.raw`$\frac{tan225 ^{\circ}}{cot225 ^{\circ}}$`}/>, 

    optionA: "A) 2",
    optionB: "B) 4",
    optionC: "C) 3",
    optionD: "D) 1",
  },

  {
    id: "12.",
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
    id: "13.",
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
    id: "14.",
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
    id: "15.",
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
    id: "16.",
    question: "The tidal waves in the sea are primarily due to",

    optionA: "A) The gravitational effect of the moon on the earth",
    optionB: "B) The gravitational effect of the sun on the earth",
    optionC: "C) The gravitational effect of venus on the earth",
    optionD: "D) The atmospheric effect of the earth itself",
  },

  {
    id: "17.",
    question:
      "If there were a smaller gravitational effect, which of the following forces do you think would alter in some respect",

    optionA: "A) Viscous forces",
    optionB: "B) Archimedes uplift",
    optionC: "C) Electrostatic force",
    optionD: "D) None of the above",
  },

  {
    id: "18.",
    question:
      "A satellite of the earth is revolving in a circular orbit with a uniform speed v. If the gravitational force suddenly disappears, the satellite will",

    optionA: "A) Continue to move with velocity v along the original orbit",
    optionB: "B) Move with a velocity v, tangentially to the original orbit",
    optionC: "C) Fall down with increasing velocity",
    optionD: "D) Ultimately come to rest somewhere on the original orbit",
  },

  {
    id: "19.",
    question: "The atmosphere is held to the earth by",

    optionA: "A) Winds",
    optionB: "B) Gravity",
    optionC: "C) Clouds",
    optionD: "D) None of the above",
  },

  {
    id: "20.",
    question: "The weight of a body at the centre of the earth is",

    optionA: "A) Zero",
    optionB: "B) Infinite",
    optionC: "C) Same as on the surface of earth",
    optionD: "D) None of the above",
  },

  {
    id: "21.",
    question:
      "If the distance between two masses is doubled, the gravitational attraction between them",

    optionA: "A) Is doubled",
    optionB: "B) Becomes four times",
    optionC: "C) Is reduced to half",
    optionD: "D) Is reduced to a quarter",
  },
  {
    id: "22.",
    question:
      "Which of the following is the evidence to show that there must be a force acting on earth and directed towards the sun",

    optionA: "A) Deviation of the falling bodies towards east",
    optionB: "B) Revolution of the earth round the sun",
    optionC: "C) Phenomenon of day and night",
    optionD: "D) Apparent motion of sun round the earth",
  },
  {
    id: "23.",
    question:
      "The gravitational force between two stones of mass 1 kg each separated by a distance of 1 metre in vacuum is",

    optionA: "A) Zero",
    optionB: (
      <MathEq math={String.raw`B) $6.675 \: \times \: 10^{-5}$ newton`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $6.675 \: \times \: 10^{-11}$ newton`} />
    ),
    optionD: (
      <MathEq math={String.raw`D) $6.675 \: \times \: 10^{-8}$ newton`} />
    ),
  },
  {
    id: "24.",
    question:
      "The pressure at the bottom of a tank  containing a liquid does not depend on",

    optionA: "A) Acceleration due to gravity",
    optionB: "B) Height of the liquid column",
    optionC: "C) Area of the bottom surface",
    optionD: "D) Nature of the liquid",
  },
  {
    id: "25.",
    question: "Why the dam of water reservoir is thick at the bottom",

    optionA: "A) Quantity of water increases with depth",
    optionB: "B) Density of water increases with depth",
    optionC: "C) Pressure of water increases with depth ",
    optionD: "D) Temperature of water increases with depth",
  },
  {
    id: "26.",
    question:
      "A metallic block of density 5 gm cm–3 and having dimensions 5 cm × 5 cm × 5 cm is weighed in water. Its apparent weight will be",

    optionA: "A) 5 × 5 × 5 × 5 gf",
    optionB: "B) 4 × 4 × 4 × 4 gf",
    optionC: "C) 5 × 4 × 4 × 4 gf",
    optionD: "D) 4 × 5 × 5 × 5 gf ",
  },
  {
    id: "27.",
    question: [
      "A candle of diameter d is floating on a liquid in a cylindrical container of diameter D (D>>d) as shown in figure. If it is burning at the rate of 2cm/hour then the top of the candle will",
      <Image g={i1} />,
    ],

    optionA: "A) Remain at the same height",
    optionB: "B) Fall at the rate of 1 cm/hour",
    optionC: "C) Fall at the rate of  2 cm/hour",
    optionD: "D) Go up the rate of 1cm/hour",
  },
  {
    id: "28.",
    question:
      "An ice block contains a glass ball when the ice melts within the water containing vessel, the level of water",

    optionA: "A) Rises",
    optionB: "B) Falls",
    optionC: "C) Unchanged",
    optionD: "D) First rises and then falls",
  },
  {
    id: "29.",
    question: "A large ship can float but a steel needle sinks because of",

    optionA: "A) Viscosity",
    optionB: "B) Surface tension",
    optionC: "C) Density",
    optionD: "D) None of these",
  },
  {
    id: "30.",
    question: "Construction of submarines is based on",

    optionA: "A) Archimedes’ principle",
    optionB: "B) Bernoulli’s theorem ",
    optionC: "C) Pascal’s law",
    optionD: "D) Newton’s laws",
  },
];
