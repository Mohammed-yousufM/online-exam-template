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
    question: (
      <MathEq
        math={String.raw`Solve: $\frac{x}{2}-\frac{1}{5}=\frac{x}{3}+\frac{1}{4}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $\frac{10}{27}$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{27}{10}$`} />,
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "2.",
    question: "Solve: 3x=2x+18",

    optionA: "A) 18",
    optionB: "B) -18",
    optionC: "C) 12",
    optionD: "D) -12",
  },

  {
    id: "3.",
    question: "Solve: 2x-1=14-x",

    optionA: "A) 5",
    optionB: "B) -5",
    optionC: "C) 12",
    optionD: "D) 3",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}} = \frac{c_{1}}{c_{2}}$ then the the two lines $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ are`}
      />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "5.",
    question: <MathEq math={String.raw`The lines $x+y=8$, $x-y=2$ are`} />,

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "6.",
    question: (
      <MathEq math={String.raw`The lines $2x-y+1=0$, $2x-y+4=0$ are`} />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "7.",
    question: `Write the mathematical form using two variables: "The cost of two tables and 5 chairs is 2200"`,

    optionA: "A) x+y=2200",
    optionB: "B) 2x+y=2200",
    optionC: "C) 2x+5y=2200",
    optionD: "D) None",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}}=\frac{c_{1}}{c_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}} \neq \frac{b_{1}}{b_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}} \neq \frac{c_{1}}{c_{2}}$ then the equations $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ have`}
      />
    ),

    optionA: "A) Unique solution",
    optionB: "B) Infinite many solutions",
    optionC: "C) No solution",
    optionD: "D) None",
  },

  {
    id: "11.",
    question: "Solve 8x+5y=9, 3x+2y=4",

    optionA: "A) x= -2, y= 5",
    optionB: "B) x= -1, y= 7",
    optionC: "C) x= 2, y= 3",
    optionD: "D) x= 9, y= 4",
  },

  {
    id: "12.",
    question:
      "For what value of k, the system of equations kx-y-2=0 and 6x-2y-3=0 has a unique solution",

    optionA: <MathEq math={String.raw`A) $k\neq 4$`} />,
    optionB: <MathEq math={String.raw`B) $k\neq 3$`} />,
    optionC: <MathEq math={String.raw`C) $k\neq 5$`} />,
    optionD: <MathEq math={String.raw`D) $k\neq 2$`} />,
  },

  {
    id: "13.",
    question:
      "For what value of k, the system of equations x+2y+7=0 and 2x+ky+14=0 has an infinite number solutions?",

    optionA: "A) k= 2",
    optionB: "B) k= 4",
    optionC: "C) k= 3",
    optionD: "D) k= 7",
  },

  {
    id: "14.",
    question:
      "For what value of k, the system of equations kx-10y-3=0 and 3x-5y-7=0 has no solution?",

    optionA: "A) k= 6",
    optionB: "B) k= 4",
    optionC: "C) k= 2",
    optionD: "D) k= 5",
  },

  {
    id: "15.",
    question:
      "In a fraction, if unity is added to the numerator and subtracted from the denominator, it becomes 2/3. Instead, if unity is subtracted from the numerator and added to the denominator, it becomes 1/2. Find the fraction.",

    optionA: "A) 19/11",
    optionB: "B) 11/19",
    optionC: "C) 2/19",
    optionD: "D) 10/19",
  },

  {
    id: "16.",
    question:'A man goes 10m towards North, then 20m towards east then displacement is',

    optionA:'A) 22.5m',
    optionB:'B) 25m',
    optionC:'C) 25.5m',
    optionD:'D) 30m',
  },

  {
    id: "17.",
    question:"An athlete completes one round of a circular track of radius R in 40 sec. What will be his displacement at the end of 2 min. 20 sec",

    optionA:'A) Zero',
    optionB:'B) 2R ',
    optionC:<MathEq math={String.raw`C) $2\pi$R`} />,
    optionD: <MathEq math={String.raw`D) $7 \pi$R`} />,
  },
  
  {
    id: "18.",
    question:"A car travels from A to B at a speed of 20 km/hr and returns at a speed of 30 km/hr. The average speed of the car for the  whole journey is",

    optionA:'A) 25 km/hr',
    optionB:'B) 24 km/hr',
    optionC:'C) 50 km/hr',
    optionD:'D) 5 km/hr',
  },
  
  {
    id: "19.",
    question:"A boy walks to his school at a distance of 6 km with constant speed of 2.5 km/hour and walks back with a constant speed of 4 km/hr. His average speed for round trip expressed in km/hour, is ",

    optionA:'A) 24/13',
    optionB:'B) 40/13',
    optionC:'C) 3',
    optionD:'D) 1/2',
  },
  
  {
    id: "20.",
    question:"A particle moves for 20 seconds with velocity 3 m/s and then velocity 4 m/s for another 20 seconds and finally moves with velocity 5 m/s for next 20 seconds. What is the average velocity of the particle",

    optionA:'A) 3 m/s',
    optionB:'B) 4 m/s',
    optionC:'C) 5 m/s',
    optionD:'D) Zero',
  },

  {
    id: "21.",
    question:["Which of the following options is correct for the object having a straight line motion represented by the following graph", <Image g={i1} />],

    optionA:'A) The object moves with constantly increasing velocity from O to A and then it moves with constant velocity.',
    optionB:'B) Velocity of the object increases uniformly',
    optionC:'C) Average velocity is zero',
    optionD:'D) The graph shown is impossible',
  },
  {
    id: "22.",
    question:<MathEq math={String.raw`The initial velocity of the particle is $10 m/sec$  and its retardation is $2 m/sec^{2}$. The distance moved by the particle in 5th second of its motion is`} />,

    optionA:'A) 1m',
    optionB:'B) 19m',
    optionC:'C) 50m',
    optionD:'D) 75m',
  },
  {
    id: "23.",
    question:"A motor car moving with a uniform speed of 20m/sec comes to stop on the application of brakes after travelling a distance of 10m Its acceleration is",

    optionA: <MathEq math={String.raw`A) $20 m/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $-20 m/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $-40 m/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $+2 m/sec^{2}$`} />,
  },
  {
    id: "24.",
    question:"Which of the following four statements is false",

    optionA:'A) A body can have zero velocity and still be accelerated',
    optionB:'B) A body can have a constant velocity and still have a varying speed',
    optionC:'C) A body can have a constant speed and still have a varying velocity',
    optionD:'D) The direction of the velocity of a body can change when its acceleration is constant',
  },
  {
    id: "25.",
    question:<MathEq math={String.raw`A body moves from rest with a constant acceleration of $5 m/sec^{2}$. Its instantaneous speed (in m/s) at the end of 10 sec  is`} />,

    optionA:'A) 50',
    optionB:'B) 5',
    optionC:'C) 2',
    optionD:'D) 0.5',
  },
  {
    id: "26.",
    question:"A boggy of uniformly moving train is suddenly detached from train and stops after covering some distance. The distance covered by the boggy and distance covered by the train in the same time has relation",

    optionA:'A) Both will be equal',
    optionB:'B) First will be half of second',
    optionC:'C) First will be 1/4 of second',
    optionD:'D) No definite ratio',
  },
  {
    id: "27.",
    question:"A body starts from rest. What is the ratio of the distance travelled by the body during the 4th and 3rd second",

    optionA:'A) 7/5',
    optionB:'B) 5/7',
    optionC:'C) 7/3',
    optionD:'D) 3/7',
  },
  {
    id: "28.",
    question:"If a train travelling at 72 kmph is to be brought to rest in a distance of 200 metres, then its retardation should be ",

    optionA: <MathEq math={String.raw`A) $20 ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) $10 ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) $2 ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) $1 ms^{-2}$`} />,
  },
  {
    id: "29.",
    question:"Acceleration of a particle changes when",

    optionA:'A) Direction of velocity changes',
    optionB:'B) Magnitude of velocity changes',
    optionC:'C) Both of above',
    optionD:'D) Speed changes',
  },
  {
    id: "30.",
    question:"The velocity of a bullet is reduced from 200m/s to 100m/s while travelling through a wooden block of thickness 10cm. The retardation, assuming it to be uniform, will be ",

    optionA: <MathEq math={String.raw`A) $10 \times 10^{4} \: m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $12 \times 10^{4} \: m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $13.5 \times 10^{4} \: m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $15 \times 10^{4} \: m/s^{2}$`} />,
  },
];
