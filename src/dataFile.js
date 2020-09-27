import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
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

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "1000" },
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
  // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // New Users - continue S.No.
  { sNO: "16", userID: "srujana", passw: "1016" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "Which one of the following equation is quadratic",

    optionA: <MathEq math={String.raw`A) $11=-4x^{2}-x^{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{-3}{y} -4 =0$`} />,
    optionC: <MathEq math={String.raw`C) $n-3=4n$`} />,
    optionD: <MathEq math={String.raw`D) $-3y^{2}-2y-7=0$`} />,
  },

  {
    id: "2.",
    question: "Which one of the following equation is not a quadratic",

    optionA: <MathEq math={String.raw`A) $q^{2}-4=-3$`} />,
    optionB: <MathEq math={String.raw`B) $y^{2}-4=11y$`} />,
    optionC: <MathEq math={String.raw`C) $4-y=3$`} />,
    optionD: <MathEq math={String.raw`D) $-3y^{2}-2y-7=0$`} />,
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`The factors of the quadratic equtaion: $x^{2}-x-12=0$ is`}
      />
    ),

    optionA: "(x+3)(x+4)=0",
    optionB: "(x+3)(x-4)=0",
    optionC: "(x-3)(x-4)=0",
    optionD: "(x-3)(x+4)=0",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Standard form of quadratic equtaion: $7-4x=x^{2}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $x^{2}+4x-7=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}+4x+7=0$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}-4x-7=0$`} />,
    optionD: "D) None of these",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`The value of the discriminant of $x^{2}+x+1=0$ is`}
      />
    ),

    optionA: "A) -3",
    optionB: "B) -4",
    optionC: "C) -2",
    optionD: "D) -5",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`The value of the discriminant of $x^{2}-3x+2=0$ is`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) 1",
    optionC: "C) 0",
    optionD: "D) 17",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`If one root of the quadratic equation $kx^{2}-7x+12=0$ is 3, then find the value of k`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) -1",
    optionC: "C) 1",
    optionD: "D) 5",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Nature of roots of quadratic equation $y^{2}-4y-1=0$ is`}
      />
    ),

    optionA: "A) Real and Equal",
    optionB: "B) Not Real",
    optionC: "C) Cannot be determined",
    optionD: "D) Real and Distinct",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Find the quadratic equation whose roots are $\frac{1}{2}$ and $\frac{-1}{2}$`}
      />
    ),

    optionA: (
      <MathEq math={String.raw`A) $x^{2}+\frac{1}{4}x+\frac{1}{4}=0$`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) $x^{2}-\frac{1}{4}x+\frac{1}{4}=0$`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $x^{2}+\frac{1}{4}x-\frac{1}{4}=0$`} />
    ),
    optionD: <MathEq math={String.raw`D) $x^{2}-\frac{1}{4}=0$`} />,
  },

  {
    id: "10.",
    question: "Find the quadratic equation whose roots are 3 and 10",

    optionA: <MathEq math={String.raw`A) $x^{2}+13x+30=0$`} />,
    optionB: <MathEq math={String.raw`B) $x^{2}-13x-30=0$`} />,
    optionC: <MathEq math={String.raw`C) $x^{2}-13x+30=0$`} />,
    optionD: <MathEq math={String.raw`D) $x^{2}+13x-30=0$`} />,
  },

  {
    id: "11.",
    question: (
      <MathEq math={String.raw`The values of a,b,c from $x^{2}-x-3=0$ is`} />
    ),

    optionA: "A) 1,1,3",
    optionB: "B) 1,-1,-3",
    optionC: "C) -1,-1,-3",
    optionD: "D) -1,1,-3",
  },

  {
    id: "12.",
    question: (
      <MathEq math={String.raw`Additive inverse of $\frac{1}{5}$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-1}{5}$`} />,
    optionB: "B) 5",
    optionC: <MathEq math={String.raw`C) $\frac{1}{5}$`} />,
    optionD: "D) -5",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`$\sqrt{\frac{225}{729}}-\sqrt{\frac{25}{144}}=$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{15}{108}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{108}{15}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{15}{12}$`} />,
    optionD: "D) 1",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$\left (3^{-7}\div 3^{-10}\right ) \, \times \, 3^{-5}=$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{1}{9}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{1}{27}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{1}{81}$`} />,
  },

  {
    id: "15.",
    question: (
      <MathEq math={String.raw`$\left(3^{0}+4^{-1} \right )\times 2^{2}=$`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{1}{5}$`} />,
    optionB: "B) 4",
    optionC: "C) 5",
    optionD: <MathEq math={String.raw`A) $\frac{1}{4}$`} />,
  },

  {
    id: "16.",
    question:
      "The variation of velocity of a particle with time moving along a straight line is illustrated in the following figure. The  distance travelled by the  particle in four seconds is",
    image1: <Image g={i1} />,

    optionA: "A) 60 m",
    optionB: "B) 55 m",
    optionC: "C) 25 m",
    optionD: "D) 30 m",
  },

  {
    id: "17.",
    question:
      "The displacement of a particle as a function of time is shown in the figure. The figure shows that",
    image1: <Image g={i2} />,

    optionA:
      "A) The particle starts with certain velocity but the motion is retarded and finally the particle stops",
    optionB: "B) The velocity of the particle is constant throughout",
    optionC: "C) The acceleration of the particle is constant throughout",
    optionD:
      "D) The particle starts with constant velocity, then motion is accelerated and finally the particle moves with another constant velocity",
  },

  {
    id: "18.",
    question:
      "A ball is thrown vertically upwards. Which of the following graph/graphs represent velocity-time graph of the ball during its flight (air resistance is neglected)",
    image1: <Image g={i3} />,
    image2: <Image g={i4} />,

    optionA: "A) A",
    optionB: "B) B",
    optionC: "C) C",
    optionD: "D) D",
  },

  {
    id: "19.",
    question: "The x-t graph shown in figure represents",
    image1: <Image g={i5} />,

    optionA: "A) Constant velocity",
    optionB: "B) Velocity of the body is continuously changing",
    optionC: "C) Instantaneous velocity",
    optionD: (
      <MathEq
        math={String.raw`D) The body travels with constant speed upto time $t_{1}$ and then stops`}
      />
    ),
  },

  {
    id: "20.",
    question:
      "Figures (i) and (ii) below show the displacement-time graphs of two particles moving along the x-axis. We can say that",
    image1: <Image g={i6} />,

    optionA: "A) Both the particles are having a uniformly accelerated motion",
    optionB: "B) Both the particles are having a uniformly retarded motion",
    optionC:
      "C) Particle (i) is having a uniformly accelerated motion while particle (ii) is having a uniformly retarded motion",
    optionD:
      "D) Particle (i) is having a uniformly retarded motion while particle (ii) is having a uniformly accelerated motion",
  },

  {
    id: "21.",
    question:
      "In the following graph, distance travelled by the body in metres is ",
    image1: <Image g={i7} />,

    optionA: "A) 200",
    optionB: "B) 250",
    optionC: "C) 300",
    optionD: "D) 400",
  },
  {
    id: "22.",
    question: "Which of the following graph represents uniform motion ",

    optionA: <Image g={i8} t="A) " />,
    optionB: <Image g={i9} t="B) " />,
    optionC: <Image g={i10} t="C) " />,
    optionD: <Image g={i11} t="D) " />,
  },
  {
    id: "23.",
    question:
      "Which of the following velocity-time graphs shows a realistic situation for a body in motion",

    optionA: <Image g={i12} t="A) " />,
    optionB: <Image g={i13} t="B) " />,
    optionC: <Image g={i14} t="C) " />,
    optionD: <Image g={i15} t="D) " />,
  },
  {
    id: "24.",
    question:
      "Two balls of same size but the density of one is greater than that of the other are dropped from the same height, then which ball will reach the earth first (air resistance is negligible)",

    optionA: "A) Heavy ball",
    optionB: "B) Light ball",
    optionC: "C) Both simultaneously",
    optionD: "D) Will depend upon the density of the balls ",
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`If a body is thrown up with the velocity of $15 \, m/s$ then maximum height attained by the body is (g = $10 m/s^{2}$)`}
      />
    ),

    optionA: "A) 11.25 m",
    optionB: "B) 16.2 m",
    optionC: "C) 24.5 m",
    optionD: "D) 7.62 m",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A body falls from rest in the gravitational field of the earth. The distance travelled in the fifth second of its motion is (g = $10 m/s^{2}$)`}
      />
    ),

    optionA: "A) 25 m",
    optionB: "B) 45 m",
    optionC: "C) 90 m",
    optionD: "D) 125 m",
  },
  {
    id: "27.",
    question:
      "A body is thrown vertically up from the ground. It reaches a maximum height of 100m in 5sec. After what time it will reach the ground from the maximum height position",

    optionA: "A) 1.2 sec",
    optionB: "B) 5 sec",
    optionC: "C) 10 sec",
    optionD: "D) 25 sec",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`28.	A body projected vertically upwards with a velocity u returns to the starting point in 4 seconds. If $g = 10 m/s^{2}$, the value of u is`}
      />
    ),

    optionA: "A) 5 m/sec",
    optionB: "B) 10 m/sec",
    optionC: "C) 15 m/sec",
    optionD: "D) 20 m/sec",
  },
  {
    id: "29.",
    question:
      "A stone is shot straight upward with a speed of 20 m/sec from a tower 200 m high. The speed with which it strikes the ground is approximately",

    optionA: "A) 60 m/sec",
    optionB: "B) 65 m/sec",
    optionC: "C) 70 m/sec",
    optionD: "D) 75 m/sec",
  },
  {
    id: "30.",
    question:
      "A ball is dropped downwards. After 1 second another ball is dropped downwards from the same point. What is the distance between them after 3 seconds",

    optionA: "A) 25 m",
    optionB: "B) 20 m",
    optionC: "C) 50 m",
    optionD: "D) 9.8 m",
  },
];
