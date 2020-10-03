import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "1000" },
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
  // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // New Users - continue S.No.
  // { sNO: "16", userID: "srujana", passw: "1016" },
  // { sNO: "17", userID: "meghana", passw: "1017" }, //17
];

export const questionsAll = [
  {
    id: "1.",
    question: "Which one of the following equation is a quadratic",

    optionA: <MathEq math={String.raw`A) $x^{3}-x^{2}-x+5=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{4}-10=0$`} />,
    optionC: <MathEq math={String.raw`C) $7x^{2}=49$`} />,
    optionD: "D) None of the above",
  },

  {
    id: "2.",
    question: "Which one of the following equations has real roots",

    optionA: <MathEq math={String.raw`A) $2x^{2}-3x+4=0$`} />,
    optionB: <MathEq math={String.raw`B) $3x^{2}+4x+5=0$`} />,
    optionC: (
      <MathEq
        math={String.raw`C) $\left ( x-1 \right ) \left ( 2x-5 \right )=0$`}
      />
    ),
    optionD: "None of the above",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`Find the roots of the equation $2x^{2}-9x-18=0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{3}{2}$ and 6`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-3}{2}$ and -6`} />,
    optionC: <MathEq math={String.raw`C) $\frac{-3}{2}$ and 6`} />,
    optionD: <MathEq math={String.raw`D) $\frac{3}{2}$ and -6`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Which one of the following value of x satisfying the equation $x^{2}+12x+18=0$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 2",
    optionC: "C) -2",
    optionD: "D) -3",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`One root of $x^{2}-6kx+5=0$ is 5, then $k$ is`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) -2",
    optionC: "C) -1",
    optionD: "D) 1",
  },

  {
    id: "6.",
    question: "The quadratic equation whose roots are 3 and -1 is",

    optionA: <MathEq math={String.raw`A) $x^{2}-2x-3=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}-2x+3=0$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}+2x+3=0$`} />,
    optionD: <MathEq math={String.raw`D) $x^{2}+2x-3=0$`} />,
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`If $\left ( a+ \frac{1}{a} \right )^{2}=3$ then $a^{2}+\frac{1}{a^{2}}$ is`}
      />
    ),

    optionA: "A) 1",
    optionB: "A) -1",
    optionC: "A) 2",
    optionD: "A) 3",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`The standard formula for finding the roots of quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $x \, = \, \frac{b \pm \sqrt{b^{2}-4ac}}{2a} $`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $x \, = \, \frac{-b \pm \sqrt{b^{2}-4ac}}{2a} $`}
      />
    ),
    optionC: (
      <MathEq math={String.raw`C) $x \, = \, \frac{\sqrt{b^{2}-4ac}}{2a} $`} />
    ),
    optionD: <MathEq math={String.raw`D) $x \, = \, \frac{-b \pm }{2a} $`} />,
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If the roots of the quadratic equation $ax^{2}+bx+c=0$ are real and equal then`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $b^{2}=4a$`} />,
    optionB: <MathEq math={String.raw`B) $b^{2}=4ac$`} />,
    optionC: <MathEq math={String.raw`C) $b^{2}+4ac=0$`} />,
    optionD: "None of the above",
  },

  {
    id: "10.",
    question: "if 2x+10 = 20, then x=",

    optionA: "A) -5",
    optionB: "B) 10",
    optionC: "C) 5",
    optionD: "D) -10",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Solve for x: $\frac{x}{2} + \frac{1}{2}=\frac{1}{2}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 0",
    optionD: "D) 2",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`Find x from $\frac{2x}{5}+ \frac{1}{2}= \frac{1}{4}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{5}{4}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-5}{4}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{5}{8}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-5}{8}$`} />,
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`The value of $\sqrt{\frac{324}{81}} \, + \, \sqrt{\frac{324}{81}}$ is`}
      />
    ),

    optionA: "A) 4",
    optionB: "B) 12",
    optionC: "C) 6",
    optionD: "D) 18",
  },

  {
    id: "14.",
    question: (
      <MathEq math={String.raw`Degree of the polynomial $4x^{4}+5x+7$`} />
    ),

    optionA: "A) 4",
    optionB: "B) 1",
    optionC: "C) 0",
    optionD: "D) 7",
  },

  {
    id: "15.",
    question: (
      <MathEq math={String.raw`$\left(3^{0}+4^{-1} \right )\times 2^{2}=$`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{5}$`} />,
    optionB: "B) 4",
    optionC: "C) 5",
    optionD: <MathEq math={String.raw`D) $\frac{1}{4}$`} />,
  },

  {
    id: "16.",
    question:
      "A body goes from A to B with velocity 20 m/s and from B to A with velocity 30 m/s. Its average velocity is",

    optionA: "A) 20 m/s",
    optionB: "B) 25 m/s",
    optionC: "C) 30 m/s",
    optionD: "D) zero",
  },

  {
    id: "17.",
    question:
      "A body covers half distance with speed 5 m/s and next half distance with speed 10 m/s. Its average speed is",

    optionA: "A) 5 m/s",
    optionB: "B) 10 m/s",
    optionC: "C) 12.5 m/s",
    optionD: "D) 6.6 m/s",
  },

  {
    id: "18.",
    question:
      "A boy walks to his school at a distance of 6 km with constant speed of 2.5 km/hour and walks back with a constant speed of 4 km/hr. His average speed for round trip expressed in km/hour, is",

    optionA: "A)	24/13",
    optionB: "B)	40/13",
    optionC: "C)	3",
    optionD: "D)	1/2",
  },

  {
    id: "19.",
    question: "The instantaneous velocity of a body can be measured",

    optionA: "A)	Graphically",
    optionB: "B)	Vectorially",
    optionC: "C)	By speedometer",
    optionD: "D)	None of these",
  },

  {
    id: "20.",
    question: "The acceleration of a moving body can be found from",

    optionA: "A)	Area under velocity-time graph",
    optionB: "B)	Area under distance-time graph",
    optionC: "C)	Slope of the velocity-time graph",
    optionD: "D)	Slope of distance-time graph",
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`The initial velocity of the particle is $\textit{10 m/sec}$ and its retardation is $2 \, m/sec^{2}$. The distance moved by the particle in $\textit{5th}$ second of its motion is`}
      />
    ),

    optionA: "A) 1m",
    optionB: "B) 19m",
    optionC: "C) 50m",
    optionD: "D) 75m",
  },
  {
    id: "22.",
    question:
      "A motor car moving with a uniform speed of 20m/sec comes to stop on the application of brakes after travelling a distance of 10m. Its acceleration is",

    optionA: <MathEq math={String.raw`A) $20 \, m/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $-20 \, m/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $-40 \, m/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $+2 \, m/sec^{2}$`} />,
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`A particle is dropped under gravity from rest from a height $h \, \, \left ( g = 9.8 m/sec^{2}\right )$ and it travels a distance $9h/25$ in the last second, the height $h$ is`}
      />
    ),

    optionA: "A) 100 m",
    optionB: "B) 122.5 m",
    optionC: "C) 167.5 m",
    optionD: "D) 145 m",
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`A ball is thrown vertically upwards from the top of a tower at $4.9 ms^{-1}$. It strikes the pond near the base of the tower after 3 seconds. The height of the tower is`}
      />
    ),

    optionA: "A) 73.5 m",
    optionB: "B) 44.1 m",
    optionC: "C) 29.4 m",
    optionD: "D) None of these",
  },
  {
    id: "25.",
    question:
      "A stone is shot straight upward with a speed of 20 m/sec from a tower 200 m high. The speed with which it strikes the ground is approximately",

    optionA: "A) 60 m/sec",
    optionB: "B) 65 m/sec",
    optionC: "C) 70 m/sec",
    optionD: "D) 75 m/sec",
  },
  {
    id: "26.",
    question:
      "A body freely falling from the rest has a velocity ‘v’ after it falls through a height ‘h’. The distance it has to fall down for its velocity to become double, is",

    optionA: "A) 2h",
    optionB: "B) 4h",
    optionC: "C) 6h",
    optionD: "D) 8h",
  },
  {
    id: "27.",
    question:
      "A lift is going up. The variation in the speed of the lift is as given in the graph. What is the height to which the lift takes the passengers",
    image1: <Image g={i1} />,

    optionA: "A) 3.6 m",
    optionB: "B) 28.8 m",
    optionC: "C) 36.0 m",
    optionD: "D) Cannot be calculated from the above graph",
  },
  {
    id: "28.",
    question:
      "The velocity-time graph of a body moving in a straight line is shown in the figure. The displacement and distance travelled by the body in 6 sec are respectively",
    image1: <Image g={i2} />,

    optionA: "A) 8m, 16m",
    optionB: "B) 16m, 8m",
    optionC: "C) 16m, 16m",
    optionD: "D) 8m, 8m",
  },
  {
    id: "29.",
    question:
      "Velocity-time (v-t) graph for a moving object is shown in the figure. Total displacement of the object during the time interval when there is non-zero acceleration and retardation is",
    image1: <Image g={i3} />,

    optionA: "A) 60m",
    optionB: "B) 50m",
    optionC: "C) 30m",
    optionD: "D) 40m",
  },
  {
    id: "30.",
    question:
      "The v-t plot of a moving object is shown in the figure. The average velocity of the object during the first 10 seconds is",
    image1: <Image g={i4} />,

    optionA: "A) 0",
    optionB: <MathEq math={String.raw`B) $2.5 \, ms^{-1}$`} />,
    optionC: <MathEq math={String.raw`C) $5 \, ms^{-1}$`} />,
    optionD: <MathEq math={String.raw`D) $2 \, ms^{-1}$`} />,
  },
];
