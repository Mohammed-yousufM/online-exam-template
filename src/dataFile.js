import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
// import i6 from "./I6.png";
// import i7 from "./I7.PNG";
// import i8 from "./I8.PNG";

export const studentsDB = [
  { sNO: "0", userID: "admin", passw: "admin@1000" },
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
  // // // // // // // // Dubai Below
  // { sNO: "8", userID: "samuel", passw: "1008" },
  // { sNO: "12", userID: "arshan", passw: "1012" },
  // { sNO: "13", userID: "neeraj", passw: "1013" },
  // { sNO: "14", userID: "abel", passw: "1014" },
  // { sNO: "15", userID: "rayaan", passw: "1015" },
  // // // // // // // // New Users - continue S.No.
  // { sNO: "16", userID: "srujana", passw: "1016" },
  // { sNO: "17", userID: "meghana", passw: "1017" },
  // { sNO: "18", userID: "asmitha", passw: "1018" },
  // { sNO: "19", userID: "charan", passw: "1019" },
  // { sNO: "20", userID: "mani", passw: "1020" }, //20
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`$\begin{bmatrix}
      2 &0  &1 \\ 
       4& -1 &2 \\ 
       7& 6 &9 
      \end{bmatrix}$ is a`}
      />
    ),

    optionA: "A) is a rectangular matrix of order 3",
    optionB: "B) is a square matrix of order 3",
    optionC: "C) is a rectangular matrix of order 9",
    optionD: "D) is a square matrix of order 9",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`$\begin{bmatrix}
      2 &0  &1 \\ 
       4& -1 &2 \\ 
       7& 6 &9 
      \end{bmatrix}$ then Trace(A) = `}
      />
    ),
    optionA: "A) 12",
    optionB: "B) 10",
    optionC: "C) -7",
    optionD: "D) -12",
  },

  {
    id: "3.",
    question:
      "If each non-diagonal element of a square matrix is equal to zero and each diagonal element is equal to 1, then the matrix is called",

    optionA: "A) a Unity Matrix or Identity Matrix",
    optionB: "B) a Scalar Matrix",
    optionC: "C) a Diagonal Matrix",
    optionD: "D) a Null or Zero Matrix",
  },

  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`For example if k=2 and $A=\begin{bmatrix}
      3 &2  &-1 \\ 
       4&-3  &1 
      \end{bmatrix}$ then 2A=`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      6 &4  &-2 \\ 
       8&-6  &2 
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      7 &-5  &2 \\ 
       1&-2  &6 
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      3 &2  &-1 \\ 
       4&-3  &1 
      \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
      8 &-6  &2 \\ 
       6&4  &2 
      \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
      2 &3  &-1 \\ 
       7&8  &5 
      \end{bmatrix}$ and $B=\begin{bmatrix}
      1 &0  &1 \\ 
       2&-4  &-1 
      \end{bmatrix}$ then find A+B`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      9 &3  &2 \\ 
       3&6  &5 
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      1 &4  &2 \\ 
       2&6  &8 
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      3 &3  &0 \\ 
       9&4  &4 
      \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
      7 &-5  &2 \\ 
       1&-2  &6 
      \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "6.",
    question: (
      <MathEq
        math={String.raw`If $\begin{bmatrix}
      x-1 & 2 &y-5 \\ 
      z & 0 & 2\\ 
      1 &-1  &1+a 
      \end{bmatrix} = \begin{bmatrix}
      1-x & 2 &-y \\ 
      2 & 0 & 2\\ 
      1 &-1  &1 
      \end{bmatrix}$ then find the values of x,y,z and a`}
      />
    ),

    optionA: "A) x=2, y=3, z=1, a=0",
    optionB: "B) x=1, y=5/2, z=2, a=0",
    optionC: "C) x=5, y=1/2, z=2, a=6",
    optionD: "D) x=1, y=2, z=7, a=1",
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`Find the trace of A if $A=\begin{bmatrix}
      1 & 2 &-\frac{1}{2} \\ 
      0 & -1 & 2\\ 
      -\frac{1}{2}  &2  &1 
      \end{bmatrix}$`}
      />
    ),

    optionA: "A) 1",
    optionB: "B) 6",
    optionC: "C) 2",
    optionD: "D) 5",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
      4 & -5\\ 
      -2 & 3
      \end{bmatrix}$ then find -5A`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      -20 & 25\\ 
      10 & -15
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      7 & -6\\ 
      9 & 3
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      -6 & -8\\ 
      2 & 2
      \end{bmatrix}$`}
      />
    ),
    optionD: "D) Doesnot exist",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
      0 &1  &2 \\ 
       2&  3&4 \\ 
       4&5  &6 
      \end{bmatrix}$ and $B=\begin{bmatrix}
      1 &-2  &0 \\ 
       0&  1&-1 \\ 
       -1&0  &3 
      \end{bmatrix}$ then find 4B-3A`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      8 &7  &1 \\ 
      4& -2 &2 \\ 
      3& 3 &9  
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      2 &0  &1 \\ 
      4& -1 &2 \\ 
      7& 6 &9  
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      1 &-8  &-2 \\ 
       -3&  -5&-1 \\ 
       -15&-12  &-8 
      \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
      4 &-11  &-6 \\ 
       -6&  -5&-16 \\ 
       -16&-15  &-6 
      \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`$\begin{bmatrix}
      0\\ 
      1\\ 
      -1
      \end{bmatrix} + \begin{bmatrix}
      -1\\ 
      1\\ 
      0
      \end{bmatrix}$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      -1\\ 
      1\\ 
      -1
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      0\\ 
      1\\ 
      -1
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      2\\ 
      1\\ 
      -1
      \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
      -1\\ 
      2\\ 
      -1
      \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "11.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
      -1 &3 \\ 
       4& 2
      \end{bmatrix}$,$B=\begin{bmatrix}
      2 &1 \\ 
       3& -5
      \end{bmatrix}$, $X=\begin{bmatrix}
      x_{1} &x_{2} \\ 
      x_{3}& x_{4}
      \end{bmatrix}$ and A+B = X then find the values of $x_{1}$,$x_{2}$,$x_{3}$ and $x_{4}$`}
      />
    ),

    optionA: "A) 1, 4, 3 and -3",
    optionB: "B) 8, 5, -4 and 10",
    optionC: "C) 1, 4, 7 and -3",
    optionD: "D) 2, 9, 1 and -5",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`If $\begin{bmatrix}
      x-3 &2y-8 \\ 
       z+2& 6
      \end{bmatrix}$=$\begin{bmatrix}
      5 &2 \\ 
       -2& a-4
      \end{bmatrix}$ then find the values of x,y,z, and a.`}
      />
    ),

    optionA: "A) 1, 4, 3 and -3",
    optionB: "B) 8, 5, -4 and 10",
    optionC: "C) 1, 4, 7 and -3",
    optionD: "D) 2, 9, 1 and -5",
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`If $A=\begin{bmatrix}
      1 & 2 &3 \\ 
       3&  2& 1
      \end{bmatrix}$ and $B=\begin{bmatrix}
      3&  2& 1 \\ 
       3 & 2 &1
      \end{bmatrix}$ find 3B-2A`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $\begin{bmatrix}
      1 & 3 &3 \\ 
       3&  2& 7
      \end{bmatrix}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $\begin{bmatrix}
      4 & 5 &3 \\ 
       2&  6& 1
      \end{bmatrix}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\begin{bmatrix}
      7 & 2 &-3 \\ 
       -3&  2& 7
      \end{bmatrix}$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D) $\begin{bmatrix}
      2 & 4 &3 \\ 
       3&  2& 5
      \end{bmatrix}$`}
      />
    ),
  },

  {
    id: "14.",
    question: "If each element of a matrix is zero, then it is called a",

    optionA: "A) a Unity Matrix or Identity Matrix",
    optionB: "B) a Scalar Matrix",
    optionC: "C) a Diagonal Matrix",
    optionD: "D) a Null or Zero Matrix",
  },

  {
    id: "15.",
    question:
      "If each non-diagonal element of a square matrix is zero and all diagonal elements are equal to each other, then it is called a",

    optionA: "A) a Unity Matrix or Identity Matrix",
    optionB: "B) a Scalar Matrix",
    optionC: "C) a Diagonal Matrix",
    optionD: "D) a Null or Zero Matrix",
  },

  {
    id: "16.",
    question: (
      <MathEq
        math={String.raw`A coin is dropped in a lift. It takes time $t_{1}$ to reach the floor when lift is stationary. It takes time $t_{2}$ when lift is moving up with constant acceleration. Then`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $t_{1} > t_{2}$`} />,
    optionB: <MathEq math={String.raw`B) $t_{2} > t_{1}$`} />,
    optionC: <MathEq math={String.raw`C) $t_{1} = t_{2}$`} />,
    optionD: <MathEq math={String.raw`D) $t_{1} >> t_{2}$`} />,
  },

  {
    id: "17.",
    question:
      "If the tension in the cable of 1000 kg elevator is 1000 kg weight, the elevator",

    optionA: "A)	Is accelerating upwards",
    optionB: "B)	Is accelerating downwards",
    optionC: "C)	May be at rest or accelerating",
    optionD: "D)	May be at rest or in uniform motion",
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`A force of 5 N  acts on a body of weight 9.8 N. What is the acceleration produced in $m/sec^{2}$`}
      />
    ),

    optionA: "A)	49.00",
    optionB: "B)	5.00",
    optionC: "C)	1.46",
    optionD: "D)	0.51",
  },

  {
    id: "19.",
    question:
      "A body of mass 40 gm is moving with a constant velocity of 2 cm/sec on a horizontal frictionless table. The force on the table is",

    optionA: "A)	39200 dyne",
    optionB: "B)	160 dyne",
    optionC: "C)	80 dyne",
    optionD: "D)	Zero dyne",
  },

  {
    id: "20.",
    question: (
      <MathEq
        math={String.raw`A monkey of mass 20kg is holding a vertical rope. The rope will not break when a mass of 25 kg is suspended from it but will break if the mass exceeds 25 kg. What is the maximum acceleration with which the monkey can climb up along the rope ($g=10m/s^{2}$)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 10 $m/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) 25 $m/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) 2.5 $m/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) 5 $m/sec^{2}$`} />,
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`A man of weight 75 kg is standing in an elevator which is moving with an acceleration of $5m/s^{2}$ in upward direction the apparent weight of the man will be ($g=10m/s^{2}$)`}
      />
    ),

    optionA: "A)	1425 N",
    optionB: "B)	1375 N",
    optionC: "C)	1250 N",
    optionD: "D)	1125 N",
  },
  {
    id: "22.",
    question:
      "A thief stole a box full of valuable articles of weight W and while carrying it on his back, he jumped down a wall of height ‘h’ from the ground. Before he reached the ground he experienced a load of ",

    optionA: "A)	2W",
    optionB: "B)	W",
    optionC: "C)	W/2",
    optionD: "D)	Zero",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`N bullets each of mass m kg are fired with a velocity $v ms^{-1}$ at the rate of n bullets per second upon a wall. The reaction offered by the wall to the bullets is given by`}
      />
    ),

    optionA: <MathEq math={String.raw`A)	$nmv$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{Nmv}{n}$`} />,
    optionC: <MathEq math={String.raw`C) $n\frac{Nm}{v}$`} />,
    optionD: <MathEq math={String.raw`D) $n\frac{Nv}{m}$`} />,
  },
  {
    id: "24.",
    question:
      "A book is lying on the table. What is the angle between the action of the book on the table and the reaction of the table on the book",

    optionA: <MathEq math={String.raw`A) $0^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $30^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $45^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $180^{\circ}$`} />,
  },
  {
    id: "25.",
    question:
      "When a horse pulls a wagon, the force that causes the horse to move forward is the force",

    optionA: "A)	The ground exerts on it",
    optionB: "B)	It exerts on the ground",
    optionC: "C)	The wagon exerts on it",
    optionD: "D)	It exerts on the wagon",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A body of weight 2kg is suspended as shown in the figure. The tension $T_{1}$ in the horizontal string (in kg wt) is`}
      />
    ),
    image1: <Image g={i3} />,

    optionA: <MathEq math={String.raw`A) $2/\sqrt{3}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{3}/2$`} />,
    optionC: <MathEq math={String.raw`C) $2\sqrt{3}$`} />,
    optionD: <MathEq math={String.raw`D) $2$`} />,
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`Two masses $m_{1}=5kg$ and $m_{2}=4.8kg$ tied to a string are hanging over a light frictionless pulley. What is the acceleration of the masses when they are free to move ($g=9.8m/s^{2}$)`}
      />
    ),
    image1: <Image g={i4} />,

    optionA: <MathEq math={String.raw`A) $0.2 m/sec^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $9.8 m/sec^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $5 m/sec^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $4.8 m/sec^{2}$`} />,
  },
  {
    id: "28.",
    question: (
      <MathEq
        math={String.raw`Three blocks of masses $m_{1}$, $m_{2}$ and $m_{3}$ are connected by massless strings as shown on a frictionless table. They are pulled with a force $T_{3}=40N$. If $m_{1}=10kg$, $m_{2}=6kg$ and $m_{3}=4kg$, the tension $T_{2}$ will be`}
      />
    ),
    image1: <Image g={i5} />,

    optionA: "A)	20 N",
    optionB: "B)	40 N",
    optionC: "C)	10 N",
    optionD: "D)	32 N",
  },
  {
    id: "29.",
    question: "When a body is stationary",

    optionA: "A)	There is no force acting on it",
    optionB: "B)	The force acting on it is not in contact with it",
    optionC: "C)	The combination of forces acting on it balances each other",
    optionD: "D)	The body is in vacuum",
  },
  {
    id: "30.",
    question: (
      <MathEq
        math={String.raw`An aircraft is moving with a velocity of $300ms^{-1}$. If all the forces acting on it are balanced, then `}
      />
    ),

    optionA: "A)	It still moves with the same velocity",
    optionB: "B)	It will be just floating at the same point in space",
    optionC: "C)	It will fall down instantaneously ",
    optionD: "D)	It will lose its velocity gradually",
  },

  {
    id: "31.",
    question:
      "An atom of an element(X) has its K, L and M shells filled with some electrons. It reacts with sodium metal to form a compound NaX. The number of electrons in the M shell of the atom(X) will be",

    optionA: "A)	Eight",
    optionB: "B) Seven",
    optionC: "C) Two",
    optionD: "D) One",
  },

  {
    id: "32.",
    question: [
      <MathEq
        math={String.raw`Oxygen gas reacts with hydrogen to produce water. The reaction is represented by the equation $O_{2\left(g \right )}+H_{2\left(g \right )}\rightarrow H_{2}O_{\left(g \right )}$ The above reaction is an example of`}
      />,
      "A) Oxidation of hydrogen",
      "B) Reduction of oxygen",
      "C) Reduction of hydrogen",
      "D) Redox reaction",
    ],

    optionA: "A)	A, B and C",
    optionB: "B) B, C and D",
    optionC: "C) A, C and D",
    optionD: "D) A, B and D",
  },

  {
    id: "33.",
    question:
      "Which of the following is a suitable example for illustrating the law of conservation of mass ? (Atomic mass of O = 16; H = 1)",

    optionA:
      "A)	18 g of water is formed by the combination of 16 g oxygen with 2 g of hydrogen.",
    optionB:
      "B)	18 g of water in liquid state is obtained by heating 18g of ice.",
    optionC:
      "C)	18 g of water is completely converted into vapour state on heating.",
    optionD:
      "D)	18 g of water freezes at 4 degree centigrade(C) to give same mass of ice",
  },

  {
    id: "34.",
    question: "An incorrect electronic configuration is",

    optionA: "A)	2, 8, 18, 1",
    optionB: "B) 2, 8, 17, 2",
    optionC: "C) 2, 8, 10",
    optionD: "D) 2, 8, 14, 2",
  },

  {
    id: "35.",
    question: "An example of miscible liquids is",

    optionA: "A)	Coconut oil + water",
    optionB: "B) castor oil + water",
    optionC: "C) alcohol + water",
    optionD: "D) kerosene + water",
  },

  {
    id: "36.",
    question:
      "Match the column I with column II and select the correct option for the given codes",
    image1: <Image g={i1} />,
    image2: <Image g={i2} />,

    optionA: "A) m",
    optionB: "B) p",
    optionC: "C) n",
    optionD: "D) o",
  },

  {
    id: "37.",
    question: [
      <div>
        An element with atomic number 17 is placed in the group 17 of the long
        form periodic table. Element with atomic number 9 is placed above and
        with atomic number 35 is placed below it. Element with atomic number 16
        is placed left and with atomic number 18 is placed right to it. Which of
        the following statements are correct ?
      </div>,
      <div>(W) Valency of the element with atomic number 18 is zero</div>,
      <div>
        (X) Elements with same valency will have atomic number 16, 17 and 18
      </div>,
      <div>(Y) Valency of elements with atomic number 9, 17 and 35 is one</div>,
      <div>
        (Z) Element with atomic number 17 is more electronegative than element
        with atomic numbers 16 and 35
      </div>,
    ],

    optionA: "A)	W, X and Y",
    optionB: "B) W, Y and Z",
    optionC: "C) X, Y and Z",
    optionD: "D) W, X and Z",
  },

  {
    id: "38.",
    question: "The vapor pressure is high in case of ",

    optionA: "A)	water",
    optionB: "B) coconut oil",
    optionC: "C) petrol",
    optionD: "D) all of these",
  },

  {
    id: "39.",
    question: (
      <MathEq
        math={String.raw`The atomic number of an element M is 16. The number of electrons in its ion $M^{2-}$ will be`}
      />
    ),

    optionA: "A)	16",
    optionB: "B) 14",
    optionC: "C) 18",
    optionD: "D) none",
  },

  {
    id: "40.",
    question: [
      <div>
        The correct increasing order of valency of a positive radical for the
        following is:
      </div>,
      <MathEq
        math={String.raw`i) $A \left( H_{2}PO_{4}\right)_{2}$  ii) $B_{2}O$  iii) $C_{2} \left( SO_{4}\right)_{3}$`}
      />,
    ],

    optionA: "A) iii >i> ii",
    optionB: "B) iii > ii > I",
    optionC: "C) ii >i> iii",
    optionD: "D) i> ii > iii",
  },

  {
    id: "41.",
    question: "Inexhaustible source among the following is",

    optionA: "A)	coal",
    optionB: "B) petroleum",
    optionC: "C) solar energy",
    optionD: "D) natural gas",
  },

  {
    id: "42.",
    question: [
      <div>Assertion (A): Mercury is not a metal</div>,
      <div>
        Reason (R): Mercury is not sonorous and does not show malleability and
        ductility
      </div>,
    ],

    optionA: "A)	A and R  ae true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "43.",
    question:
      "Two elements 'X' and 'Y' have 14 and 8 electrons in M- and N-shells respectively. Then the ratio of their atomic numbers is",

    optionA: "A)	2 : 3",
    optionB: "B) 3 : 4",
    optionC: "C) 3 : 2",
    optionD: "D) 1 : 2",
  },

  {
    id: "44.",
    question: "Which of the following is not a mixture?",

    optionA: "A)	Sodium chloride solution",
    optionB: "B) brass",
    optionC: "C) bronze",
    optionD: "D) molten sodium chloride",
  },

  {
    id: "45.",
    question: [
      <div>
        Metals like sodium, potassium, calcium and magnesium are extracted by
        electrolysis of their chlorides in molten state. These metals are not
        extracted by reducing of their oxides with carbon because
      </div>,
      <div>(J) reduction with carbon is very expensive</div>,
      <div>(K) carbon readily makes alloy with these metals</div>,
      <div>(L) carbon has less affinity for oxygen than these metals</div>,
      <div>(M) carbon is weaker reducing agent than these metals</div>,
    ],

    optionA: "A)	J and K",
    optionB: "B) L and M",
    optionC: "C) M and N",
    optionD: "D) N and J",
  },
];
