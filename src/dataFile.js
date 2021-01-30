import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.jpeg";
import i2 from "./I2.jpeg";
import i3 from "./I3.jpeg";
import i6 from "./I6.bmp";
import i7 from "./I7.bmp";

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
  { sNO: "20", userID: "mani", passw: "1020" },
  { sNO: "21", userID: "jaideep", passw: "1021" },
  { sNO: "22", userID: "abhinay", passw: "1022" }, //22
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`Given $\zeta  =\left \{ x:1\leq x\leq 20, x \in  integer\right \}$, M= {perfect squares, N={2-digit number with sum of digits more than 5} and K = {multiples of 4}, find $M\cap K$}`}
      />
    ),

    optionA: "A) {4, 16}",
    optionB: "B) {4}",
    optionC: "C) {16}",
    optionD: "D) {4,4}",
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`Given $\zeta  =\left \{ x:1\leq x\leq 20, x \in  integer\right \}$, M= {perfect squares, N={2-digit number with sum of digits more than 5} and K = {multiples of 4}, find $M\cap N$}`}
      />
    ),

    optionA: "A) {4, 16}",
    optionB: "B) {4}",
    optionC: "C) {16}",
    optionD: "D) {4,4}",
  },

  {
    id: "3.",

    question: (
      <MathEq
        math={String.raw`If A = {2,4,6,7,9,10}, B={2,5,6,8,12,13,14,16} and C= {8,10,12,14,16} then find n($A \cup B \cup C$)`}
      />
    ),

    optionA: "A) 0",
    optionB: "B) 4",
    optionC: "C) 12",
    optionD: "D) 20",
  },

  {
    id: "4.",
    question: [
      <MathEq
        math={String.raw`In the venn diagram, $\zeta$ is the universal set. List all the elements of $Q^{'}$`}
      />,
      <Image g={i1} />,
    ],

    optionA: "A) {2,3}",
    optionB: "B) {1, 2,3}",
    optionC: "C) {5,6,7}",
    optionD: "D) {2,3,5,6,7}",
  },

  {
    id: "5.",
    question: [
      <MathEq
        math={String.raw`The venn diagram show all the number of elements in sets $\zeta$, F and G.Find n($F^{'} \cap G^{'}$) $Q$`}
      />,
      <Image g={i2} />,
    ],
    optionA: "A) 2",
    optionB: "B) 3",
    optionC: "C) 5",
    optionD: "D) 1",
  },

  {
    id: "6.",
    question:
      "In a group of 20 adults there are 8 females, 9 literate and 6 female literate. Find the number of male illiterates in the group.",

    optionA: "A) 15",
    optionB: "B) 6",
    optionC: "C) 9",
    optionD: "D) 12",
  },

  {
    id: "7.",
    question: [
      <MathEq
        math={String.raw`The number of elements in sets X,Y and Z are as shown in the Venn diagram. Find n($X^{'}$)`}
      />,
      <Image g={i3} />,
    ],
    optionA: "A) 14",
    optionB: "B) 30",
    optionC: "C) 7",
    optionD: "D) 0",
  },

  {
    id: "8.",
    question: [
      <MathEq
        math={String.raw`The number of elements in sets X,Y and Z are as shown in the Venn diagram. Find n($Z^{'}$)`}
      />,
      <Image g={i3} />,
    ],
    optionA: "A) 14",
    optionB: "B) 30",
    optionC: "C) 7",
    optionD: "D) 0",
  },

  {
    id: "9.",
    question:
      "A survey of 30youths shows that 20 like to read and 15 like outdoor games. Find how many of them who like both reading and outdoor ga",

    optionA: "A) 5",
    optionB: "B) 15",
    optionC: "C) 10",
    optionD: "D) 20",
  },

  {
    id: "10.",
    question: (
      <MathEq
        math={String.raw`Let A={x:x $\in$ R; x $\geq$ 3}, B={x:x $\in$ R; x $\leq$ 5} then $A \cap B$ = ____________`}
      />
    ),

    optionA: "A) (3, 5)",
    optionB: "B) [3, 5]",
    optionC: "C) B",
    optionD: "D) (0,5]",
  },

  {
    id: "11.",
    question: "____ set is subset of every set",

    optionA: "A) U",
    optionB: <MathEq math={String.raw`B) $\phi$`} />,
    optionC: "C) finite",
    optionD: "D) infinite set",
  },

  {
    id: "12.",
    question: "Which of the following is subset of A={1,3,5,7,9}",

    optionA: "A) B={1,3}",
    optionB: "B) C={1,3,5,6}",
    optionC: "C) D={1,2,3,5,7}",
    optionD: "D) E={1,2,3}",
  },

  {
    id: "13.",
    question: (
      <MathEq math={String.raw`How many elements has P(A), if A= $\phi $`} />
    ),
    optionA: "A) 1",
    optionB: "B) 2",
    optionC: "C) 3",
    optionD: "D) 0",
  },

  {
    id: "14.",
    question: "The group of beautiful girls is",

    optionA: "A) null set",
    optionB: "B) A finite set",
    optionC: "C) not a set",
    optionD: "D) Infinite set",
  },

  {
    id: "15.",
    question: "Which of the following is finite",

    optionA: "A) A={x:x is set of points on a line}",
    optionB: <MathEq math={String.raw`B) B={x:x $\in$ N and x is prime}`} />,
    optionC: <MathEq math={String.raw`C) C={x:x $\in$ N and x is Odd}`} />,
    optionD: <MathEq math={String.raw`D) D={x:x $\in$ N and (x-1)(x-2)=0}`} />,
  },

  {
    id: "16.",
    question:
      "A body under the action of several forces will have zero acceleration",

    optionA: "A) When the body is very light",
    optionB: "B) When the body is very heavy",
    optionC: "C) When the body is a point body",
    optionD: "D) When the vector sum of all the forces acting on it is zero",
  },

  {
    id: "17.",
    question:
      "Two trains travelling on the same track are approaching each other with equal speeds of 40 m/s. The drivers of the trains begin to decelerate simultaneously when they are just 2.0 km apart. Assuming the decelerations to be uniform and equal, the value of the deceleration to barely avoid collision should be ",

    optionA: <MathEq math={String.raw`A) 11.8 $m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) 11.0 $m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) 2.1 $m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) 0.8 $m/s^{2}$`} />,
  },

  {
    id: "18.",
    question: (
      <MathEq
        math={String.raw`A body moves from rest with a constant acceleration of $5 \: m/s^{2}$ . Its instantaneous speed (in m/s) at the end of 10 sec  is `}
      />
    ),
    optionA: "A)	50",
    optionB: "B)	5",
    optionC: "C)	2",
    optionD: "D)	0.5",
  },

  {
    id: "19.",
    question:
      "A body is revolving with a constant speed along a circle. If its direction of motion is reversed but the speed remains the same, then which of the following statement is true",

    optionA: "A)	The centripetal force will not suffer any change in magnitude",
    optionB: "B)	The centripetal force will have its direction reversed",
    optionC: "C)	The centripetal force would point away from centre.",
    optionD: "D)	The centripetal force would be doubled",
  },

  {
    id: "20.",
    question: "When a body moves with a constant speed along a circle",

    optionA: "A)	No work is done on it",
    optionB: "B)	No acceleration is produced in the body",
    optionC: "C)	No force acts on the body",
    optionD: "D)	Its velocity remains constant",
  },

  {
    id: "21.",
    question:
      "A body of mass   moves in a circular path with uniform angular velocity. The motion of the body has constant",

    optionA: "A) Acceleration",
    optionB: "B) Velocity",
    optionC: "C) Momentum",
    optionD: "D) Kinetic energy",
  },
  {
    id: "22.",
    question:
      "At the top of the trajectory of a projectile, the directions of its velocity and acceleration are",

    optionA: "A)	Perpendicular to each other",
    optionB: "B)	Parallel to each other",
    optionC: "C)	Inclined to each other at an angle of 45deg",
    optionD: "D)	Antiparallel to each other",
  },
  {
    id: "23.",
    question: (
      <MathEq
        math={String.raw`An object is thrown along a direction inclined at an angle of $45 ^{\circ}$ with the horizontal direction. The horizontal range of the particle is equal to `}
      />
    ),

    optionA: "A)	Vertical height",
    optionB: "B)	Twice the vertical height",
    optionC: "C)	Thrice the vertical height",
    optionD: "D) Four times the vertical height",
  },
  {
    id: "24.",
    question:
      "The average force necessary to stop a bullet of mass 20 g moving with a speed of 250 m/s, as it penetrates into the wood for a distance of 12 cm is",

    optionA: <MathEq math={String.raw`A) $2.2 \times 10^{3}$ N`} />,
    optionB: <MathEq math={String.raw`B) $3.2 \times 10^{3}$ N`} />,
    optionC: <MathEq math={String.raw`C) $4.2 \times 10^{3}$ N`} />,
    optionD: <MathEq math={String.raw`D) $5.2 \times 10^{3}$ N`} />,
  },
  {
    id: "25.",
    question:
      "The average resisting force that must act on a 5 kg mass to reduce its speed from 65 cm/s to 15 cm/s in 0.2s is",

    optionA: "A)	12.5 N",
    optionB: "B)	25 N",
    optionC: "C)	50 N",
    optionD: "D)	100 N",
  },
  {
    id: "26.",
    question:
      "A mass is hanging on a spring balance which is kept in a lift.  The lift ascends. The spring balance will show in its reading",

    optionA: "A)	Increase",
    optionB: "B)	Decrease",
    optionC: "C)	No change",
    optionD: "D)	Change depending upon velocity",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`A force $\vec{F}=5\hat{i}+6\hat{j}-4\hat{k}$ acting on a body, produces a displacement of $\vec{s}=6\vec{i}+5\vec{k}$ Work done by the force is`}
      />
    ),

    optionA: "A) 18 units",
    optionB: "B) 15 units",
    optionC: "C) 12 units",
    optionD: "D) 10 units",
  },
  {
    id: "28.",
    question:
      "A force of 5 N acts on a 15 kg body initially at rest. The work done by the force during the first second of motion of the body is",

    optionA: "A) 5 J",
    optionB: "B) 5/6 J",
    optionC: "C) 6 J",
    optionD: "D) 75 J",
  },
  {
    id: "29.",
    question:
      "What average horsepower is developed by an 80 kg man while climbing in 10 s  a flight of stairs that rises 6 m vertically",

    optionA: "A) 0.63 HP",
    optionB: "B) 1.26 HP",
    optionC: "C) 1.8 HP",
    optionD: "D) 2.1 HP",
  },
  {
    id: "30.",
    question:
      "A car of mass 1000 kg accelerates uniformly from rest to a velocity of 54 km/hour in 5s. The average power of the engine during this period in watts is (neglect friction)",

    optionA: "A) 2000 W",
    optionB: "B) 22500 W",
    optionC: "C) 5000 W",
    optionD: "D) 2250 W",
  },

  {
    id: "31.",
    question: [
      "Which of the following are correct about a chemical equation ?",
      <div>(A) it tells about feasibility of that reaction</div>,
      <div>(B) it does not indicate the rate of a reaction</div>,
      <div>
        (C) it tells the ratio of the masses of the reactants and products
      </div>,
      <div>
        (D) it tells about whether or not heat will be liberated or absorbed
      </div>,
      <div>(E) it saves time and space in writing</div>,
    ],

    optionA: "A) A, B and C ",
    optionB: "B) B, C and D",
    optionC: "C) B, C and E ",
    optionD: "D) all of the above",
  },

  {
    id: "32.",
    question:
      "The diameter of zinc atom is 2.6 Ao. the number of atoms present in a length of 1.6 cm if the zinc atoms are arranged side by side lengthwise would be ",

    optionA: <MathEq math={String.raw`A) $6.023 \times 10^{23}$ `} />,
    optionB: <MathEq math={String.raw`B) $6.153 \times 10^{7}$`} />,
    optionC: <MathEq math={String.raw`C) $1.62 \times 10^{19}$`} />,
    optionD: <MathEq math={String.raw`D) $6.15 \times 10^{19}$`} />,
  },

  {
    id: "33.",
    question: [
      "Which of the following substances is used in the following applications?",
      <div>-It is used as a fire proofing material</div>,
      <div>-For sealing gaps in laboratory apparatus</div>,
      <div>-It is used in making toys</div>,
    ],

    optionA: "A) Bleaching powder",
    optionB: "B) baking soda ",
    optionC: "C) washing soda",
    optionD: "D) plaster of paris ",
  },

  {
    id: "34.",
    question: "Which of the given chemical equations in NOT balanced?",

    optionA: (
      <MathEq
        math={String.raw`A) $3Fe + 4H_{2}O\rightarrow Fe_{3}O_{4}+4H_{2}$`}
      />
    ),
    optionB: <MathEq math={String.raw`B) $KClO_{3}\rightarrow KCl+O_{2}$`} />,
    optionC: <MathEq math={String.raw`C) $CaCO_{3}\rightarrow CaO+CO_{2}$`} />,
    optionD: (
      <MathEq math={String.raw`D) $Mg+2HCl\rightarrow MgCl_{2}+H_{2}$`} />
    ),
  },

  {
    id: "35.",
    question: (
      <MathEq
        math={String.raw`Find the total mass of neutrons (in kg) in 14 mg of $^{14}C$. (Assume that mass of a neutron = $1.675 x 10^{-27}kg$)`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $4.034 \times 10^{-8}$`} />,
    optionB: <MathEq math={String.raw`B) $8.078 \times 10^{-6}$`} />,
    optionC: <MathEq math={String.raw`C) $1.25 \times 10^{-9}$`} />,
    optionD: <MathEq math={String.raw`D) $5.36 \times 10^{-7}$`} />,
  },

  {
    id: "36.",
    question: "If a substance undergoes a change to form a new substance",

    optionA: "A) The physical properties of the new substance will be the same",
    optionB: "B) The chemical properties of the new substance will be the same",
    optionC:
      "C) Both physical properties and chemical properties of the new substance will be the same",
    optionD:
      "D) Both physical properties and chemical properties of the new substance will be different",
  },

  {
    id: "37.",
    question: [
      "Match the column I with column II and select the correct option for the given codes ",
      <Image g={i6} />,
      <Image g={i7} />,
    ],

    optionA: "A) a",
    optionB: "B) b",
    optionC: "C) c",
    optionD: "D) d",
  },

  {
    id: "38.",
    question: [
      "Which of the following statements is/are true based on the given reactions?",
      <MathEq math={String.raw`$ZnO+C\rightarrow Zn+CO$`} />,
      <MathEq math={String.raw`$2Fe_{2}O_{3}+3C\rightarrow 4Fe+3CO_{2}$`} />,
    ],

    optionA: "A) Carbon is reduced",
    optionB: "B) metal oxide is oxidised",
    optionC: "C) Metal oxide is reduced",
    optionD: "D) both b & c",
  },

  {
    id: "39.",
    question: "Fuels must not ",

    optionA: "A)	burn in a controllable way	",
    optionB: "B) have high calorific value",
    optionC: "C) have low ignition temperature",
    optionD: "D) pollute",
  },

  {
    id: "40.",
    question:
      "If an agarbatti is lighted in one corner of a room, the smell can be felt after sometime in another corner of the room. This shows that",

    optionA: "A) The perfume is strong",
    optionB: "B) The room has a fan which circulates the perfume",
    optionC: "C) Particles of matter are constantly moving",
    optionD: "D) None of these",
  },

  {
    id: "41.",
    question:
      "The inter particle distance is _______________ in gases and  _____________ in solids",

    optionA: "a) Maximum, minimum",
    optionB: "b) maximum, maximum",
    optionC: "c) minimum, maximum",
    optionD: "d) minimum. maximum ",
  },

  {
    id: "42.",
    question:
      "Rahul one day thought to clean his messy room. While cleaning he found items like old T-shirts, cable wire, cycle tyres, bottle of shaving foam, table cloth, broken toys, pain killer strips, stop cock of glass bottle and tube of face wash. Which of the following is a synthetic fibre?",

    optionA: "A)	stop cock of glass bottle.",
    optionB: "B)	 broken toys",
    optionC: "C)	pain killer strips	",
    optionD: "D) Table cloth",
  },

  {
    id: "43.",
    question: [
      <div>Assertion (A): steam and ice have same physical properties</div>,
      <div>
        Reason (R): the conversion of steam to ice is a physical and chemical
        change
      </div>,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "44.",
    question:
      "When an atom loses electrons, the species formed is called a (an) __________ and has a _________ charge.",

    optionA: "A)	anion, positive",
    optionB: "B) cation, negative",
    optionC: "C) anion, negative ",
    optionD: "D) cation, positive",
  },

  {
    id: "45.",
    question: [
      "15.	In the given equation what does ‘X’ stand for?",
      <MathEq
        math={String.raw`$2Al +\left ( X\right )H_{2}SO_{4} \: \rightarrow \: Al_{2}\left ( SO_{4}\right )_{3}+3H_{2}$`}
      />,
    ],

    optionA: "A) 2",
    optionB: "B) 3",
    optionC: "C) 1",
    optionD: "D) 5",
  },
];
