import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.png";
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
    question: (
      <MathEq
        math={String.raw`$sin^{2}A + cos^{2}A$ = `}
      />
    ),

    optionA: "A) not defined",
    optionB: "B) 0",
    optionC: "C) -1",
    optionD: "D) 1",
  },
  
  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$cos^{2}30^{\circ}-sin^{2}30^{\circ}$ = `}
      />
    ),

    optionA: "A) not defined",
    optionB: "B) 1/2",
    optionC: "C) 0",
    optionD: "D) 1", 
  },
  
  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`$tan225^{\circ}$ = `}
      />
    ),

    optionA: "A) not defined",
    optionB: "B) 1/2",
    optionC: "C) 1",
    optionD: "D) 0", 
  },

  {
    id: "16.",
    question:'A rock is brought from the surface of the moon,',

    optionA:'its mass will change',
    optionB:'its weight will change but not mass',
    optionC:'both mass and weight wil change',
    optionD:'its mass and weight both will remain same',
  },

  {
    id: "17.",
    question:"A lead ball and a snow ball of identical radius are released from a certain height in vacuum. The time taken by both of them to reach the ground are",

    optionA:'exactly equal',
    optionB:'unequal',
    optionC:'roughly equal',
    optionD:'in the ratio of the density of lead and snow',
  },
  
  {
    id: "18.",
    question:"The SI unit of g is",

    optionA: <MathEq math={String.raw`A) $m^{2}/s$`} />,
    optionB: <MathEq math={String.raw`B) $m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $s/m^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $m/s$`} />,
  },
  
  {
    id: "19.",
    question:"If the distance between two masses be doubled, then the force between them will become",

    optionA:'A) 1/4 times',
    optionB:'B) 4 times',
    optionC:'C) 1/2 times',
    optionD:'D) 2 times',
  },
  
  {
    id: "20.",
    question:"A body falls freely towards the earth with",

    optionA:'A) uniform speed',
    optionB:'B) uniform velocity',
    optionC:'C) uniform acceleration',
    optionD:'D) none of these',
  },

  {
    id: "21.",
    question:'The force of gravitaion between two bodies does not depend on',

    optionA:'A) their separation',
    optionB:'B) the gravitational constant',
    optionC:'C) the product of their masses',
    optionD:'D) the sum of their masses',
  },
  {
    id: "22.",
    question:'A body having a mass 1kg on the surface of the earth weighs',

    optionA:'A) 9.8 N',
    optionB:'B) 1/9.8 N',
    optionC:'C) 980 N',
    optionD:'D) 1/980 N',
  },
  {
    id: "23.",
    question:"A stone dropped from the roof of the building takes 4s to reach the ground. the height of the building is",

    optionA:'A) 9.8m',
    optionB:'B) 19.6m',
    optionC:'C) 39.2m',
    optionD:'D) 78.4m',
  },
  {
    id: "24.",
    question:"A ball is thrown up and attains a maximum height of 100m. It's initial speed was",

    optionA:'A) 9.8 m/s',
    optionB:'B) 44.2 m/s',
    optionC:'C) 19.6 m/s',
    optionD:'D) None of these',
  },
  {
    id: "25.",
    question:"The weight of an object",

    optionA:'A) is the quantity of matter it contains',
    optionB:"B) refers to it's inertia",
    optionC:"C) is same as it's mass but is expressed in different units",
    optionD:"D) is the force with which it is attracted towards the earth",
  },
  {
    id: "26.",
    question:"What is the mass of an object whose weight is 980N",

    optionA:'A) 980 kg',
    optionB:'B) 98 kg',
    optionC:'C) 100 kg',
    optionD:'D) 0',
  },
  {
    id: "27.",
    question:"A weighing macine measures",

    optionA:'A) weight only',
    optionB:'B) mass only',
    optionC:'C) mass and weight',
    optionD:'D) None of these',
  },
  {
    id: "28.",
    question:"Hold a stone at the end of the spring balance. the pointer shows 5 kg wt. Now release the spring balance then the pointer will read",

    optionA:'A) more than 5kg wt',
    optionB:'B) less than 5kg wt',
    optionC:'C) equal to 5kg wt',
    optionD:'D) 0',
  },
  {
    id: "29.",
    question:"While orbiting around the earth in a space ship an astronaut experiences",

    optionA:'A) more weight',
    optionB:'B) lesser weight',
    optionC:'C) weightlessness',
    optionD:'D) nothing at all',
  },
  {
    id: "30.",
    question:"The three laws of planetary motion were given by",

    optionA:'A) Aristotle',
    optionB:'B) Kepler',
    optionC:'C) Copernicus',
    optionD:'D) Tycho Brahe',
  },
];
