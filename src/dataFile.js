import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
// import i3 from "./I3.bmp";
// import i4 from "./I4.bmp";
// import i5 from "./I5.bmp";
// import i6 from "./I6.bmp";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.JPG";
import i6 from "./I6.png";
import i7 from "./I7.png";
import i8 from "./I8.png";
import i9 from "./I9.png";
import i10 from "./I10.png";
import i11 from "./I11.png";
import i12 from "./I12.png";
import i13 from "./I13.png";
import i14 from "./I14.png";
import i15 from "./I15.png";
import i16 from "./I16.png";
import i17 from "./I17.png";
import i18 from "./I18.png";
import i19 from "./I19.png";
import i20 from "./I20.png";
import i21 from "./I21.png";
import i23 from "./I23.png";

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
  { sNO: "42", userID: "adwaith", passw: "1042" },
  { sNO: "43", userID: "neekshitha", passw: "1043" },
  { sNO: "44", userID: "vaibhavi", passw: "1044" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "The quadratic equations whose roots are 2, 3 is",

    optionA: <MathEq math={String.raw`A) $x^{2}+5x+6=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}-5x+6=0$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}-5x-6=0$`} />,
    optionD: <MathEq math={String.raw`A) $x^{2}+5x-6=0$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`The roots of the quadratic equation $2x^{2}+x-6=0$ are`}
      />
    ),

    optionA: "A) -2, 3/2",
    optionB: "B) 2, -3/2",
    optionC: "C) 2, -2",
    optionD: "D) -2,-3/2",
  },

  {
    id: "3.",
    question: (
      <MathEq math={String.raw`The sum of roots of $100x^{2}-20x+1=0$`} />
    ),

    optionA: "A) -1/4",
    optionB: "B) 1/5",
    optionC: "C) 1/100",
    optionD: "D) 1/4",
  },

  {
    id: "4.",
    question: (
      <MathEq math={String.raw`The product of roots of $x^{2}-3x-1=0$`} />
    ),

    optionA: "A) 1",
    optionB: "B) -3",
    optionC: "C) -1",
    optionD: "D) 3",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Find the value of k, if $2x^{2}+kx+3=0$ has equal roots`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $2\sqrt{6}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{6}$`} />,
    optionC: "C) 12",
    optionD: "D) 0",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`The roots of the quadratic equation $2x^{2}-6x+3=0$ are`}
      />
    ),

    optionA: "A) real and distinct",
    optionB: "B) real and equal",
    optionC: "C) not real",
    optionD: "D) none",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`The roots of the quadratic equation $2x^{2}-3x+5=0$ are`}
      />
    ),

    optionA: "A) real and distinct",
    optionB: "B) real and equal",
    optionC: "C) not real",
    optionD: "D) none",
  },

  {
    id: "8.",
    question: <MathEq math={String.raw`The graph of $2x^{2}+3x+1=0$ is`} />,

    optionA: "A) open up",
    optionB: "B) open down",
    optionC: "C) open left",
    optionD: "D) open right",
  },

  {
    id: "9.",
    question: <MathEq math={String.raw`Graph of $y=-5x^{2}+7x+2$ is`} />,

    optionA: "A) open up",
    optionB: "B) open down",
    optionC: "C) open left",
    optionD: "D) open right",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`The maximum or minimum value of $ax^{2}+bx+c=0$ exists at x=`}
      />
    ),

    optionA: "A) b/a",
    optionB: "B) -b/a",
    optionC: "C) b/2a",
    optionD: "D) -b/2a",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`The maximum or minimum value of $ax^{2}+bx+c$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{4ac-b^{2}}{4a}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{4ac+b^{2}}{4a}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{4ac-b^{2}}{a}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{4ac+b^{2}}{a}$`} />,
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`If $\alpha$ and $\beta$ are roots of $ax^{2}+bx+c=0$ then $\left | \alpha - \beta \right |$ =`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\frac{\sqrt{b^{2}-4ac}}{\left | a \right |}$`}
      />
    ),
    optionB: <MathEq math={String.raw`B) $\frac{b^{2}-2ac}{a^{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{b}{a}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{c}{a}$`} />,
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`If $\alpha$ and $\beta$ are roots of $ax^{2}+bx+c=0$ then $\alpha ^{2} + \beta ^{2}$ =`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\frac{\sqrt{b^{2}-4ac}}{\left | a \right |}$`}
      />
    ),
    optionB: <MathEq math={String.raw`B) $\frac{b^{2}-2ac}{a^{2}}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{b}{a}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{c}{a}$`} />,
  },

  {
    id: "14.",
    question: (
      <MathEq math={String.raw`The maximum value of $-5x^{2}+2x+3$ is`} />
    ),

    optionA: "A) -16/5",
    optionB: "B) 16",
    optionC: "C) 5",
    optionD: "D) 16/5",
  },

  {
    id: "15.",
    question: <MathEq math={String.raw`SUm of roots of $ax^{2}+bx+c=0$ is`} />,

    optionA: "A) b/a",
    optionB: "B) -b/a",
    optionC: "C) c/a",
    optionD: "D) -c/a",
  },

  {
    id: "16.",
    question: [
      "The variation of velocity of a particle with time moving along a straight line is illustrated in the following figure. The  distance travelled by the  particle in four seconds is",
      <Image g={i1} />,
    ],

    optionA: "A) 60m",
    optionB: "B) 55m",
    optionC: "C) 25m",
    optionD: "D) 30m",
  },

  {
    id: "17.",
    question: [
      "The displacement of a particle as a function of time is shown in the figure. The figure shows that",
      <Image g={i2} />,
    ],

    optionA:
      "A) The particle starts with certain velocity but the motion is retarded and finally the particle stops",
    optionB: "B) The velocity of the particle is constant throughout",
    optionC: "C) The acceleration of the particle is constant throughout",
    optionD:
      "D) The particle starts with constant velocity, then motion is accelerated and finally the particle moves with another constant velocity",
  },

  {
    id: "18.",
    question: [
      "A ball is thrown vertically upwards. Which of the following graph/graphs represent velocity-time graph of the ball during its flight (air resistance is neglected)",
      <Image g={i3} />,
      <Image g={i23} />,
    ],

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "19.",
    question: [
      "The graph between the displacement   and time   for a particle moving in a straight line is shown in figure. During the interval   and  , the acceleration of the particle is",
      <Image g={i4} />,
      <Image g={i5} />,
    ],

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "20.",
    question: [
      "The   graph of a moving object is given in figure. The maximum acceleration is",
      <Image g={i6} />,
    ],

    optionA: <MathEq math={String.raw`A) $1 cm/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $2 cm/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $3 cm/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $6 cm/sec^{2}$`} />,
  },

  {
    id: "21.",
    question: ["The   graph shown in figure represents", <Image g={i7} />],

    optionA: "A) Constant velocity",
    optionB: "B) Velocity of the body is continuously changing",
    optionC: "C) Instantaneous velocity",
    optionD:
      "D) The body travels with constant speed upto time   and then stops",
  },
  {
    id: "22.",
    question: [
      "A lift is going up. The variation in the speed of the lift is as given in the graph. What is the height to which the lift takes the passengers",
      <Image g={i8} />,
    ],

    optionA: "A) 3.6m",
    optionB: "B) 28.8m",
    optionC: "C) 36.0m",
    optionD: "D) cannot be calculated from the above graph",
  },
  {
    id: "23.",
    question: [
      "Velocity-time (v-t) graph for a moving object is shown in the figure. Total displacement of the object during the time interval when there is non-zero acceleration and retardation is",
      <Image g={i9} />,
    ],

    optionA: "A) 60m",
    optionB: "B) 50m",
    optionC: "C) 30m",
    optionD: "D) 40m",
  },
  {
    id: "24.",
    question: [
      "Figures (i) and (ii) below show the displacement-time graphs of two particles moving along the x-axis. We can say that",
      <Image g={i10} />,
    ],

    optionA: "A) Both the particles are having a uniformly accelerated motion",
    optionB: "B) Both the particles are having a uniformly retarded motion",
    optionC:
      "C) Particle (i) is having a uniformly accelerated motion while particle (ii) is having a uniformly retarded motion",
    optionD:
      "D) Particle (i) is having a uniformly retarded motion while particle (ii) is having a uniformly accelerated motion",
  },
  {
    id: "25.",
    question: [
      "For the velocity-time graph shown in figure below the distance covered by the body in last two seconds of its motion is what fraction of the total distance covered by it in all the seven seconds",
      <Image g={i11} />,
    ],

    optionA: "A) 1/2",
    optionB: "B) 1/4",
    optionC: "C) 1/3",
    optionD: "D) 2/3",
  },
  {
    id: "26.",
    question: [
      "In the following graph, distance travelled by the body in metres is",
      <Image g={i12} />,
    ],

    optionA: "A) 200",
    optionB: "B) 250",
    optionC: "C) 300",
    optionD: "D) 400",
  },
  {
    id: "27.",
    question: "Velocity-time curve for a body projected vertically upwards is",

    optionA: "A) parabola",
    optionB: "B) ellipse",
    optionC: "C) hyperbola",
    optionD: "D) straight line",
  },
  {
    id: "28.",
    question: [
      "The displacement-time graph of moving particle is shown below",
      <Image g={i13} />,
      <div>
        The instantaneous velocity of the particle is negative at the point
      </div>,
    ],

    optionA: "A) D",
    optionB: "B) F",
    optionC: "C) C",
    optionD: "D) E",
  },
  {
    id: "29.",
    question: "Which graph represents the uniform acceleration",

    optionA: <Image g={i14} t="A" />,
    optionB: <Image g={i15} t="B" />,
    optionC: <Image g={i16} t="C" />,
    optionD: <Image g={i17} t="D" />,
  },
  {
    id: "30.",
    question:
      "Which of the following velocity-time graphs shows a realistic situation for a body in motion",

    optionA: <Image g={i18} t="A" />,
    optionB: <Image g={i19} t="B" />,
    optionC: <Image g={i20} t="C" />,
    optionD: <Image g={i21} t="D" />,
  },
];
