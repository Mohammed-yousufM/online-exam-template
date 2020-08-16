import React from "react";
import MathEq from "./MathEq";

export const studentsDB = [
  { userID: "chan", passw: "abc1" },
  { userID: "sadi", passw: "xyz1" },
  { userID: "admin", passw: "admin" },
];

export const questionsAll = [
  {
    id: "1.",
    question: (
      <MathEq
        math={String.raw`If $\int \frac{2cosx-sinx+\lambda }{cosx+sinx-2}dx = A ln \left | cosx+sinx-2 \right |+Bx+C$. Then the ordered triplet A, B, &lambda; is`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`$\left ( \frac{1}{2},\frac{3}{2},-1 \right )$`}
      />
    ),

    optionB: (
      <MathEq
        math={String.raw`$\left ( \frac{3}{2},\frac{1}{2},-1 \right )$`}
      />
    ),

    optionC: (
      <MathEq
        math={String.raw`$\left ( \frac{1}{2},-1, \frac{-3}{2} \right )$`}
      />
    ),

    optionD: (
      <MathEq
        math={String.raw`$\left ( \frac{3}{2},-1,\frac{1}{2} \right )$`}
      />
    ),
  },
  {
    id: "2.",
    question: (
      <MathEq
        math={String.raw`If $y^{2}=x^{2}-x+1$ and $I_{n}=\int \frac{x^{n}}{y}dx$ and $AI_{3}+BI_{2}+CI_{1}=x^{2}y$ then the ordered triplet A,B,C is`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`$\left ( \frac{1}{2},\frac{-1}{2},-1 \right )$`}
      />
    ),
    optionB: <MathEq math={String.raw`$\left ( 3,1,0 \right )$`} />,
    optionC: <MathEq math={String.raw`$\left ( 1,-1,2 \right )$`} />,
    optionD: <MathEq math={String.raw`$\left ( 3,\frac{-5}{2},2 \right )$`} />,
  },
  {
    id: "3.",
    question: (
      <MathEq
        math={String.raw`$\int 4cos\left(x+\frac{\pi }{6} \right )cos2x$. $cos \left( cos\left( \frac{5\pi}{6}+x\right )\right ) dx$`}
      />
    ),

    optionA: (
      <MathEq
        math={String.raw`$-\left(x+\frac{sin4x}{4}+\frac{sin2x}{2} \right )+c$`}
      />
    ),
    optionB: (
      <MathEq
        math={String.raw`$-\left(x+\frac{sin4x}{4}+\frac{sin2x}{2} \right )+c$`}
      />
    ),
    optionC: (
      <MathEq
        math={String.raw`$-\left(x-\frac{sin4x}{4}+\frac{sin2x}{2} \right )+c$`}
      />
    ),
    optionD: (
      <MathEq
        math={String.raw`$-\left(x-\frac{sin4x}{4}+\frac{sin2x}{2} \right )+c$`}
      />
    ),
  },
  {
    id: "4.",
    question: (
      <MathEq
        math={String.raw`If $\int \frac{e^{x-1}}{x^{2}-5x+4}\,2x\,dx$ = A F(x-1) + B F(x-4) + C and F(x)=$\int\frac{e^{x}}{x}\,dx$. then A & B ordered set is`}
      />
    ),
    optionA: (
      <MathEq math={String.raw`$\left(\frac{-2}{3},\frac{8}{3}\right)$`} />
    ),
    optionB: (
      <MathEq math={String.raw`$\left(\frac{-2}{3},\frac{8e^{3}}{3}\right)$`} />
    ),
    optionC: (
      <MathEq math={String.raw`$\left(\frac{8}{3},\frac{2}{3}\right)$`} />
    ),
    optionD: (
      <MathEq
        math={String.raw`$\left(\frac{-2}{3},\frac{-8e^{3}}{3}\right)$`}
      />
    ),
  },
  {
    id: "5.",
    question: <MathEq math={String.raw`What is $a^{x}+b^{x}$`} />,
    optionA: "normal",
    optionB: "text",
    optionC: "here",
    optionD: <MathEq math={String.raw`$a^{y}+b^{y}$`} />,
  },
];
