import React from "react";
import { Link } from "react-router-dom";
import { PaginateStyled } from "./styles";

export const Paginate = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <PaginateStyled>
      {alphabet.map((letter, i) => (
        <Link to={`/${letter}`} key={i}>
          {letter}
        </Link>
      ))}
    </PaginateStyled>
  );
};
