import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
import i6 from "./I6.PNG";
// import i7 from "./I7.PNG";
// import i8 from "./I8.PNG";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
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
  // // // // // // // Dubai Below
  { sNO: "8", userID: "samuel", passw: "1008" },
  { sNO: "12", userID: "arshan", passw: "1012" },
  { sNO: "13", userID: "neeraj", passw: "1013" },
  { sNO: "14", userID: "abel", passw: "1014" },
  { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // New Users - continue S.No.
  { sNO: "16", userID: "srujana", passw: "1016" },
  { sNO: "17", userID: "meghana", passw: "1017" },
  { sNO: "18", userID: "asmitha", passw: "1018" },
  { sNO: "19", userID: "charan", passw: "1019" },
  { sNO: "20", userID: "mani", passw: "1020" }, //20
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`In the Matrix $A=\begin{bmatrix}
    2 &5  &19  &-7 \\ 
     35&  -2& \frac{5}{2} & 12\\ 
     \sqrt{3}&1  &-5  &17 
    \end{bmatrix}$. Then order of the Matrix A is:`}
      />
    ),

    optionA: "A) 2 x 3",
    optionB: "B) 3 x 2",
    optionC: "C) 4 x 3",
    optionD: "D) 3 x 4",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Find the values of x,y and z from the following: $\begin{bmatrix}
    4 & 3\\ 
    x & 5
    \end{bmatrix} = \begin{bmatrix}
    y & z\\ 
    1 & 5
    \end{bmatrix}$`}
      />
    ),

    optionA: "A) x=4 , y=3 , z=5",
    optionB: "B) x=1 , y=3 , z=3",
    optionC: "C) x=1 , y=4 , z=3",
    optionD: "D) x= 5, y=3 , z=1",
  },

  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`If $A= \begin{bmatrix}
    1 &2  &3 \\ 
     2& 3 & 1
    \end{bmatrix}$ and $B=\begin{bmatrix}
    1 &2  &3 \\ 
     2& 3 & 1
    \end{bmatrix}$, then find 2A-B`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    -1 &5  &3 \\ 
     5& 6 & 0
    \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    1 &2  &3 \\ 
     2& 3 & 1
    \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    6 &2  &3 \\ 
     2& 5 & 0
    \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    3 &2  &4 \\ 
     1& 6 & 1
    \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`Find the value of x and y from the following equation: $2\begin{bmatrix}
    x &5 \\ 
     7& y-3
    \end{bmatrix}+\begin{bmatrix}
    3 &-4 \\ 
     1& 2
    \end{bmatrix}=\begin{bmatrix}
    7 &6 \\ 
     15& 14
    \end{bmatrix}$`}
      />
    ),

    optionA: "A) x=2, y=9",
    optionB: "B) x=4, y=6",
    optionC: "C) x=3, y=1",
    optionD: "D) x=5, y=6",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`Let $A=\begin{bmatrix}
    2 &4 \\ 
     3& 2
    \end{bmatrix}$, $B=\begin{bmatrix}
    1 &3 \\ 
     -2& 5
    \end{bmatrix}$. Find A-B`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    2 &5 \\ 
     7& -3
    \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    1 &3 \\ 
     6& -3
    \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    1 &1 \\ 
     5& -3
    \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    2 &5 \\ 
     5& -3
    \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`Compute the following: $\begin{bmatrix}
    a& b\\ 
    -b& a
   \end{bmatrix} + \begin{bmatrix}
   a& b\\ 
   b& a
  \end{bmatrix}$ =`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    a& 2b\\ 
    -2b& a
   \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    2a& 2b\\ 
    0& 2a
   \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    2a& 2b\\ 
    -2b& 0
   \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    2b& 2a\\ 
    0& 2a
   \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Compute the indicated products. $\begin{bmatrix}
    a& b\\ 
    -b& a
   \end{bmatrix}\begin{bmatrix}
   a& -b\\ 
   b& a
  \end{bmatrix}$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    0& a^2+b^2\\ 
    a^2+b^2& 0
   \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    a^2+b^2& 0\\ 
    0& a^2+b^2
   \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    0& a^2+b^2\\ 
    0& a^2+b^2
   \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    a^2+b^2& 0\\ 
    a^2+b^2& 0
   \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`Find x and y, if $2\begin{bmatrix}
    1 & 3\\ 
     0&x 
    \end{bmatrix}+\begin{bmatrix}
    y & 0\\ 
     1&2 
    \end{bmatrix}=\begin{bmatrix}
    5 & 6\\ 
     1&8 
    \end{bmatrix}$`}
      />
    ),

    optionA: "A) x=3 , y=3",
    optionB: "B) x=2 , y=1",
    optionC: "C) x=5 , y=2",
    optionD: "D) x=7 , y=3",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`Simplify $cos\theta\begin{bmatrix}
    cos\theta &sin\theta \\ 
    -sin\theta &cos\theta 
    \end{bmatrix}+sin\theta\begin{bmatrix}
    sin\theta &-cos\theta \\ 
    cos\theta &sin\theta 
    \end{bmatrix}$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    0 &0 \\ 
     0&0 
    \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    1 &1 \\ 
     1&1 
    \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    1 &0 \\ 
     0&1 
    \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    0 &1 \\ 
     1&0 
    \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`If $\begin{vmatrix}
    3 &1 \\ 
     x& 1
    \end{vmatrix}=\begin{bmatrix}
     3& 2\\ 
     4& 1
    \end{bmatrix}$ the x =`}
      />
    ),

    optionA: "A) 2",
    optionB: "B) 9",
    optionC: "C) 8",
    optionD: "D) 3",
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`$\begin{vmatrix}
    cos\theta &-sin\theta \\ 
     sin\theta& cos\theta
    \end{vmatrix}$ =`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) -1",
    optionC: "C) 1",
    optionD: "D) infinity",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`$\begin{vmatrix}
     2&4 \\ 
     -5&-1 
    \end{vmatrix}$ =`}
      />
    ),

    optionA: "A) 10",
    optionB: "B) 18",
    optionC: "C) 20",
    optionD: "D) -15",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
    1 &0 \\ 
     0& -1
    \end{bmatrix}$, $B=\begin{bmatrix}
    0 &1 \\ 
     1& 0
    \end{bmatrix}$ then AB=`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
    0 &1 \\ 
     -1& 0
    \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
    1 &0 \\ 
     0& -1
    \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
    1 &0 \\ 
     0& 0
    \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
    0 &0 \\ 
     0& -1
    \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "14.",
    question: (
      <MathEq
        math={String.raw`$2tan^{2}45^{\circ}+cos^{2}30^{\circ}-sin^{2}60^{\circ}$ =`}
      />
    ),

    optionA: "A) 3",
    optionB: "B) 1",
    optionC: "C) 0",
    optionD: "D) 2",
  },

  {
    id: "15.",
    question: (
      <MathEq
        math={String.raw`Convert the radian measure to degree measure $\frac{3\pi}{2}$`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $250^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $320^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $270^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $180^{\circ}$`} />,
  },

  {
    id: "16.",
    question: "Which of the following statements is not true",

    optionA:
      "A) The coefficient of friction between two surfaces increases as the surface in contact are made rough",
    optionB:
      "B) The force of friction acts in a direction opposite to the applied force",
    optionC: "C) Rolling friction is greater than sliding friction",
    optionD:
      "D) The coefficient of friction between wood and wood is less than 1",
  },

  {
    id: "17.",
    question: (
      <MathEq
        math={String.raw`A block of 1 kg is stopped against a wall by applying a force F perpendicular to the wall. If $\mu = 0.2$ then minimum value of F will be`}
      />
    ),

    optionA: "A) 980 N",
    optionB: "B) 49 N",
    optionC: "C) 98 N",
    optionD: "D) 490 N",
  },

  {
    id: "18.",
    question:
      "The blocks A and B are arranged as shown in the figure. The pulley is frictionless. The mass of A is 10 kg. The coefficient of friction of A with the horizontal surface is 0.20. The minimum mass of B to start the motion will be",
    image1: <Image g={i1} />,

    optionA: "A) 2 kg",
    optionB: "B) 0.2 kg",
    optionC: "C) 5 kg",
    optionD: "D) 10 kg",
  },

  {
    id: "19.",
    question:
      "A 20 kg block is initially at rest on a rough horizontal surface. A horizontal force of 75 N is required to set the block in motion. After it is in motion, a horizontal force of 60 N is required to keep the block moving with constant speed. The coefficient of static friction is",

    optionA: "A) 0.38",
    optionB: "B) 0.44",
    optionC: "C) 0.52",
    optionD: "D) 0.60",
  },

  {
    id: "20.",
    question: "When two surfaces are coated with a lubricant, then they",

    optionA: "A) Stick to each other",
    optionB: "B) Slide upon each other",
    optionC: "C) Roll upon each other",
    optionD: "D) None of these",
  },

  {
    id: "21.",
    question:
      "A box is lying on an inclined plane what is the coefficient of static friction if the box starts sliding when an angle of inclination is 60o",

    optionA: "A) 1.173",
    optionB: "B) 1.732",
    optionC: "C) 2.732",
    optionD: "D) 1.677",
  },
  {
    id: "22.",
    question:
      "A block of mass 2 kg is kept on the floor. The coefficient of static friction is 0.4. If a force F of 2.5 Newtons is applied on the block as shown in the figure, the frictional force between the block and the floor will be",
    image1: <Image g={i2} />,

    optionA: "a) 2.5 N",
    optionB: "b) 5 N",
    optionC: "c) 7.84 N",
    optionD: "d) 10 N",
  },
  {
    id: "23.",
    question: "Which one of the following is not used to reduce friction",

    optionA: "A) Oil",
    optionB: "B) Ball bearings",
    optionC: "C) Sand",
    optionD: "D) Graphite",
  },
  {
    id: "24.",
    question:
      "An army vehicle of mass 1000 kg is moving with a velocity of 10 m/s and is acted upon by a forward force of 1000 N due to the engine and a retarding force of 500 N due to friction. What will be its velocity after 10 s",

    optionA: "A) 5 m/s",
    optionB: "B) 10 m/s",
    optionC: "C) 15 m/s",
    optionD: "D) 20 m/s",
  },
  {
    id: "25.",
    question:
      "A body of mass 2 kg is moving with a velocity 8 m/s on a smooth surface. If it is to be brought to rest in 4 seconds, then the force to be applied is",

    optionA: "A) 8 N",
    optionB: "B) 4 N",
    optionC: "C) 2 N",
    optionD: "D) 1 N",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`The apparent weight of the body, when it is travelling upwards with an acceleration of $2 m/s^{2}$ and mass is 10 kg, will be`}
      />
    ),

    optionA: "A) 198 N",
    optionB: "B) 164 N",
    optionC: "C) 140 N",
    optionD: "D) 118 N",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`The time in which a force of 2 N produces a change of momentum of $0.4 kg-ms^{-1}$ in the body is`}
      />
    ),

    optionA: "A) 0.2 s",
    optionB: "B) 0.02 s",
    optionC: "C) 0.5 s",
    optionD: "D) 0.05 s",
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`A gun of mass 10kg fires 4 bullets per second. The mass of each bullet is 20 g and the velocity of the bullet when it leaves the gun is $300 ms^{-1}$
    The force required to hold the gun while firing is`}
      />
    ),

    optionA: "A) 30 N",
    optionB: "B) 22 N",
    optionC: "C) 24 N",
    optionD: "D) 20 N",
  },
  {
    id: "29.",
    question:
      "A gun is aimed at a target in a line of its barrel. The target is released and allowed to fall under gravity at the same instant the gun is fired. The bullet will",

    optionA: "A) Pass above the target",
    optionB: "B) Pass below the target",
    optionC: "C) Hit the target",
    optionD: "D) Certainly miss the target",
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`Two bodies are projected with the same velocity. If one is projected at an angle of $30^{\circ}$ and the other at an angle of $60^{\circ}$ to the horizontal, the
    ratio of the maximum heights reached is`}
      />
    ),

    optionA: "A) 3 : 1",
    optionB: "B) 1 : 3",
    optionC: "C) 1 : 2",
    optionD: "D) 2 : 1",
  },

  {
    id: "31.",
    question: [
      <MathEq
        math={String.raw`An element X combines with hydrogen to form a compound $XH_{3}$. The element X is placed on the right side of the periodic table. What is true about the element X?`}
      />,
      <div>'A) has three valence electrons'</div>,
      <div>'B) is a metal and is solid'</div>,
      <div>'C) is a non-metal and is a gas'</div>,
      <MathEq
        math={String.raw`D) $XH_{3}$ reacts with water to form a basic compound`}
      />,
    ],

    optionA: "A) A, B and C",
    optionB: "B) B, C and D",
    optionC: "C) C, D and A",
    optionD: "D) D, A and B",
  },

  {
    id: "32.",
    question:
      "Which of the following statements regarding sulphur dioxide are true?",

    optionA:
      "a)	Each molecule of sulphur dioxide consists of one atom of sulphur and one atom of oxygen",
    optionB:
      "b)	The two elements sulphur and oxygen are combined in a ratio of 1: 1 by weight",
    optionC: "c)	A sulphur dioxide molecule cannot exist independently",
    optionD:
      "d)	A molecule of suphur dioxide isan example of homonuclear diatomic molecule",
  },

  {
    id: "33.",
    question:
      "The mass number of an atom is 31. If the atom has 5 electrons in its M-shell, the number of neutrons present in the atom will be",

    optionA: "A)	15",
    optionB: "B) 14",
    optionC: "C) 17",
    optionD: "D) none of these",
  },

  {
    id: "34.",
    question:
      "Which of the following characteristics is/are incorrect in the following table?",
    image1: <Image g={i3} />,

    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 4",
  },

  {
    id: "35.",
    question:
      "Which among the following sets will have the same number of valence electrons?",

    optionA: <MathEq math={String.raw`A) $_{11}X^{23},_{20}Y^{40}$`} />,
    optionB: <MathEq math={String.raw`B) $_{10}X^{20},_{19}Y^{39}$`} />,
    optionC: <MathEq math={String.raw`C) $_{11}X^{23},_{19}Y^{39}$`} />,
    optionD: <MathEq math={String.raw`D) $_{18}X^{40},_{26}Y^{40}$`} />,
  },

  {
    id: "36.",
    question:
      "Match the mixture in column I with the type of mixture in column II and select the correct option for the given codes  ",
    image1: <Image g={i4} />,
    image2: <Image g={i5} />,

    optionA: "A) m",
    optionB: "B) n",
    optionC: "C) o",
    optionD: "D) p",
  },

  {
    id: "37.",
    question: [
      "The following reaction is employed in welding of railway tracks. x, y and z in the following equation respectively are:",
      <MathEq
        math={String.raw`$xAl+ Fe_{x}O_{y} \rightarrow Al_{2}O_{3}+2Fe+heat$`}
      />,
    ],

    optionA: "A)	2, 3, 2",
    optionB: "B) 2, 1, 1",
    optionC: "C) 2, 2, 2",
    optionD: "D) none",
  },

  {
    id: "38.",
    question:
      "When perfume is poured on a palm, a cooling sensation is perceived. Name for the  phenomenon associated with it is",

    optionA: "A)	cooling",
    optionB: "B) sublimation",
    optionC: "C) condensation",
    optionD: "D) none",
  },

  {
    id: "39.",
    question: "Which of the following is a mismatch",
    image2: <Image g={i6} />,

    optionA: "A)	M & N",
    optionB: "B) N & O",
    optionC: "C) N & P",
    optionD: "D) M & O",
  },

  {
    id: "40.",
    question: "Explosion takes place in ",

    optionA: "A)	lamps",
    optionB: "B) lanterns",
    optionC: "C) crackers",
    optionD: "D) none of these",
  },

  {
    id: "41.",
    question: "The metallic rods/plates used in electrolysis are called",

    optionA: "A)	Electric charges",
    optionB: "B) electrolytes",
    optionC: "C) resistors",
    optionD: "D) none of these",
  },

  {
    id: "42.",
    question: [
      <div>Assertion (A): pure compounds are homogeneous substances</div>,
      <div>
        Reason (R): compounds cannot be separated into constituent elements by
        physical methods
      </div>,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "43.",
    question: [
      <MathEq
        math={String.raw`During the separation of acetone (b.p. $56^{\circ}$ ) from water (b.p. 373K) by fractional distillation, the following steps are carried out.`}
      />,
      <div>i) Water remains in the distillation flask.</div>,
      <div>
        ii) The acetone - water mixture is taken in a distillation flask and the
        flask is heated at a temperature equal to or more than the boiling point
        of acetone but less than that of water.
      </div>,
      <div>
        iii) As the vapour pass through the fractionating column, they get
        condensed and the liquid formed is collected in the receiver.
      </div>,
      <div>
        iv) When the mixture in the flask is subjected to slow heating, acetone,
        being more volatile than water, gets vapourised first.
      </div>,
    ],

    optionA: "A)	iii, i, iv, ii",
    optionB: "B) ii, iv, i, iii",
    optionC: "C) iii, i, ii, iv",
    optionD: "D) ii, iv, iii, i",
  },

  {
    id: "44.",
    question: "A group of atoms possessing positive or negative charge",

    optionA: "A)	atom ",
    optionB: "B) molecule  ",
    optionC: "C) radical",
    optionD: "D) valency",
  },

  {
    id: "45.",
    question:
      "Chemical reactions which occur in presence of sunlight are called________",

    optionA: "A)	thermal",
    optionB: "B) electrochemical",
    optionC: "C) light",
    optionD: "D) photochemical",
  },
];
