import React from "react";
import MathEq from "./MathEq";
import Image from "./Image";
import i1 from "./I1.png";
import i2 from "./I2.png";
import i3 from "./I3.png";
import i4 from "./I4.png";
import i5 from "./I5.png";
import i6 from "./I6.bmp";
import i7 from "./I7.bmp";
import i8 from "./I8.bmp";

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
    question:
      "If the total surface area of a cube is 6 sq units, then what is the volume of the cube?",

    optionA: "A) 1 cu unit",
    optionB: "B) 2 cu units",
    optionC: "C) 4 cu units",
    optionD: "D) 6 cu units",
  },

  {
    id: "2.",
    question:
      "The maximum length of a pencil that can be kept in a rectangular box of dimensions 8cm x 6cm x 2cm, is",

    optionA: <MathEq math={String.raw`A) 2$\sqrt{13} cm$`} />,
    optionB: <MathEq math={String.raw`B) 2$\sqrt{14} cm$`} />,
    optionC: <MathEq math={String.raw`C) 2$\sqrt{26} cm$`} />,
    optionD: <MathEq math={String.raw`D) 10$\sqrt{2} cm$`} />,
  },

  {
    id: "3.",

    question: (
      <MathEq
        math={String.raw`A cube has each edge 2cm and a cuboid is 1cm long, 2cm wide and 3cm high. The paint in a certain container is sufficient to paint an area equal to $54 cm^{2}$. Which one of the following is correct? `}
      />
    ),

    optionA: "A) Both cube and cuboid can be painted",
    optionB: "B) Only cube can be painted",
    optionC: "C) Only cuboid can be painted",
    optionD: "D) Neither cube nor cuboid can be painted",
  },

  {
    id: "4.",
    question:
      "The capacity of a cuboid tank of water is 50000L. Find the breadth of the tank. Find the breadth of the tank, if its length and depth are 2.5m and 10m, respectively.",

    optionA: "A) 2m",
    optionB: "B) 4m",
    optionC: "C) 9m",
    optionD: "D) 6m",
  },

  {
    id: "5.",
    question:
      "The diameter of the base of a right circular cylinder is 14cm, while its length 40cm. Find the total surface area of the cylinder",

    optionA: "A) 2068 sq cm",
    optionB: "B) 1825 sq cm",
    optionC: "C) 1925 sq cm",
    optionD: "D) 2160 sq cm",
  },

  {
    id: "6.",
    question:
      "A rod of 2cm diameter and 30cm length is converted into a wire of 3m length of uniform thickness. The diameter of the wire is",

    optionA: <MathEq math={String.raw`A) $2/10cm$`} />,
    optionB: <MathEq math={String.raw`B) $2/\sqrt{10}cm$`} />,
    optionC: <MathEq math={String.raw`C) $1/\sqrt{10}cm$`} />,
    optionD: <MathEq math={String.raw`D) $1/10cm$`} />,
  },

  {
    id: "7.",
    question: (
      <MathEq
        math={String.raw`The curved surface area of a cylinder pillar is 264 sq m and its volume is $924m^{3}$. The ratio of diameter to its height is`}
      />
    ),

    optionA: "A) 7 : 3",
    optionB: "B) 3 : 7",
    optionC: "C) 7 : 6",
    optionD: "D) 6 : 7",
  },

  {
    id: "8.",
    question:
      "The diameter of a roller is 84cm and its length 120cm. It takes 500 complete revolutions to move once over to level a playground. Find the area of the playground (in sq m).",

    optionA: "A) 1632",
    optionB: "B) 1817",
    optionC: "C) 1532",
    optionD: "D) 1584",
  },

  {
    id: "9.",
    question: (
      <MathEq
        math={String.raw`The volume pf a right circular cone is $100 \pi cm ^{3}$ and its height is 12cm. Find its slant height`}
      />
    ),

    optionA: "A) 13cm",
    optionB: "B) 16cm",
    optionC: "C) 9cm",
    optionD: "D) 26cm",
  },

  {
    id: "10.",
    question:
      "The radius of the base of a right circular cone is doubled. To keep the volume fixed, the height of the cone will be",

    optionA: "A) half of the previous height",
    optionB: "B) one-third of the previous height",
    optionC: "C) one-fourth of the previous height",
    optionD: (
      <MathEq
        math={String.raw`D) $\frac{1}{\sqrt{2}}$ times of the previous height`}
      />
    ),
  },

  {
    id: "11.",
    question:
      "If the volumes of two right circular cones are in the ratio 1 : 3 and their diameters are in the ratio 3 : 5, then the ratio of their heights is",

    optionA: "A) 25 : 27",
    optionB: "B) 1 : 5",
    optionC: "C) 3 : 5",
    optionD: "D) 5 : 27",
  },

  {
    id: "12.",
    question: (
      <MathEq
        math={String.raw`The curved surface area and the total surface area of a cylinder are in the ratio 1 : 2. If the total surface area of the right cylinder is $616 cm^{2}$. Then its volume is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) 1632$cm^{3}$`} />,
    optionB: <MathEq math={String.raw`B) 1078$cm^{3}$`} />,
    optionC: <MathEq math={String.raw`C) 1232$cm^{3}$`} />,
    optionD: <MathEq math={String.raw`D) 1848$cm^{3}$`} />,
  },

  {
    id: "13.",
    question:
      "What is the diameter of the largest circle lying on the surface of a sphere of surface area 616 sq cm ?",

    optionA: "A) 14 cm",
    optionB: "B) 10.5 cm",
    optionC: "C) 7 cm",
    optionD: "D) 3.5 cm",
  },

  {
    id: "14.",
    question:
      "A sphere and a hemisphere have the same surface area. The ratio of their volumes is",

    optionA: <MathEq math={String.raw`A) $\frac{\sqrt{3}}{4} \: :1$`} />,
    optionB: <MathEq math={String.raw`B) $\frac{3\sqrt{3}}{4} \: :1$`} />,
    optionC: <MathEq math={String.raw`C) $\frac{\sqrt{3}}{8} \: :1$`} />,
    optionD: <MathEq math={String.raw`D) $\frac{\sqrt{3}}{8} \: :1$`} />,
  },

  {
    id: "15.",
    question:
      "A hemispherical bowl has 3.5cm radius. It is to be painted inside as well as outside. Find the cost of painting it at the rate of rupees 5 per 10 sq cm.",

    optionA: "A) 50",
    optionB: "B) 81",
    optionC: "C) 56",
    optionD: "D) 77",
  },

  {
    id: "16.",
    question:
      "Two balls are dropped from height h and 2h respectively from the earth surface. The ratio of time of these balls to reach the earth is",

    optionA: <MathEq math={String.raw`A) 1 : $\sqrt{2}$`} />,
    optionB: <MathEq math={String.raw`B) $\sqrt{2}$ : 1`} />,
    optionC: "C) 2 : 1",
    optionD: "D) 1 : 4",
  },

  {
    id: "17.",
    question: "Which of the following speed-time graphs exist in the nature?",

    optionA: <Image g={i1} t={"A"} />,
    optionB: <Image g={i2} t={"B"} />,
    optionC: <Image g={i3} t={"C"} />,
    optionD: "D) All of the above",
  },

  {
    id: "18.",
    question:
      "A particle travels 10m in first 5 sec and 10m in next 3 sec. Assuming constant acceleration what is the distance travelled in next 2 sec",

    optionA: "A)	8.3 m",
    optionB: "B)	9.3 m",
    optionC: "C)	10.3 m",
    optionD: "D)	None of above",
  },

  {
    id: "19.",
    question: (
      <MathEq
        math={String.raw`The wheel of toy car rotates about axis. It slows down from 400 rps to 200 rps in 2s. Then its angular retardation in $rads^{-2}$ is`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $200 \pi$`} />,
    optionB: "B) 100",
    optionC: <MathEq math={String.raw`C) $400 \pi$`} />,
    optionD: "D) None of these",
  },

  {
    id: "20.",
    question:
      "The magnitude of resultant of three vectors of magnitude 1, 2 and 3 whose directions are those of the sides of an equilateral triangle taken in order is",

    optionA: "A)	zero",
    optionB: <MathEq math={String.raw`B) $2\sqrt{2}$ unit`} />,
    optionC: <MathEq math={String.raw`C) $4\sqrt{3}$ unit`} />,
    optionD: <MathEq math={String.raw`D) $\sqrt{3}$ unit`} />,
  },

  {
    id: "21.",
    question: (
      <MathEq
        math={String.raw`The horizontal range of a projectile is $4\sqrt{3}$ times its maximum height. Its angle of projection will be`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $45^{\circ}$`} />,
    optionB: <MathEq math={String.raw`B) $60^{\circ}$`} />,
    optionC: <MathEq math={String.raw`C) $90^{\circ}$`} />,
    optionD: <MathEq math={String.raw`D) $30^{\circ}$`} />,
  },
  {
    id: "22.",
    question: (
      <MathEq
        math={String.raw`A car of mass 2000 kg is moving with a speed of $10 ms^{-1}$  on a circular path of radius 20 m on a level road. What must be the frictional force between the car and the road so that the car does not slip?`}
      />
    ),

    optionA: <MathEq math={String.raw`A) $10^{4}$N`} />,
    optionB: <MathEq math={String.raw`B) $10^{3}$N`} />,
    optionC: <MathEq math={String.raw`C) $10^{5}$N`} />,
    optionD: <MathEq math={String.raw`D) $10^{2}$N`} />,
  },
  {
    id: "23.",
    question:
      "A car of mass 800 kg moves on a circular track of radius 40 m. If the coefficient of friction is 0.5, then maximum velocity with which the car can move is",

    optionA: "A)	7 m/s",
    optionB: "B)	14 m/s",
    optionC: "C)	8 m/s",
    optionD: "D)	12 m/s",
  },
  {
    id: "24.",
    question:
      "Which of the following statements is false for a particle moving in a circle with a constant angular speed?",

    optionA: "A)	The velocity vector is tangent to the circle",
    optionB: "B)	The acceleration vector is tangent to the circle",
    optionC: "C)	The acceleration vector point  to the center of the circle",
    optionD:
      "D)	The velocity and acceleration vectors are perpendicular to each other",
  },
  {
    id: "25.",
    question:
      "A cricket ball of mass 0.25 kg with speed 10 m/s collides with a bat and returns with same speed with in 0.01 s. The force acted on bat is",

    optionA: "A)	25 N",
    optionB: "B)	50 N",
    optionC: "C)	250 N",
    optionD: "D)	500 N",
  },
  {
    id: "26.",
    question: (
      <MathEq
        math={String.raw`A block moving on a surface with velocity 20 ms$^{-1}$ comes to rest because of surface friction over a distance of 40 m. taking g=(10 ms$^{-2}$), the coefficient of dynamic friction is `}
      />
    ),

    optionA: "A)	0.5",
    optionB: "B)	0.3",
    optionC: "C)	0.2",
    optionD: "D)	0.1",
  },
  {
    id: "27.",
    question: (
      <MathEq
        math={String.raw`Two masses $m_{1}=5 kg$ and $m_{2}=4.8 kg$ tied to a string are hanging over a light frictionless pulley. What is the acceleration of the masses when they are free to move (g=9.8 ms$^{-2}$)`}
      />
    ),
    image1: <Image g={i4} />,
    optionA: <MathEq math={String.raw`A) $0.2m/s^{2}$`} />,
    optionB: <MathEq math={String.raw`B) $9.8m/s^{2}$`} />,
    optionC: <MathEq math={String.raw`C) $5m/s^{2}$`} />,
    optionD: <MathEq math={String.raw`D) $4.8 m/s^{2}$`} />,
  },
  {
    id: "28.",
    question:
      "A horizontal force of 10 N is necessary to just hold a block stationary against a wall. The coefficient of friction between the block and the wall is 0.2. The weight of the block is",
    image1: <Image g={i5} />,
    optionA: "A) 2 N",
    optionB: "B) 20 N",
    optionC: "C) 50 N",
    optionD: "D) 100 N",
  },
  {
    id: "29.",
    question: (
      <MathEq
        math={String.raw`A body of mass 10 kg slides along a rough horizontal surface. The coefficient of friction is $1/\sqrt{3}$. Taking $g=10 m/s^{2}$, the least force which acts an angle of $30^{\circ}$ to the horizontal is`}
      />
    ),

    optionA: "A) 25 N",
    optionB: "B) 100 N",
    optionC: "C) 50 N",
    optionD: <MathEq math={String.raw`D) $\frac{50}{\sqrt{3}}$ N`} />,
  },
  {
    id: "30.",
    question:
      "The average force necessary to stop a bullet of mass 20 g moving with a speed of 250 m/s, as it penetrates into the wood for a distance of 12 cm is",

    optionA: <MathEq math={String.raw`A) $2.2 \times 10^{3}$ N`} />,
    optionB: <MathEq math={String.raw`B) $3.2 \times 10^{3}$ N`} />,
    optionC: <MathEq math={String.raw`C) $4.2 \times 10^{3}$ N`} />,
    optionD: <MathEq math={String.raw`D) $5.2 \times 10^{3}$ N`} />,
  },

  {
    id: "31.",
    question: [
      <MathEq
        math={String.raw`An element X combines with hydrogen to form a compound $XH_{3}$. The element X is placed on the right side of the periodic table. What is true about the element X?`}
      />,
      <div>(A) Has two valence electrons</div>,
      <div>(B) Is a metal and is solid</div>,
      <div>(C) Is a non-metal and is a gas</div>,
      <div>(D) Has a 5 valence electrons</div>,
      <MathEq
        math={String.raw`(E) $XH_{3}$ reacts with water to form a basic compound`}
      />,
    ],

    optionA: "A) A, B and C",
    optionB: "B) B, C and D",
    optionC: "C) B, D and E ",
    optionD: "D) E, A and B",
  },

  {
    id: "32.",
    question: "Which of the following equation is incorrect?",

    optionA: (
      <MathEq
        math={String.raw`A) $Number of atoms = \frac{mass of substance x number of atoms in the molecule x N_{A}}{molar mass}$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B) $Number of moles=\frac{No.of particles}{Avogadro number}$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C) $\frac{Mass of one atom of hydrogen}{mass of an electron}=1837$`}
      />
    ),
    optionD: "D) Molar mass = mass x number of moles",
  },

  {
    id: "33.",
    question: "Which of the following is not a fossil fuel?",

    optionA: "A)	coal",
    optionB: "B) petroleum",
    optionC: "C) charcoal",
    optionD: "D) Natural gas ",
  },

  {
    id: "34.",
    question: "Which of the following synthetic fibres absorb more water?",

    optionA: "a)	Nylon",
    optionB: "b) acrylic",
    optionC: "c) Rayon",
    optionD: "d) polyester",
  },

  {
    id: "35.",
    question: "Some metals react with acids to evolve ____________ gas.",

    optionA: "A)	oxygen",
    optionB: "B) nitrogen",
    optionC: "C) carbon dioxide",
    optionD: "D) hydrogen",
  },

  {
    id: "36.",
    question: "Which pair of molecules has the same number of electrons?",

    optionA: <MathEq math={String.raw`A) $N_{2}$ and $F_{2}$`} />,
    optionB: <MathEq math={String.raw`A) $Cl_{2}$ and $CO_{2}$`} />,
    optionC: <MathEq math={String.raw`A) $H_{2}O$ and $H_{2}S$`} />,
    optionD: <MathEq math={String.raw`A) $O_{2}$ and $C_{2}H_{4}$`} />,
  },

  {
    id: "37.",
    question: [
      "Match the column I with column II and select the correct option for the given codes",
      <Image g={i6} />,
      <Image g={i7} />,
    ],

    optionA: "A) m",
    optionB: "B) n",
    optionC: "C) o",
    optionD: "D) p",
  },

  {
    id: "38.",
    question:
      "The type of combustion in which material suddenly bursts into flame without the application of any external agent is called",

    optionA: "A)	Rapid combustion",
    optionB: "B) slow combustion",
    optionC: "C)	Spontaneous combustion",
    optionD: "D) explosion",
  },

  {
    id: "39.",
    question:
      "Ashutosh is conducting an experiment in the laboratory involving compound D. one mole of compound D weighs 35 g. in one experiment he consumed 105 g of D while in the other he required only 70 g of compound D. The number of moles of D Ashutosh used would be respectively",

    optionA: "A)	2 & 1",
    optionB: "B) 2 & 3",
    optionC: "C) 3 & 2",
    optionD: "D) 1 & 2",
  },

  {
    id: "40.",
    question: ["Which row is mismatch in the following:", <Image g={i8} />],

    optionA: "A) J",
    optionB: "B) K & N",
    optionC: "C) L & M",
    optionD: "D) M",
  },

  {
    id: "41.",
    question:
      "The non-metal present in garlic, eggs, hair and nails is ____________",

    optionA: "a)	chlorine",
    optionB: "b) iodine",
    optionC: "c) oxygen",
    optionD: "d) sulphur",
  },

  {
    id: "42.",
    question: (
      <MathEq
        math={String.raw`Two bulbs of $B_{1}$ and $B_{2}$ of equal capacity contain 10 g of Oxygen ($O_{2}$) and ozone ($O_{3}$) respectively. Which bulb will have greater number of oxygen atoms and which will have greater number of molecules? `}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`A) $B_{1}$ will have more number of atoms while $B_{2}$ will have less number of molecules`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`B)	$B_{1}$ will have more number of molecules while $B_{2}$ will have less number of atoms`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`C)	Both will contain the same number of atoms but $B_{1}$ contains more number of molecules`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`D)	Both will contain the same number of molecules but $B_{1}$ contains more number of atoms`}
      />
    ),
  },

  {
    id: "43.",
    question: [
      <div>Assertion (A): True solution exhibits Tyndall effect</div>,
      <div>Reason (R): Particles are very large in size</div>,
    ],

    optionA: "A)	A and R  are true",
    optionB: "B) A and R are false",
    optionC: "C) A is true, but R is false",
    optionD: "D) A is false, but R is true",
  },

  {
    id: "44.",
    question: "One of the following is not an electrolyte",

    optionA: "A)	Sulphuric acid  ",
    optionB: "B) Lemon juice",
    optionC: "C) Tamarind juice",
    optionD: "D) Detergent solution",
  },

  {
    id: "45.",
    question:
      "A silicon ship used in an integrated chip has a mass of 5.68 mg. The number of silicon atoms present in this chip is (At. mass of Si is: 28.08)",

    optionA: <MathEq math={String.raw`A) $1.2172 \: \times \: 10^{20}$`} />,
    optionB: <MathEq math={String.raw`A) $12.172 \: \times \: 10^{20}$`} />,
    optionC: <MathEq math={String.raw`A) $3.491 \: \times \: 10^{20}$`} />,
    optionD: <MathEq math={String.raw`A) $1.2172 \: \times \: 10^{20}$`} />,
  },
];
