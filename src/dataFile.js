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
        math={String.raw`If $\frac{a_{1}}{a_{2}}=\frac{b_{1}}{b_{2}} = \frac{c_{1}}{c_{2}}$ then the the two lines $a_{1}x +b_{1}y+c_{1}=0$ and $a_{2}x +b_{2}y+c_{2}=0$ are`}
      />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "2.",
    question: <MathEq math={String.raw`The lines $x+y=8$, $x-y=2$ are`} />,

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

  {
    id: "3.",
    question: (
      <MathEq math={String.raw`The lines $2x-y+1=0$, $2x-y+4=0$ are`} />
    ),

    optionA: "A) Parallel",
    optionB: "B) Coincide",
    optionC: "C) Intersecting",
    optionD: "D) None",
  },

   

  {
    id: "4.",
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
    id: "5.",
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
    id: "6.",
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
    id: "7.",
    question:<MathEq math={String.raw`Solve $\left ( x-1 \right )\left ( x+5 \right )> 0$`}/>,

    optionA:<MathEq math={String.raw`A) $x \in \left ( -\infty , -5 \right ) \cup \left ( 1, \infty \right )$`}/>,
    optionB:<MathEq math={String.raw`B) $x \in \left ( -\infty , 5 \right ] \cup \left [ 1, \infty \right )$`}/>,
    optionC:<MathEq math={String.raw`C) $x \in \left ( -5 , 5 \right )$`}/>,
    optionD:<MathEq math={String.raw`D) $x \in \left ( 1 , 5 \right )$`}/>,
  },
  
  {
    id: "8.",
    question:<MathEq math={String.raw`Solve $\frac{x-1}{2-x}> 0$`}/>,

    optionA:<MathEq math={String.raw`A) $x \in \left ( -2, -1 \right )$`}/>,
    optionB:<MathEq math={String.raw`B) $x \in \left ( -1, 2 \right ]$`}/>,
    optionC:<MathEq math={String.raw`C) $x \in \left ( 1, 2 \right )$`}/>,
    optionD:<MathEq math={String.raw`D) $x \in \left [ 1, 2 \right ]$`}/>,
  },
  
  {
    id: "9.",
    question:<MathEq math={String.raw`Solve $\frac{3}{x-2}< 1$`}/>,

    optionA:<MathEq math={String.raw`A) $x \in \left ( -\infty , 2 \right ) \cup \left ( 5, \infty \right )$`}/>,
    optionB:<MathEq math={String.raw`B) $x \in \left ( -\infty , 5 \right ] \cup \left [ 2, \infty \right )$`}/>,
    optionC:<MathEq math={String.raw`C) $x \in \left ( -2 , 5 \right )$`}/>,
    optionD:<MathEq math={String.raw`D) $x \in \left ( 2 , 5 \right )$`}/>,
  },
  
  {
    id: "10.",
    question:<MathEq math={String.raw`Solve $\frac{x^{2}+1}{x^{2}-4} <0$`}/>,

    optionA:<MathEq math={String.raw`A) $x \in \left ( -\infty , 2 \right ) \cup \left ( 4, \infty \right )$`}/>,
    optionB:<MathEq math={String.raw`B) $x \in \left ( 2 , 4 \right )$`}/>,
    optionC:<MathEq math={String.raw`C) $x \in \left ( -2 , 4 \right )$`}/>,
    optionD:<MathEq math={String.raw`D) $x \in \left ( -2 , 2 \right )$`}/>,
  },

  {
    id: "11.",
    question:<MathEq math={String.raw`Find the value of $log _{\sqrt{5}} 125$`}/>,

    optionA:'A) 3',
    optionB:'B) 4',
    optionC:'C) 5',
    optionD:'D) 6',
  },

  {
    id: "12.",
    question:<MathEq math={String.raw`Find the value of $log _{97} 1$`}/>,

    optionA:'A) 0',
    optionB:'B) 1',
    optionC:'C) 2',
    optionD:'D) 3',
  },
  
  {
    id: "13.",
    question:<MathEq math={String.raw`Find the value of $log _{5} -5$`}/>,

    optionA:'A) -1',
    optionB:'B) 1',
    optionC:'C) 0',
    optionD:'D) not defined',
  },
  
  {
    id: "14.",
    question:<MathEq math={String.raw`Find the range of x, $log _{4} \left ( 5-x \right )$`}/>,

    optionA:'A) x > 5',
    optionB:'B) x < 5',
    optionC:'C) x > 4',
    optionD:'D) x < 4',
  },
  
  {
    id: "15.",
    question:<MathEq math={String.raw`Find the range of x, $log _{\left ( x-5 \right )} 4$`}/>,

    optionA:<MathEq math={String.raw`A) $x \in \left ( 5,\infty  \right ) + \left \{ 6 \right \}$`}/>,
    optionB:<MathEq math={String.raw`B) $x \in \left ( 5,\infty  \right )$`}/>,
    optionC:<MathEq math={String.raw`C) $x \in \left ( 5,\infty  \right ) - \left \{ 6 \right \}$`}/>,
    optionD:<MathEq math={String.raw`D) $x \in \left [ 5,\infty  \right ) - \left \{ 6 \right \}$`}/>,
  },

  {
    id: "16.",
    question:'A hammer weighing 3kg, moving with a velocity of 10m/s, strikes against the head of a spike and drives it into a block of wood. If the hammer comes to rest in 0.025s, the impulse associated with the ball will be',

    optionA:'A) 30 Ns',
    optionB:'B) -30 Ns',
    optionC:'C) 15 Ns',
    optionD:'D) -15 Ns',
  },

  {
    id: "17.",
    question: "A rocket works on the",

    optionA:'A) First law of motion',
    optionB:'B) Second law of motion',
    optionC:'C) Third law of motion',
    optionD:'D) Law of conservation of energy',
  },
  
  {
    id: "18.",
    question:"If you are asked to push an object so that the acceleration produced in it is now twice as before, then the force required will be",

    optionA:'A) Twice as before',
    optionB:'B) Half as before',
    optionC:'C) Same as before',
    optionD:'D) Four times as before',
  },
  
  {
    id: "19.",
    question:"It is difficult to walk on ice because of",

    optionA:'A) absence of friction',
    optionB:'B) absence of inertia',
    optionC:'C) more inertia',
    optionD:'D) more friction',
  },
  
  {
    id: "20.",
    question:"The law which defines force is",

    optionA:'A) Newtons third law of motion',
    optionB:'B) Newtons first law of motion',
    optionC:'C) Newtons second law of motion',
    optionD:'D) Newtons law of gravity',
  },

  {
    id: "21.",
    question:"The law which gives a quantitative measurement of force is",

    optionA:'A) Newtons third law of motion',
    optionB:'B) Newtons first law of motion',
    optionC:'C) Newtons second law of motion',
    optionD:'D) Newtons law of gravity',
  },
  {
    id: "22.",
    question:"Friction between any two objects is due to",

    optionA:'A) attraction between them',
    optionB:'B) repulsion between them',
    optionC:'C) some adhesive forces between them',
    optionD:'D) irregularities on the surfaces',
  },
  {
    id: "23.",
    question:"A and B are two objects with mass 6kg and 34kg respectively. Then ",

    optionA:'A) A has more inertia than B',
    optionB:'B) B has more inertia than A',
    optionC:'C) A and B both have same inertia',
    optionD:'D) None of the above is true',
  },
  {
    id: "24.",
    question:"Which of the following class of forces is different from others?",

    optionA:'A) Pulling of a cart',
    optionB:'B) Stretching of a coiled spring',
    optionC:'C) Kicking of the football',
    optionD:'D) Electrical force',
  },
  {
    id: "25.",
    question:"Which of the following class of forces is different from others?",

    optionA:'A) Magnetic force',
    optionB:'B) Electrical force',
    optionC:'C) Gravitational force',
    optionD:'D) Stretching of a spring',
  },
  {
    id: "26.",
    question:<MathEq math={String.raw`If $10 ms^{-2}$, what is the force of gravity acting on a mass of 1kg?`}/>,

    optionA:'A) 1N',
    optionB:'B) 10N',
    optionC:'C) 1/10 N',
    optionD:'D) None of these',
  },
  {
    id: "27.",
    question:'When an object undergoes acceleration',

    optionA:"A) it's speed always increases",
    optionB:"B) it's velocity always increases",
    optionC:"C) it always falls towards the earth",
    optionD:"D) a force always acts on it",
  },
  {
    id: "28.",
    question:"A force acts on an object which is free to move. If we know the magnitude of the force and the mass of the object, newton's second law of motion enables us to determine the object's",

    optionA:'A) weight',
    optionB:'B) speec',
    optionC:'C) acceleration',
    optionD:'D) position',
  },
  {
    id: "29.",
    question:"Newton used the phrase 'quantity of motion' for",

    optionA:'A) momentum',
    optionB:'B) force',
    optionC:'C) acceleration due to gravity',
    optionD:'D) none of these',
  },
  {
    id: "30.",
    question:<MathEq math={String.raw`$kg ms^{-1}$ is the SI unit of`}/>,

    optionA:'A) Impulse',
    optionB:'B) Force',
    optionC:'C) Angular velocity',
    optionD:'D) None of these',
  },
];
