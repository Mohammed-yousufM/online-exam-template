import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "admin", passw: "1000" },
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
  // Dubai Below
  { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  { sNO: "13", userID: "neeraj", passw: "1013" },
  { sNO: "14", userID: "abel", passw: "1014" },
  { sNO: "15", userID: "rayaan", passw: "1015" },
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq math={String.raw`Multiplicative inverse of $\frac{-a}{b}$ is`} />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-b}{a}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{b}{a}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{a}{b}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{-a}{b}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Simplify: $\left( \frac{3}{11} \, \times \frac{5}{6} \right) \: - \: \left( \frac{9}{12} \, \times \frac{4}{3} \right) \: + \: \left( \frac{5}{13} \, \times \frac{6}{15} \right) $`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $- \frac{117}{286}$`} />,
    optionB: <MathEq math={String.raw`B) $- \frac{303}{40}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{289}{492}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{17}{24}$`} />,
  },

  {
    id: "3.",
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
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Find the value of $\left \{ 6^{-1} \, + \, \left( \frac{3}{2}\right ) ^{-1}\right \}^{-1}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{-4}{13}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{9}{32}$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{6}{5}$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{19}{64}$`} />,
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Find $x$, if $\left(\frac{5}{11} \right )^{-3} \times \, \left(\frac{5}{11} \right )^{5} \, = \, \left(\frac{5}{11} \right )^{x}$`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 4",
    optionC: "C) 8",
    optionD: "D) 2",
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`Add: $5x^{2}-\frac{1}{3}x+\frac{5}{2}$ ; $-2x^{2}+\frac{1}{5}x-\frac{1}{6}$`}
      />
    ),

    optionA: (
      <MathEq math={String.raw`A) $3x^{2}+\frac{2x}{15}-\frac{7}{3}$`} />
    ),
    optionB: (
      <MathEq math={String.raw`B) $3x^{2}-\frac{2x}{15}+\frac{7}{3}$`} />
    ),
    optionC: (
      <MathEq math={String.raw`C) $3x^{2}+\frac{2x}{15}+\frac{7}{3}$`} />
    ),
    optionD: "D) None",
  },

  {
    id: "7.",
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
    id: "8.",
    question: (
      <MathEq
        math={String.raw`$x^{2}+\frac{1}{x^{2}}=62$, then $x+\frac{1}{x}=$`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) 4",
    optionC: "C) 6",
    optionD: "D) 8",
  },

  {
    id: "9.",
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
    id: "10.",
    question: (
      <MathEq math={String.raw`If $ab=6$, $a+b=5$ then $a^{2}+b^{2}=$`} />
    ),

    optionA: "A) 12",
    optionB: "B) 13",
    optionC: "C) 1",
    optionD: "D) 0",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`Find the value of $2x^{2} \, \times \, \frac{x^{2}y^{2}}{4} \, \times \, 2xy$  when $x=-1$, $y=-1$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) -1",
    optionC: "C) 2",
    optionD: "D) 4",
  },

  {
    id: "12.",
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
    id: "13.",
    question: (
      <MathEq math={String.raw`Subtract $4x^{2}-4x+4$ from $4x^{2}-4x+4$`} />
    ),

    optionA: <MathEq math={String.raw`A) $4x^{2}-4x+4$`} />,
    optionB: <MathEq math={String.raw`B) $8x^{2}-8x+8$`} />,
    optionC: "C) 0",
    optionD: "D) 1",
  },

  {
    id: "14.",
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
    id: "15.",
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
    id: "16.",
    question:
      "If a train travelling at 72 kmph is to be brought to rest in a distance of 200 metres, then its retardation should be",

    optionA: <MathEq math={String.raw`A) $20 ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) $10 ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) $2 ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) $1 ms^{-2}$`} />,
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`A body travels for 15 sec starting from rest with constant acceleration. If it travels distances $S_{1}, \, S_{2}$ and $S_{3}$ in the first five seconds, second five seconds and next five seconds respectively. The relation between $S_{1}, \, S_{2}$ and $S_{3}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $S_{1}=S_{2}=S_{3}$`} />,
    optionB: <MathEq math={String.raw`$B) 5S_{1}=3S_{2}=S_{3}$`} />,
    optionC: (
      <MathEq math={String.raw`$C) S_{1}=\frac{1}{3}S_{2}=\frac{1}{5}S_{3}$`} />
    ),
    optionD: (
      <MathEq math={String.raw`$S_{1}=\frac{1}{5}S_{2}=\frac{1}{3}S_{3}$`} />
    ),
  },

  {
    id: "18.",
    question:
      "A particle travels 10m in first 5 sec and 10m in next 3 sec. Assuming constant acceleration what is the distance travelled in next 2 sec",

    optionA: "A) 8.3 m",
    optionB: "B) 9.3 m",
    optionC: "C) 10.3 m",
    optionD: "D) None of above",
  },

  {
    id: "19.",
    question:
      "The velocity of a bullet is reduced from 200m/s to 100m/s while travelling through a wooden block of thickness 10cm. The retardation, assuming it to be uniform, will be",

    optionA: <MathEq math={String.raw`A)$10 \times 10 ^{4} \: m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B)$12 \times 10 ^{4} \: m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C)$13.5 \times 10 ^{4} \: m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D)$15 \times 10 ^{4} \: m/s^{2}$`} />,
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`A particle starts from rest, accelerates at $2 \: m/s^{2}$ for 10s and then goes for constant speed for 30s and then decelerates at $4 \: m/s^{2}$ till it stops. What is the distance travelled by it`}
      />
    ),

    optionA: "A) 750 m",
    optionB: "B) 800 m",
    optionC: "C)	700 m",
    optionD: "D)	850 m",
  },

  {
    id: "21.",
    question:
      "A car, moving with a speed of 50 km/hr, can be stopped by brakes after at least 6m. If the same car is moving at a speed of 100 km/hr, the minimum stopping distance is",

    optionA: "A) 6m",
    optionB: "B) 12m",
    optionC: "C) 18m",
    optionD: "D) 24m",
  },
  {
    id: "22.",
    question:
      "An object accelerates from rest to a velocity 27.5 m/s in 10 sec then find distance covered by object in next 10 sec",

    optionA: "A) 550 m",
    optionB: "B) 137.5 m",
    optionC: "C) 412.5 m",
    optionD: "D) 275 m",
  },
  {
    id: "23.",
    question:
      "A body is moving with uniform acceleration describes 40 m in the first 5 sec and 65 m in next 5 sec. Its initial velocity will be",

    optionA: "A) 4 m/s",
    optionB: "B) 2.5 m/s",
    optionC: "C) 5.5 m/s",
    optionD: "D) 11m/s",
  },
  {
    id: "24.",
    question:
      "A body starting from rest moves with constant acceleration. The ratio of distance covered by the body during the 5th sec to that covered in 5 sec is",

    optionA: "A) 9/25",
    optionB: "B) 3/5",
    optionC: "C) 25/9",
    optionD: "D) 1/25",
  },
  {
    id: "25.",
    question: "What determines the nature of the path followed by the particle",

    optionA: "A) Speed",
    optionB: "B) Velocity",
    optionC: "C) Acceleration",
    optionD: "D) None of these",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`An airplane accelerates down a runway $15 \: m/s^{2}$ for 12 s until it finally lifts off. The distance travelled before takeoff is`}
      />
    ),

    optionA: "A) 1730 m",
    optionB: "B) 1830 m",
    optionC: "C) 1930 m",
    optionD: "D) 2000 m",
  },
  {
    id: "27.",
    question:
      "A driver in a car travelling at 25 m/s sees a deer in the middle of the road 100 m away from him. What is the minimum acceleration that the brakes should provide so that he does not hit the deer?",

    optionA: <MathEq math={String.raw`A) $-2.3 m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $-2.7 m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $-3.1 m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $-5 m/s^{2}$`} />,
  },
  {
    id: "28.",
    question:
      "A cyclist reaches the top of hill at speed 5 m/s and travels downhill with constantacceleration, reaching the bottom in 8.3 s and speed 11.4 m/s. How long was the hill (total length down)?",

    optionA: "A) 52 m",
    optionB: "B) 62 m",
    optionC: "C) 78 m",
    optionD: "D) 68 m",
  },
  {
    id: "29.",
    question:
      "In an Olympic race two runners completed the 200 m dash in times 21.81 s, 22.03 s. What distance separated the runners at the finish line?",

    optionA: "A) 2 m",
    optionB: "B) 0.2 m",
    optionC: "C) 1.2 m",
    optionD: "D) 1 m",
  },
  {
    id: "30.",
    question:
      "Two rugby players are standing facing each other 80 m apart. If they both start running straight towards each other; one with speed 4 m/s and the other with 6 m/s, after what time will they collide?",

    optionA: "A) 4 s",
    optionB: "B) 6 s",
    optionC: "C) 2 s",
    optionD: "D) 8 s",
  },
];
