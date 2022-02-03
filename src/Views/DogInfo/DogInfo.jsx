import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImg } from "../../Redux/action";
import { DogInfoStyled } from "./DogInfoStyled";

export const DogInfo = () => {
  const dispatch = useDispatch();
  const { dog } = useParams();
  const img = useSelector((state) => state.img);

  let compDog = dog.split("-");
  useEffect(() => {
    dispatch(getImg(compDog));
  }, []);

  return (
    <DogInfoStyled>
      <h2>{dog}</h2>
      <img src={img} alt="" />
    </DogInfoStyled>
  );
};
