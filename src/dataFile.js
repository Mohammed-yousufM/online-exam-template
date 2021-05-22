import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
// import i3 from "./I3.bmp";
// import i4 from "./I4.bmp";
// import i5 from "./I5.bmp";
// import i6 from "./I6.bmp";

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
  // { sNO: "12", userID: "arshan", passw: "1012" },
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
];

export const questionsAll = [
  {
    id: "1.",
    question: "HCF of 100, 101 is",

    optionA: "A) 1",
    optionB: "B) 7",
    optionC: "C) 37",
    optionD: "D) None",
  },

  {
    id: "2.",
    question: "LCM of 100, 101 is",

    optionA: "A) 1",
    optionB: "B) 7",
    optionC: "C) 10100",
    optionD: "D) None",
  },

  {
    id: "3.",
    question: "Which one of the following is an irrational number",

    optionA: <MathEq math={String.raw`A) $\pi$`} />,
    optionB: <MathEq math={String.raw`B) $e$`} />,
    optionC: "C) Both",
    optionD: "D) None",
  },

  {
    id: "4.",
    question: "Which one of the following is prime?",

    optionA: "A) 9",
    optionB: "B) 99",
    optionC: "C) 129",
    optionD: "D) 29",
  },

  {
    id: "5.",
    question: "Which one of the following are twin prime numbers",

    optionA: "A) (18,20)",
    optionB: "B) (19,21)",
    optionC: "C) (17, 19)",
    optionD: "D) (21, 23)",
  },

  {
    id: "6.",
    question: "Which one of the following statement is true",

    optionA: "A) All Natural numbers are Real",
    optionB: "B) All Integers are Real",
    optionC: "C) All Rational numbers are Real",
    optionD: "D) All of the above",
  },

  {
    id: "7.",
    question: <MathEq math={String.raw`LCM of ($\pi$, $\pi^{2}$)`} />,

    optionA: <MathEq math={String.raw`A) $\pi$`} />,
    optionB: <MathEq math={String.raw`B) $2\pi$`} />,
    optionC: <MathEq math={String.raw`C) $\pi^{2}$`} />,
    optionD: "D) Not possible",
  },

  {
    id: "8.",
    question: <MathEq math={String.raw`LCM of ($\sqrt{2}$, $\sqrt{3}$)`} />,

    optionA: <MathEq math={String.raw`$\sqrt{2}$`} />,
    optionB: <MathEq math={String.raw`$\sqrt{3}$`} />,
    optionC: <MathEq math={String.raw`$\sqrt{6}$`} />,
    optionD: "D) Not possible",
  },

  {
    id: "9.",
    question: (
      <MathEq math={String.raw`The simplest form of $\frac{69}{92}$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{2}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{4}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{13}{24}$`} />,
    optionD: "D) None of these",
  },

  {
    id: "10.",
    question: "The HCF of 42, 63, 140 is",

    optionA: "A) 14",
    optionB: "B) 9",
    optionC: "C) 21",
    optionD: "D) 7",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`HCF of ($2^{2} \times 3^{3} \times 5^{5}$), ($2^{3} \times 3^{2} \times 5^{2} \times 7$) and ($2^{4} \times 3^{4} \times 5 \times 11 \times7^{2}$) is`}
      />
    ),

    optionA: "A) 180",
    optionB: "B) 360",
    optionC: "C) 540",
    optionD: "D) 1260",
  },

  {
    id: "12.",
    question: "LCM of 22, 54, 108, 135, 198 is",

    optionA: "A) 330",
    optionB: "B) 1980",
    optionC: "C) 5940",
    optionD: "D) 11880",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`The LCM of ($2^{3} \times 3 \times 5^{2} \times 7$), ($2^{4} \times 3^{2} \times 5 \times 7^{2} \times 11$) and ($2 \times 3^{3} \times 5^{4}$) is`}
      />
    ),

    optionA: (
      <MathEq math={String.raw`A) ($2^{4} \times 3^{3} \times 5^{4}$) is`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) ($2 \times 3 \times 5 \times 7 \times 11)`} />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) ($2^{4} \times 3^{3} \times 5^{4} \times 7^{2} \times 11$) is`}
      />
    ),
    optionD: "D) None of these",
  },

  {
    id: "14.",
    question:
      "The HCF of two numbers is 11 and their LCM is 770. If one of the numbers is 275, then the other is:",

    optionA: "A) 279",
    optionB: "B) 283",
    optionC: "C) 308",
    optionD: "D) 318",
  },

  {
    id: "15.",
    question:
      "The ratio between two numbers is 2:3. If their LCM is 150, then the numbers are:",

    optionA: "A) 30, 40",
    optionB: "B) 48, 64",
    optionC: "C) 50, 75",
    optionD: "D) None of these",
  },

  {
    id: "16.",
    question: "Light year is a unit of",

    optionA: "A) Time",
    optionB: "B) Mass",
    optionC: "C) Distance",
    optionD: "D) Energy",
  },

  {
    id: "17.",
    question: "One nanometre is equal to",

    optionA: <MathEq math={String.raw`A) $10^{9}$ mm`} />,
    optionB: <MathEq math={String.raw`B) $10^{-6}$ cm`} />,
    optionC: <MathEq math={String.raw`C) $10^{-7}$ cm`} />,
    optionD: <MathEq math={String.raw`D) $10^{-9}$ cm`} />,
  },

  {
    id: "18.",
    question: "A micron is related to centimetre as",

    optionA: <MathEq math={String.raw`A) 1micron = $10^{-8}$ cm`} />,
    optionB: <MathEq math={String.raw`B) 1micron = $10^{-6}$ cm`} />,
    optionC: <MathEq math={String.raw`C) 1micron = $10^{-5}$ cm`} />,
    optionD: <MathEq math={String.raw`D) 1micron = $10^{-4}$ cm`} />,
  },

  {
    id: "19.",
    question:
      "A cube has numerically equal volume and surface area. The volume of such a cube is ",

    optionA: "A) 216 units",
    optionB: "B) 1000 units",
    optionC: "C) 2000 units",
    optionD: "D) 3000 units",
  },

  {
    id: "20.",
    question: "per sec is a unit of",

    optionA: "A) Distance",
    optionB: "B) Velocity ",
    optionC: "C) Time",
    optionD: "D) Angle",
  },

  {
    id: "21.",
    question: "Which of the following is a derived unit",

    optionA: "A) Unit of mass",
    optionB: "B) Unit of length",
    optionC: "C) Unit of time",
    optionD: "D) Unit of volume",
  },
  {
    id: "22.",
    question: "Which of the following is not a unit of time  ",

    optionA: "A) Leap year",
    optionB: "B) Micro second",
    optionC: "C) Lunar month",
    optionD: "D) Light year",
  },
  {
    id: "23.",
    question: "Candela is the unit of",

    optionA: "A) Electric intensity",
    optionB: "B) Luminous intensity",
    optionC: "C) Sound intensity",
    optionD: "D) None of these",
  },
  {
    id: "24.",
    question: "Number of base SI units is",

    optionA: "A) 4",
    optionB: "B) 7",
    optionC: "C) 3",
    optionD: "D) 5",
  },
  {
    id: "25.",
    question:
      "Which of the following system of units is not based on units of mass, length and time alone",

    optionA: "A) SI",
    optionB: "B) MKS",
    optionC: "C) FPS",
    optionD: "D) CGS",
  },
  {
    id: "26.",
    question: ["In a right angled triangle ABC find side BC", <Image g={i1} />],

    optionA: "A) 4",
    optionB: "B) 6",
    optionC: "C) 8",
    optionD: "D) 12",
  },
  {
    id: "27.",
    question: <Image g={i2} />,

    optionA: "A) 24/25",
    optionB: "B) 7/25",
    optionC: "C) 24/7",
    optionD: "D) 25/24",
  },
  {
    id: "28.",
    question: <MathEq math={String.raw`Convert $\pi$/4 radian into degree`} />,

    optionA: "A) 90 degree",
    optionB: "B) 60 degree",
    optionC: "C) 45 degree",
    optionD: "D) 30 degree",
  },
  {
    id: "29.",
    question: "Find the value of sin 30 + tan 45",

    optionA: "A) 2/3",
    optionB: "B) 1",
    optionC: "C) 5/2",
    optionD: "D) 3/2",
  },
  {
    id: "30.",
    question: "Find volume of a sphere of radius 3m (nearly)",

    optionA: "A) 113 units",
    optionB: "B) 103 uni1ts",
    optionC: "C) 212 units",
    optionD: "D) 36 units",
  },
];
