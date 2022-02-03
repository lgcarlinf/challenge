import React from "react";
import { Outlet } from "react-router-dom";
import { Paginate } from "../../Paginate/Paginate";
import { HomeStyled } from "./styles";

export const Home = () => {
  return (
    <HomeStyled>
      <h1>CHALLENGE</h1>
      <Paginate />
      <Outlet />
    </HomeStyled>
  );
};
