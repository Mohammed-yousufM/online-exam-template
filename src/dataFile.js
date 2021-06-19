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
  // { sNO: "1", userID: "ayaan", passw: "1001" },
  // { sNO: "2", userID: "sami", passw: "1002" },
  // { sNO: "3", userID: "santosh", passw: "1003" },
  // // { sNO: "4", userID: "rugveda", passw: "1004" },
  // { sNO: "5", userID: "richitha", passw: "1005" },
  // { sNO: "6", userID: "maimuna", passw: "1006" },
  // // { sNO: "7", userID: "josephus", passw: "1007" },
  // // { sNO: "9", userID: "masood", passw: "1009" },
  // { sNO: "10", userID: "vineel", passw: "1010" },
  // { sNO: "11", userID: "abhinav", passw: "1011" },
  // // // // // // // // Dubai Below
  // // { sNO: "8", userID: "samuel", passw: "1008" },
  // // { sNO: "12", userID: "arshan", passw: "1012" },
  // // { sNO: "13", userID: "neeraj", passw: "1013" },
  // // { sNO: "14", userID: "abel", passw: "1014" },
  // // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // // New Users - continue S.No.
  // // { sNO: "16", userID: "srujana", passw: "1016" },
  // // { sNO: "17", userID: "meghana", passw: "1017" },
  // // { sNO: "18", userID: "asmitha", passw: "1018" },
  // // { sNO: "19", userID: "charan", passw: "1019" },
  // // { sNO: "20", userID: "mani", passw: "1020" },
  // { sNO: "21", userID: "jaideep", passw: "1021" },
  // { sNO: "22", userID: "abhinay", passw: "1022" },
  // // { sNO: "23", userID: "rizwana", passw: "1023" },
  // { sNO: "24", userID: "sujith", passw: "1024" }, //24
  // // { sNO: "25", userID: "nandini", passw: "1025" },
  // { sNO: "26", userID: "madhav", passw: "1026" },
  // { sNO: "27", userID: "mahamood", passw: "1027" },
  // { sNO: "28", userID: "ananya", passw: "1028" },
  // { sNO: "29", userID: "basim", passw: "1029" },
  // { sNO: "30", userID: "diya", passw: "1030" },
  // { sNO: "31", userID: "fahad", passw: "1031" },
  // { sNO: "32", userID: "ashu", passw: "1032" },
  // { sNO: "33", userID: "safwan", passw: "1033" },
  // { sNO: "34", userID: "tasneem", passw: "1034" },
  // { sNO: "35", userID: "yojit", passw: "1035" },
  // { sNO: "36", userID: "zoya", passw: "1036" },
  // { sNO: "37", userID: "pradyumna", passw: "1037" },
  // { sNO: "38", userID: "bhargav", passw: "1038" },
  // { sNO: "39", userID: "srimedha", passw: "1039" },
  // { sNO: "40", userID: "azra", passw: "1040" },
  // { sNO: "41", userID: "bilvika", passw: "1041" },
  // { sNO: "42", userID: "adwaith", passw: "1042" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "Find the sum of additive and multiplicative inverse of 7.",

    optionA: <MathEq math={String.raw`A) $\frac{-48}{7}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{48}{7}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{7}{48}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-7}{48}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Find $x$, from $\left ( -5 \right )^{x+1} \times \left ( -5 \right )^{5}= \left ( -5 \right )^{7}$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 2",
    optionC: "C) 1",
    optionD: "D) 0",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Co-efficient of $x^{2}y$ from $\frac{3}{2} x^{2}y \,+\, \frac{4}{5} xy \,-\, \frac{1}{2} x^{2}yz$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-1}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{-3}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{2}$`} />,
  },

  {
    id: "4.",
    question: "Which one of the following expression is not a polynomial?",

    optionA: <MathEq math={String.raw`A) $x^{2} - 2x +5$`} />,
    optionB: <MathEq math={String.raw`B) $y^{2} - xy +5$`} />,
    optionC: "C) x+1",
    optionD: <MathEq math={String.raw`D) $t^{2}+\sqrt{t} +1$`} />,
  },

  {
    id: "5.",
    question: <MathEq math={String.raw`The expression $l^{2}+m^{2}$ is?`} />,

    optionA: "A) Binomial",
    optionB: "B) Monomial",
    optionC: "C) Trinomial",
    optionD: "D) None of these",
  },

  {
    id: "6.",
    question: "The expression 5xyz is?",

    optionA: "A) Binomial",
    optionB: "B) Monomial",
    optionC: "C) Trinomial",
    optionD: "D) None of these",
  },

  {
    id: "7.",
    question: (
      <MathEq math={String.raw`The degree of $x^{2} + \frac{1}{x^{2}} +1$`} />
    ),

    optionA: "A) 4",
    optionB: "B) 2",
    optionC: "C) Does not exist",
    optionD: "D) 1",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Find the value of $9x^{2}+25y^{2}-30xy$, when $x=\frac{2}{3}$, $y=\frac{3}{5}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Find the product of $\frac{24pq}{5p^{2}} \times \frac{25pr}{12q}$ `}
      />
    ),

    optionA: "A) 10pqr",
    optionB: "B) 10r",
    optionC: "C) 10pr",
    optionD: "D) 10",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`The value of $a\left( a^{2}+a+1\right)+5$, when a=-1`}
      />
    ),

    optionA: "A) -4",
    optionB: "B) 5",
    optionC: "C) 6",
    optionD: "D) 4",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Find the value of $p\left( x\right) = 5x-4x^{2}+3$ when $x=0$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 5",
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`Find the remainder when $x^{3}+3x^{2}+3x+1$ is divided by $x+1$`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) 2",
  },

  {
    id: "13.",
    question: <MathEq math={String.raw`Find the factors of $3x^{2}-x-4$`} />,

    optionA: "A) (3x+4)(x+1)",
    optionB: "B) (3x-4)(x+1)",
    optionC: "C) (3x+4)(x-1)",
    optionD: "D) (3x-4)(x-1)",
  },

  {
    id: "14.",
    question: <MathEq math={String.raw`Find the factors of $x^{3}-1$`} />,

    optionA: <MathEq math={String.raw`A) ($x-1$)($x^{2}-x+1$)`} />,
    optionB: <MathEq math={String.raw`B) ($x-1$)($x^{2}-x-1$)`} />,
    optionC: <MathEq math={String.raw`C) ($x-1$)($x^{2}+x+1$)`} />,
    optionD: <MathEq math={String.raw`D) ($x+1$)($x^{2}-x+1$)`} />,
  },

  {
    id: "15.",
    question: "Find the product of (x+8)(x-10)",

    optionA: <MathEq math={String.raw`A) $x^{2}+2x+80$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}-2x+80$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}+2x-80$`} />,
    optionD: <MathEq math={String.raw`D) $x^{2}-2x-80$`} />,
  },

  {
    id: "16.",
    question:
      "A particle is moving in a circular path of radius r. The displacement after half a circle would be:",

    optionA: "A) 0",
    optionB: <MathEq math={String.raw`B) $\pi r$`} />,
    optionC: <MathEq math={String.raw`C) $2\pi r$`} />,
    optionD: "D) 2r",
  },

  {
    id: "17.",
    question:
      "The numerical ratio of displacement to distance for a moving object is :",

    optionA: "A) always less than 1",
    optionB: "B) equal to 1 or more than 1",
    optionC: "C) always more than ",
    optionD: "D) equal to 1 or less than 1",
  },

  {
    id: "18.",
    question:
      " A boy is sitting on a merry-go-round which is moving with a constant speed of 10 m/s. This means that the boy is :",

    optionA: "A) at rest",
    optionB: "B) moving with no acceleration",
    optionC: "C) in accelerated motion",
    optionD: "D) moving with uniform velocity",
  },

  {
    id: "19.",
    question:
      "In which of the following cases of motion, the distance moved and the magnitude of displacement are equal ?",

    optionA: "A) if the car is moving on straight road ",
    optionB: "B) if the car is moving on circular road",
    optionC: "C) if the pendulum is moving to and fro",
    optionD: "D) if a planet is moving around the sun",
  },

  {
    id: "20.",
    question:
      "The speed of a moving object is determined to be 0.06 m/s. This speed is equal to :",

    optionA: "A) 2.16 km/h",
    optionB: "B) 1.08 km/h",
    optionC: "C) 0.216 km/h",
    optionD: "D) 0.0216 km/h",
  },

  {
    id: "21.",
    question: [
      "A freely falling object travels 4.9 m in 1st second, 14.7 m in 2nd second, 24.5 m in 3rd second, and so on.",
      "This data shows that the motion of a freely falling object is a case of :",
    ],

    optionA: "A) uniform motion",
    optionB: "B) uniform acceleration",
    optionC: "C) no acceleration",
    optionD: "D) uniform velocity",
  },
  {
    id: "22.",
    question:
      "When a car runs on a circular track with a uniform speed, its velocity is said to be changing. This is because :",

    optionA: "A) the car has a uniform acceleration",
    optionB: "B) the direction of car varies continuously",
    optionC: "C) the car travels unequal distances in equal time intervals",
    optionD: "D) the car travels equal distances in unequal time intervals",
  },
  {
    id: "23.",
    question:
      "Which of the following statement is correct regarding velocity and speed of a moving body ?",

    optionA: "A) velocity of a moving body is always higher than its speed",
    optionB: "B) speed of a moving body is always higher than its velocity",
    optionC: "C) speed of a moving body is its velocity in a given direction",
    optionD: "D) velocity of a moving body is its speed in a given direction",
  },
  {
    id: "24.",
    question:
      "Which of the following can sometimes be ‘zero’ for a moving body ?",

    optionA: "A) average velocity",
    optionB: "B) distance travelled",
    optionC: "C) average speed",
    optionD: "D) displacement",
  },
  {
    id: "25.",
    question:
      "When a car driver travelling at a speed of 10 m/s applies brakes and brings the car to rest in 20 s, then retardation will be :",

    optionA: <MathEq math={String.raw`A) $+2m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $-2m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $-0.5m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $+0.5m/s^{2}$`} />,
  },
  {
    id: "26.",
    question: "Which of the following could not be a unit of speed ?",

    optionA: "A) km/h",
    optionB: "B) s/m",
    optionC: "C) m/s",
    optionD: <MathEq math={String.raw`D) mm s$^{-1}$`} />,
  },
  {
    id: "27.",
    question: "One of the following is not a vector quantity. This one is :",

    optionA: "A) displacement",
    optionB: "B) speed",
    optionC: "C) acceleration",
    optionD: "D) velocity",
  },
  {
    id: "28.",
    question: "Which of the following could not be a unit of acceleration ?",

    optionA: <MathEq math={String.raw`A) $km/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $cm \, s^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) $km/s$`} />,
    optionD: <MathEq math={String.raw`D) $m/s^{2}$`} />,
  },
  {
    id: "29.",
    question:
      "A car travels 100 km at a speed of 60 km/h and returns with a speed of 40 km/h. Calculate the average speed for the whole journey.",

    optionA: "A) 48 km/h",
    optionB: "B) 24 km/h",
    optionC: "C) 50 km/h",
    optionD: "D) None",
  },
  {
    id: "30.",
    question:
      "A ball hits a wall horizontally at 6.0 m/s. It rebounds horizontally at 4.4 m/s. The ball is in contact with the wall for 0.040 s. What is the acceleration of the ball ?",

    optionA: <MathEq math={String.raw`A) -260$m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) +260$m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) -120$m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) +120$m/s^{2}$`} />,
  },
];
