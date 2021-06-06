import React from "react";
import MathEq from "./MathEq";
// import Image from "./Image";
// import i1 from "./I1.png";
// import i2 from "./I2.png";
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
  { sNO: "40", userID: "azra", passw: "1040" },
  { sNO: "41", userID: "bilvika", passw: "1041" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "What is multiplicative inverse of -1",
    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) Does not exist",
  },
  {
    id: "2.",
    question: (
      <MathEq math={String.raw`Evaluate $\left ( \frac{1}{2} \right )^{-5}$`} />
    ),

    optionA: "A) 8",
    optionB: "B) 16",
    optionC: "C) 32",
    optionD: "D) 64",
  },
  {
    id: "3.",
    question: (
      <MathEq math={String.raw`Multiplicative inverse of $7^{-2}$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $7^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) $7^{2}$`} />,
    optionC: "C) 0",
    optionD: "D) Does not exist",
  },
  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Evaluate ($3^{-17} \div 3^{-10} \times 3^{5}$)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{3^{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{3^{3}}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{3^{4}}$`} />,
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Find $\left ( 2^{-1}+3^{-1}+4^{-1} \right )^{0}$`}
      />
    ),
    optionA: "A) 1",
    optionB: "B) -1",
    optionC: <MathEq math={String.raw`C) $\frac{1}{30}$`} />,
    optionD: "D)0",
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`Find m for which $5^{m}\div5^{-3}=5^{5}$`} />
    ),

    optionA: "A) 5",
    optionB: "B) 3",
    optionC: "C) 2",
    optionD: "D) 4",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left ( 3^{0}-4^{0} \right )\times 5^{2}$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 2",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left ( 64 \right )^{-2/3}\times\left ( 1/4 \right )^{-3}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 0",
    optionC: "C) 2",
    optionD: "D) 4",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Evaluate $\left ( \frac{1}{3}\right )^{-1}-\left (\frac{1}{4}\right)^{-1}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 0",
    optionD: "D) 12",
  },
  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`The number obtained  on rationalising the denominator of $\frac{1}{\sqrt{7}-2}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{\sqrt{7}+2}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{\sqrt{7}-2}{3}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\sqrt{7}+2}{5}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\sqrt{7}+2}{45}$`} />,
  },

  {
    id: "11.",
    question: "Which one of the following is a rational number",

    optionA: <MathEq math={String.raw`A) $2-\sqrt{5}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{2\sqrt{7}}{7\sqrt{7}}$`} />,
    optionC: "C) Both A and B",
    optionD: "D) None of the above",
  },
  {
    id: "12.",
    question: (
      <MathEq math={String.raw`106 $\times$ 106 - 94 $\times$ 94 = ?`} />
    ),

    optionA: "A) 2400",
    optionB: "B) 2000",
    optionC: "C) 1904",
    optionD: "D) 1906",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`397 $\times$ 397 + 103 $\times$ 103 + 2 $\times$ 397 $\times$ 103 = ?`}
      />
    ),

    optionA: "A) 249996",
    optionB: "B) 250000",
    optionC: "C) 86436",
    optionD: "D) None of these",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$\frac{\left ( 946+157 \right )^{2}+\left ( 946-157 \right )^{2}}{\left ( 946 \times 946 + 157 \times 157 \right )} = ?$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 789",
    optionD: "D) 1103",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`Simplify $\left ( 3+\sqrt{3} \right )\left ( 3-\sqrt{3} \right )$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 4",
    optionC: "C) 5",
    optionD: "D) 6",
  },

  {
    id: "16.",
    question: "parsec is a unit of ",

    optionA: "A) Distance",
    optionB: "B) Velocity ",
    optionC: "C) Time",
    optionD: "D) Angle",
  },

  {
    id: "17.",
    question:
      "Which of the following quantity is expressed as force per unit area ",

    optionA: "A) Work",
    optionB: "B) Pressure",
    optionC: "C) Volume",
    optionD: "D) Area",
  },

  {
    id: "18.",
    question: "One femtometer is equivalent to",

    optionA: <MathEq math={String.raw`A) $10^{15}$m`} />,
    optionB: <MathEq math={String.raw`B) $10^{-15}$m`} />,
    optionC: <MathEq math={String.raw`C) $10^{-12}$m`} />,
    optionD: <MathEq math={String.raw`D) $10^{12}$m`} />,
  },

  {
    id: "19.",
    question:
      "A Body moves 6 m north. 8 m east and 10m vertically upwards, what is its resultant displacement from initial position",

    optionA: <MathEq math={String.raw`A) $10\sqrt{2}$m`} />,
    optionB: <MathEq math={String.raw`B) 10m`} />,
    optionC: <MathEq math={String.raw`C) $\frac{10}{\sqrt{2}}$m`} />,
    optionD: <MathEq math={String.raw`D) $10 \times 2$m`} />,
  },

  {
    id: "20.",
    question:
      "A man goes 10m towards North, then 20m towards east then displacement is ",

    optionA: "A) 22.5m",
    optionB: "B) 25m",
    optionC: "C) 25.5m",
    optionD: "D) 30m",
  },

  {
    id: "21.",
    question:
      "An aeroplane flies 400 m  north and 300 m south and then flies 1200 m upwards then net displacement is nearly",

    optionA: "A) 1200 m",
    optionB: "B) 1300 m",
    optionC: "C) 1400 m",
    optionD: "D) 1500 m",
  },
  {
    id: "22.",
    question:
      "An athlete completes one round of a circular track of radius R in 40 sec. What will be his displacement at the end of 2 min. 20 sec ",

    optionA: "A) Zero",
    optionB: "B) 2R",
    optionC: <MathEq math={String.raw`C) 2$\pi$R`} />,
    optionD: <MathEq math={String.raw`D) 7$\pi$R`} />,
  },
  {
    id: "23.",
    question: "Which of the following is a one dimensional motion",

    optionA: "A) Landing of an aircraft",
    optionB: "B) Earth revolving around the sun",
    optionC: "C) Motion of simple pendulum",
    optionD: "D) Train running on a straight track",
  },
  {
    id: "24.",
    question:
      "A 150 m long train is moving with a uniform velocity of 45 km/h. The time taken by the train to cross a bridge of length 850 meters is",

    optionA: "A) 56 sec",
    optionB: "B) 68 sec",
    optionC: "C) 80 sec",
    optionD: "D) 92 sec ",
  },
  {
    id: "25.",
    question:
      "A particle is constrained to move on a straight line path. It returns to the starting point after 10 sec. The total distance covered by the particle during this time is 30 m. Which of the following statements about the motion of the particle is false",

    optionA: "A) Displacement of the particle is zero",
    optionB: "B) Average speed of the particle is 3 m/s",
    optionC: "C) Displacement of the particle is 30 m",
    optionD: "D) Both (a) and (b)",
  },
  {
    id: "26.",
    question:
      "An airplane flies with a constant speed of 800 km/h. How long will it take to travel a distance of 1800 kilometers?",

    optionA: "A) 2 hr 15 min",
    optionB: "B) 2 hr 45 min",
    optionC: "C) 3 hr 15 min",
    optionD: "D) 3 hr 45 min",
  },
  {
    id: "27.",
    question:
      "Peter roller skates with a constant speed of 8 km/h. How far can he travel in 3 hours 45 minutes?",

    optionA: "A) 20 km",
    optionB: "B) 30 km",
    optionC: "C) 40 km",
    optionD: "D) 50 km",
  },
  {
    id: "28.",
    question:
      "Speed of a moving object is 0.06 m/s. This speed is equal to _____ km/hr",

    optionA: "A) 2.16",
    optionB: "B) 1.08",
    optionC: "C) 0.216",
    optionD: "D) 0.0216",
  },
  {
    id: "29.",
    question:
      "In which of the following cases, distance and displacement are equal?",

    optionA: "A) A pendulum moving to and fro",
    optionB: "B) A car moving on a circular track",
    optionC: "C) A snake crawling on ground",
    optionD: "D) An athlete running on a straight track",
  },
  {
    id: "30.",
    question:
      "A bus covers 250 km towards west in 5 hr and 250 km towards north in another 5 hr. Its Average speed is",

    optionA: "A) 35 kmph",
    optionB: "B) 45 kmph",
    optionC: "C) 50 kmph",
    optionD: "D) 70 kmph",
  },
];
