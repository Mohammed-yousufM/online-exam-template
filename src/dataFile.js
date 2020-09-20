import React from "react";
import MathEq from "./MathEq";

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
  // // Dubai Below
  { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  { sNO: "13", userID: "neeraj", passw: "1013" },
  { sNO: "14", userID: "abel", passw: "1014" },
  { sNO: "15", userID: "rayaan", passw: "1015" },
  // // New Users - continue S.No.
  { sNO: "16", userID: "srujana", passw: "1016" },
];

export const questionsAll = [
  {
    id: "1.",
    question: "The standard form of quadratic equation is",

    optionA: (
      <MathEq math={String.raw`A) $ax^{2} \, + \, bx \,+\, c \,= \,0$`} />
    ),
    optionB: <MathEq math={String.raw`B) $ax \, + \, b \,= \,0$`} />,
    optionC: (
      <MathEq
        math={String.raw`C) $ax^{3} \, + \, bx^{2} \,+\, cx \, + \, d \, = \,0$`}
      />
    ),
    optionD: "D) None of these",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`In quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $a,b,c \: \in  \: R, a=0$`} />,
    optionB: <MathEq math={String.raw`B) $a,b,c \: \in  \: R, a \neq 0$`} />,
    optionC: "C) Both",
    optionD: "D) None of these",
  },

  {
    id: "3.",
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
      <MathEq math={String.raw`B) $x \, = \, \frac{\sqrt{b^{2}-4ac}}{2a} $`} />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $x \, = \, \frac{-b \pm \sqrt{b^{2}-4ac}}{2a} $`}
      />
    ),
    optionD: <MathEq math={String.raw`D) $x \, = \, \frac{-b  }{2a} $`} />,
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Sum of the roots of the quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{c}{a}$`} />,
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: <MathEq math={String.raw`D) $\frac{-b}{a}$`} />,
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Product of the roots of the quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{c}{a}$`} />,
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: <MathEq math={String.raw`D) $\frac{-b}{a}$`} />,
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`In a quadratic equation $ax^{2} \, + \, bx \,+\, c \,= \,0$ the discriminant D = `}
      />
    ),

    optionA: <MathEq math={String.raw`A) $b^{2}+4ac$`} />,
    optionB: <MathEq math={String.raw`B) $b^{2}-4ac$`} />,
    optionC: <MathEq math={String.raw`C) $b^{2} \times 4ac$`} />,
    optionD: <MathEq math={String.raw`D) $-b^{2}-4ac$`} />,
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\sqrt{10+\sqrt{25+\sqrt{108+\sqrt{154+\sqrt{225}}}}}$`}
      />
    ),

    optionA: "A) 4",
    optionB: "B) 5",
    optionC: "C) 6",
    optionD: "D) 7",
  },

  {
    id: "8.",
    question: (
      <MathEq math={String.raw`If $ab=6$, $a+b=5$ then $a^{2}+b^{2}=$`} />
    ),

    optionA: "A) 12",
    optionB: "B) 0",
    optionC: "C) 1",
    optionD: "D) 13",
  },

  {
    id: "9.",
    question: "Add ab-bc, bc-ca,  ca-ab",

    optionA: "A) 0",
    optionB: "B) ab+bc+ca",
    optionC: "C) ab-bc",
    optionD: "D) -ab-bc-ca",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`The value of the product $\left ( 4a^{2} \, + \, 3b \right ) \times \left ( 4a^{2} \, + \, 3b \right )$ at a=1, b=2 is`}
      />
    ),

    optionA: "A) 90",
    optionB: "B) 100",
    optionC: "C) 10",
    optionD: "D) 1",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`If $a-\frac{1}{a} \, = 2$, then $a^{2}+\frac{1}{a^{2}}=$`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) 4",
    optionC: "C) 6",
    optionD: "D) 8",
  },

  {
    id: "12.",

    question: "What is multiplicative inverse of 0",
    optionA: "A) 0",
    optionB: "B) 1",
    optionC: "C) -1",
    optionD: "D) Does not exist",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`Find $\left ( 2^{-1}+3^{-1}+4^{-1} \right )^{0}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: <MathEq math={String.raw`C) $\frac{1}{30}$`} />,
    optionD: "D) 0",
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`If a = 7, then the value of $-\left ( \frac{1-2a}{a-5} \right )$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-13}{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{13}{2}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{-15}{2}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{15}{2}$`} />,
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`Find $x$, if $\left(\frac{5}{11} \right )^{-3} \times \, \left(\frac{5}{11} \right )^{5} \, = \, \left(\frac{5}{11} \right )^{x}$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 4",
    optionC: "C) 2",
    optionD: "D) 8",
  },

  {
    id: "16.",
    question:
      "An object accelerates from rest to a velocity 27.5 m/s in 10 sec then find distance covered by object in next 10 sec",

    optionA: "A) 550 m",
    optionB: "B) 137.5 m",
    optionC: "C) 412.5 m",
    optionD: "D) 275 m",
  },

  {
    id: "17.",
    question:
      "A body is moving with uniform acceleration describes 40 m in the first 5 sec and 65 m in next 5 sec. Its initial velocity will be",

    optionA: "A) 4 m/s",
    optionB: "B) 2.5 m/s",
    optionC: "C) 5.5 m/s",
    optionD: "D) 11 m/s",
  },

  {
    id: "18.",
    question:
      "Speed of two identical cars are u and 4u at a specific instant. The ratio of the respective distances in which the two cars are stopped from that instant is",

    optionA: "A) 1 : 1",
    optionB: "B) 1 : 4",
    optionC: "C) 1 : 8",
    optionD: "D) 1 : 16",
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`A man is $45 m$ behind the bus when the bus start accelerating from rest with acceleration $2.5 \, m/s^{2}$ With what minimum velocity should the man start running to catch the bus?`}
      />
    ),

    optionA: "A) 12 m/s",
    optionB: "B) 14 m/s",
    optionC: "C) 15 m/s",
    optionD: "D) 16 m/s",
  },

  {
    id: "20.",
    question:
      "If a car at rest accelerates uniformly to a speed of  144 km/h in  20 s. Then it covers a distance of ",

    optionA: "A) 20 m",
    optionB: "B) 400 m",
    optionC: "C) 1440 m",
    optionD: "D) 2880 m",
  },

  {
    id: "21.",
    question:
      "An iron ball and a wooden ball of the same radius are released from the same height in vacuum. They take the same time to reach the ground. The reason for this is",

    optionA:
      "A) Acceleration due to gravity in vacuum is same  irrespective of the size and mass of the body",
    optionB:
      "B) Acceleration due to gravity in vacuum depends upon the mass of the body",
    optionC: "C) There is no acceleration due to gravity in vacuum",
    optionD:
      "D) In vacuum there is a resistance offered to the motion of the body and this resistance depends upon the mass of the body",
  },
  {
    id: "22.",
    question:
      "A body is released from a great height and falls freely towards the earth. Another body is released from the same height exactly one second later. The separation between the two bodies, two seconds after the release of the second body is",

    optionA: "A) 4.9 m",
    optionB: "B) 9.8 m",
    optionC: "C) 19.6 m",
    optionD: "D) 24.5 m",
  },
  {
    id: "23.",
    question:
      "An object is projected upwards with a velocity of 100 m/s. It will strike the ground after (approximately)",

    optionA: "A) 10 sec",
    optionB: "B) 20 sec",
    optionC: "C) 15 sec",
    optionD: "D) 5 sec",
  },
  {
    id: "24.",
    question:
      "A stone dropped from the top of the tower touches the ground in 4 sec. The height of the tower is about",

    optionA: "A) 80 m",
    optionB: "B) 40 m",
    optionC: "C) 20 m",
    optionD: "D) 160 m",
  },
  {
    id: "25.",
    question:
      "A body is released from the top of a tower of height h. It takes t sec to reach the ground. Where will be the ball after time t/2 sec ",

    optionA: "A) At h/2 from the ground",
    optionB: "B) At h/4 from the ground",
    optionC: "C) Depends upon mass and volume of the body",
    optionD: "D) At 3h/4 from the ground",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A particle is projected up with an initial velocity of $80 ft/sec.$ The ball will be at a height of $96 ft$ from the ground after ($g=32 ft/s^{2}$)`}
      />
    ),

    optionA: "A) 2.0 and 3.0 sec",
    optionB: "B) Only at 3.0 sec",
    optionC: "C) Only at 2.0 sec",
    optionD: "D) After 1 and 2 sec",
  },
  {
    id: "27.",
    question:
      "A body starts to fall freely under gravity. The distances covered by it in first, second and third second are in ratio",

    optionA: "A) 1:3:5",
    optionB: "B) 1:2:3",
    optionC: "C) 1:4:9",
    optionD: "D) 1:5:6",
  },
  {
    id: "28.",
    question:
      "A ball is dropped downwards. After 1 second another ball is dropped downwards from the same point. What is the distance between them after 3 seconds",

    optionA: "A) 25 m",
    optionB: "B) 20 m",
    optionC: "C) 50 m",
    optionD: "D) 9.8 m",
  },
  {
    id: "29.",
    question:
      "A stone is thrown with an initial speed of 4.9 m/s from a bridge in vertically upward direction. It falls down in water after 2 sec. The height of the bridge is",

    optionA: "A) 4.9 m",
    optionB: "B) 9.8 m",
    optionC: "C) 19.8 m",
    optionD: "D) 24.7 m",
  },
  {
    id: "30.",
    question:
      "A stone is shot straight upward with a speed of 20 m/sec from a tower 200 m high. The speed with which it strikes the ground is approximately",

    optionA: "A) 60 m/sec",
    optionB: "B) 65 m/sec",
    optionC: "C) 70 m/sec",
    optionD: "D) 75 m/sec",
  },
];
