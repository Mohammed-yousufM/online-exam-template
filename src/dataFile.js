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
  { sNO: "21", userID: "jaideep", passw: "1021" }, //21
];

export const questionsAll = [
  {
    id: "1.",
    question:
      "The whole surface area of a cuboid 24cm long, 14cm broad and 7.5cm high, is:",

    optionA: <MathEq math={String.raw`A) 2520 $cm^{2}$`} />,
    optionB: <MathEq math={String.raw`B) 1260 $cm^{2}$`} />,
    optionC: <MathEq math={String.raw`C) 1242 $cm^{2}$`} />,
    optionD: <MathEq math={String.raw`D) 621 $cm^{2}$`} />,
  },

  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`The length, breadth and height of a cuboid are in the ratio 6:5:4 and its whole surface area is $33300cm^{2}$. Its volume is:`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 45000$cm^{3}$`} />,
    optionB: <MathEq math={String.raw`B) 405000$cm^{3}$`} />,
    optionC: <MathEq math={String.raw`C) 455000$cm^{3}$`} />,
    optionD: "D) Data insufficient",
  },

  {
    id: "3.",
    question:
      "The maximum length of a pencil that can be kept in a rectangular pencil box of dimensions 8cm x 6cm x 2cm is:",

    optionA: <MathEq math={String.raw`A) $2\sqrt{13}$cm`} />,
    optionB: <MathEq math={String.raw`B) $2\sqrt{14}$cm`} />,
    optionC: <MathEq math={String.raw`C) $2\sqrt{26}$cm`} />,
    optionD: <MathEq math={String.raw`D) $10\sqrt{2}$cm`} />,
  },

  {
    id: "4.",
    question:
      "How many bricks will be needed to construct a wall 4cm long, 3m high and 13cm broad, if each brick measures 20cm x 12cm x 6.5cm",

    optionA: "A) 500",
    optionB: "B) 1000",
    optionC: "C) 1500",
    optionD: "D) 2000",
  },

  {
    id: "5.",
    question: (
      <MathEq
        math={String.raw`The height of a cylinder is 14cm and its curved surface area is 264 $cm^{2}$. The volume of the cylinder is:`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 308$cm^{3}$`} />,
    optionB: <MathEq math={String.raw`B) 396$cm^{3}$`} />,
    optionC: <MathEq math={String.raw`C) 1232$cm^{3}$`} />,
    optionD: <MathEq math={String.raw`D) 1848$cm^{3}$`} />,
  },

  {
    id: "6.",
    question:
      "A cylinder has a diameter of 14cm and the area of its curved surface is 220 sq. cm. The volume of the cylinder is:",

    optionA: <MathEq math={String.raw`A) 770$cm^{3}$`} />,
    optionB: <MathEq math={String.raw`B) 1000$cm^{3}$`} />,
    optionC: <MathEq math={String.raw`C) 1540$cm^{3}$`} />,
    optionD: <MathEq math={String.raw`D) 6622$cm^{3}$`} />,
  },

  {
    id: "7.",
    question:
      "The ratio of radii of two cylinders is 2:3 and the ratio of their heights is 5:3. The ratio of their volumes will be:",

    optionA: "A) 4 : 9",
    optionB: "B) 9 : 4",
    optionC: "C) 20 : 27",
    optionD: "D) 27 : 20",
  },

  {
    id: "8.",
    question: (
      <MathEq
        math={String.raw`The curved surface area of a circular pillar is $528 m^{2}$ and its volume is $2772 m^{3}$. The height of the pillar is:`}
      />
    ),

    optionA: "A) 10.5 m",
    optionB: "B) 7.5 m",
    optionC: "C) 8 m",
    optionD: "D) 5.25 m",
  },

  {
    id: "9.",
    question:
      "If a CUBOID has length=l, breadth=b and height=h units. Then, Surface area =_________",

    optionA: "A) 2(lb + bh + lh) sq. units",
    optionB: "B) (l x b x h) cubic units",
    optionC: "C) (l + b + h) units",
    optionD: "D) (lb + bh + lh) sq. units",
  },

  {
    id: "10.",
    question:
      "If each edge of a CUBE is of length a. Then, length of Diagonal =__________",

    optionA: <MathEq math={String.raw`A) $\sqrt{3}a$ units`} />,
    optionB: <MathEq math={String.raw`B) $3\sqrt{a}$ units`} />,
    optionC: <MathEq math={String.raw`C) $\sqrt{3a}$ units`} />,
    optionD: <MathEq math={String.raw`D) $3a$ units`} />,
  },

  {
    id: "11.",
    question:
      "For a CYLINDER, radius of base is r, height is h. Then total surface area =_______",

    optionA: <MathEq math={String.raw`A) 2$\pi$r(h+r) sq. units`} />,
    optionB: <MathEq math={String.raw`B) $\pi$r(h+r) sq. units`} />,
    optionC: <MathEq math={String.raw`C) 4$\pi$r(h+r) sq. units`} />,
    optionD: <MathEq math={String.raw`D) 3$\pi$r(h+r) sq. units`} />,
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`The surface area of a cube is $384 cm^{2}$. Find its volume.`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $500 cm^{3}$`} />,
    optionB: <MathEq math={String.raw`B) $512 cm^{3}$`} />,
    optionC: <MathEq math={String.raw`C) $524 cm^{3}$`} />,
    optionD: <MathEq math={String.raw`D) $532 cm^{3}$`} />,
  },

  {
    id: "13.",
    question: (
      <MathEq
        math={String.raw`The capacity of a cylindrical tank is $6160 m^{3}$. If the radius of its base is 14m, find the depth of the tank.`}
      />
    ),

    optionA: "A) 12m",
    optionB: "B) 10m",
    optionC: "C) 14m",
    optionD: "D) 8m",
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
    question: [
      <MathEq
        math={String.raw`A particle starts from rest at t=0 and undergoes an acceleration a in $ms^{-2}$ with time t in seconds which is as shown`}
      />,
      <Image g={i1} />,
      <MathEq
        math={String.raw`Which one of the following plot represents velocity V in $ms^{-1}$ versus time t in seconds`}
      />,
    ],

    optionA: <Image g={i2} t={"A"} />,
    optionB: <Image g={i3} t={"B"} />,
    optionC: <Image g={i4} t={"C"} />,
    optionD: <Image g={i5} t={"D"} />,
  },

  {
    id: "17.",
    question:
      "If a train travelling at 72 kmph is to be brought to rest in a distance of 200 metres, then its retardation should be",

    optionA: <MathEq math={String.raw`A) 20 $ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) 10 $ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) 2 $ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) 1 $ms^{-2}$`} />,
  },

  {
    id: "18.",
    question:
      "If a body starts from rest and travels 120 cm in the 6th second, then what is the acceleration",

    optionA: <MathEq math={String.raw`A) 0.20 $ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) 0.027 $ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) 0.218 $ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) 0.03 $ms^{-2}$`} />,
  },

  {
    id: "19.",
    question:
      "The angular velocity of a wheel is 70 rad/sec. If the radius of the wheel is 0.5 m, then linear velocity of the wheel is",

    optionA: "A) 70 m/s",
    optionB: "B) 35 m/s",
    optionC: "C) 30 m/s",
    optionD: "D) 20 m/s",
  },

  {
    id: "20.",
    question:
      "A particle is moving along a circular path with a uniform speed. How does its angular velocity change when it completes half of the circular path?",

    optionA: "A) No change",
    optionB: "B)	Increases",
    optionC: "C)	Decreases",
    optionD: "D)	Cannot say",
  },

  {
    id: "21.",
    question:
      "An electric fan has blades of length 30 cm as measured from the axis of rotation. If the fan is rotating at 1200 r.p.m.The acceleration of a point on the tip of the blade is about",

    optionA: <MathEq math={String.raw`A) 4740 $ms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) 4732 $ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) 2370 $ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) 5055 $ms^{-2}$`} />,
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`The maximum height attained by a projectile when thrown at an angle $\theta$ with the horizontal is found to be half the horizontal range. Then $\theta$ is equal to`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $tan^{-2} \left( 2\right )$`} />,
    optionB: <MathEq math={String.raw`B) $frac{\pi}{6}$`} />,
    optionC: <MathEq math={String.raw`C) $frac{\pi}{4}$`} />,
    optionD: (
      <MathEq math={String.raw`D) $tan^{-2} \left( \frac{1}{2}\right )$`} />
    ),
  },
  {
    id: "23.",
    question:
      "The magnitude of the centripetal force acting on a body of mass m executing uniform motion in a circle of radius r with speed v is",

    optionA: <MathEq math={String.raw`A) $mvr$`} />,
    optionB: <MathEq math={String.raw`A) $\frac{mv^{2}}{r}$`} />,
    optionC: <MathEq math={String.raw`A) $\frac{v}{r^{2}m}$`} />,
    optionD: <MathEq math={String.raw`A) $\frac{v}{rm}$`} />,
  },
  {
    id: "24.",
    question: (
      <MathEq
        math={String.raw`The acceleration of a vehicle travelling with speed of $400 ms^{-1}$ as it goes round a curve of radius 160 m, is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 1 $kms^{-2}$`} />,
    optionB: <MathEq math={String.raw`B) 100 $ms^{-2}$`} />,
    optionC: <MathEq math={String.raw`C) 10 $ms^{-2}$`} />,
    optionD: <MathEq math={String.raw`D) 1 $ms^{-2}$`} />,
  },
  {
    id: "25.",
    question: (
      <MathEq
        math={String.raw`A 500 kg car takes a round turn of radius 50 m with a velocity of $36 km h^{-1}$. The centripetal force, is`}
      />
    ),

    optionA: "A)	250 N",
    optionB: "B)	750 N",
    optionC: "C)	1000 N",
    optionD: "D)	1200 N",
  },
  {
    id: "26.",
    question:
      "If a cyclist moving with a speed of 4.9 m/s on a level road can take a sharp circular turn of radius 4 m, then coefficient of friction between the cycle tyres and road is",

    optionA: "A)	0.41",
    optionB: "B)	0.51",
    optionC: "C)	0.61",
    optionD: "D)	0.71",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`If $\vec{A}.\vec{B}=AB$, then the angle between $\vec{A}$ and $\vec{B}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 0$^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) 45$^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) 90$^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) 180$^{\circ}$`} />,
  },
  {
    id: "28.",
    question:
      "A wagon weighing 1000 kg is moving with a velocity 50 km/h on smooth horizontal rails. A mass of 250 kg is dropped into it. The velocity with which it moves now is",

    optionA: "a) 2.5 km/hour",
    optionB: "b)	20 km/hour",
    optionC: "c)	40 km/hour",
    optionD: "d)	50 km/hour",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`Force required to move a mass of 1 kg at rest on a horizontal rough plane ($\mu=0.1$ and $g=9.8 ms^{-2}$) is`}
      />
    ),

    optionA: "A) 0.98 N",
    optionB: "B)	0.49 N",
    optionC: "C)	9.8 N",
    optionD: "D)	4.9 N",
  },
  {
    id: "30.",
    question: [
      <div>The acceleration of the system shown in figure is</div>,
      <Image g={i6} />,
    ],

    optionA: <MathEq math={String.raw`A) $\frac{3.5}{17.5}g$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{7.5}{17.5}g$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{14.5}{17.5}g$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{g}{7}$`} />,
  },

  {
    id: "31.",
    question: [
      <div>
        An element X (atomic number 12) reacts with another element Y (atomic
        number 17) to form a compound Z. Which of the following statements are
        true regarding this compound?
      </div>,
      <MathEq
        math={
          (String.raw`I. . Molecular formula of Z is $XY_{2}$`,
          (<div>II. It is soluble in water</div>),
          (<div>III. X and Y are joined by sharing of electrons</div>),
          (<div>IV. It would conduct electricity in the molten state.</div>))
        }
      />,
    ],

    optionA: "A)	(II) and (III)",
    optionB: "B) (I) and (III)",
    optionC: "C) (I), (II) and (IV)",
    optionD: "D) (II) and (IV)",
  },

  {
    id: "32.",
    question: "Which of the following is not a characteristic of a compound? ",

    optionA:
      "A)	Compounds have uniform composition and they are homogeneous in nature",
    optionB:
      "B)	The properties of compounds are different from those of their constituent elements",
    optionC: "C)	Compounds have a fixed composition of their own",
    optionD:
      "D)	Energy is neither absorbed or released during the formation of a compound",
  },

  {
    id: "33.",
    question: [
      <div>
        Many theories and experiments carried out for the study of atom
        eventually led to the development of its structure. Arrange the given
        theories or models of atom proposed by different scientists in
        chronological order
      </div>,
      <div>i) Planetary model</div>,
      <div>ii) watermelon model</div>,
      <div>iii) Bohr’s atomic model</div>,
      <div>iv) Dalton’s atomic theory</div>,
    ],

    optionA: "A)	iii, ii, i, iv",
    optionB: "B) iv, i, ii, iii",
    optionC: "C) ii, i, iv, iii",
    optionD: "D) iv, ii, i, iii",
  },

  {
    id: "34.",
    question: [
      <div>
        Which of the following characteristics is/are erroneous in the following
        table?
      </div>,
      <Image g={i7} />,
    ],

    optionA: "A) 5",
    optionB: "B) 6",
    optionC: "C) 7",
    optionD: "D) 8",
  },

  {
    id: "35.",
    question: [
      <div>m, n, and p respectively in the following equation are :</div>,
      <MathEq
        math={String.raw`$mAg+nH_{2}S+pO_{2} \: \rightarrow \: 2Ag_{2}S+2H_{2}O$`}
      />,
    ],

    optionA: "A)	4, 4, 1",
    optionB: "B) 4, 4, 2",
    optionC: "C) 4, 2, 2 ",
    optionD: "D) none",
  },

  {
    id: "36.",
    question: [
      <div>
        Match the column I with column II and select the correct option for the
        given codes
      </div>,
      <Image g={i8} />,
    ],

    optionA: "A) n",
    optionB: "B) m",
    optionC: "C) p",
    optionD: "D) o",
  },

  {
    id: "37.",
    question: "Which of the following is not a petroleum product?",

    optionA: "A)	Natural gas	",
    optionB: "B) paraffin wax",
    optionC: "C) lubricating oil",
    optionD: "D) charcoal ",
  },

  {
    id: "38.",
    question: "What will be the change when iron gets rusted?",

    optionA: "A)	Its weight is decreased   ",
    optionB: "B) its weight remains same",
    optionC: "C)	No change takes place",
    optionD: "D) none of these",
  },

  {
    id: "39.",
    question: "This fibre is stronger than any other fibre",

    optionA: "A)	rayon",
    optionB: "B) polyester",
    optionC: "C) acrylic",
    optionD: "D) nylon",
  },

  {
    id: "40.",
    question:
      "An atom of an element has fourth shell as its valence shell. The difference between electrons present in L- and M-, K- and N-shells are 1 and 0 respectively. The atomic number of this element would be ",

    optionA: "A)	32",
    optionB: "B) 30",
    optionC: "C) 20",
    optionD: "D) 21 ",
  },

  {
    id: "41.",
    question: "Gold and platinum are called ____________ metals ",

    optionA: "A)	inert  ",
    optionB: "B) rare",
    optionC: "C) noble",
    optionD: "D) none of these ",
  },

  {
    id: "42.",
    question: [
      <div>Assertion (A): An ion is not electrically neutral</div>,
      <div>
        Reason (R): The number of electrons and protons are not equal in an ion
      </div>,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "43.",
    question: "____________________ is used in matchsticks",

    optionA: "A)	Potassium chloride  ",
    optionB: "B) potassium sulphide",
    optionC: "C) Sodium chloride",
    optionD: "D)  Antimony sulphide",
  },

  {
    id: "44.",
    question:
      "The material which does not allow electric current to pass through it is known as ",

    optionA: "A)	Electric conductor ",
    optionB: "B) semiconductor",
    optionC: "C)	Electric resistance",
    optionD: "D) insulator",
  },

  {
    id: "45.",
    question: [
      <div>
        15. Arrange the following statements in a sequence which involves the
        calculation of the atomic number and mass number for an atom of an
        element with 15 electrons and 16 neutrons.
      </div>,
      <div>i) A = number of protons + number of neutrons = 15 + 16 = 31</div>,
      <div>
        ii) Number of protons and number of electrons are equal in a neutral
        atom. Hence, the atomic number is equal to 15.
      </div>,
      <div>
        iii) Mass number is equal to the total number of protons and neutrons
      </div>,
      <div>iv) Atomic number is 15 and mass number is 31.</div>,
    ],

    optionA: "A)	ii, iv, iii, i",
    optionB: "B) ii, iii, i, iv",
    optionC: "C) iii, ii, i, iv",
    optionD: "D) iii, ii, iv, i ",
  },
];
