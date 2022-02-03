import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../Redux/action";
import { ListDogsStyled } from "./styles";

export const ListDogs = () => {
  const dispatch = useDispatch();
  const { letter } = useParams();
  const dogs = useSelector((state) => state.dogs);
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const dogsFilter =
    dogs &&
    dogs.filter((dog) => {
      return dog.charAt(0).toLowerCase() === letter.toLowerCase();
    });

  return (
    <ListDogsStyled>
      <h2>LIST DOGS BY LETTER {letter.toUpperCase()}</h2>
      <div className="dogLinks">
        {dogsFilter &&
          dogsFilter.map((dog) => {
            let url = `/dog/${dog}`;
            return (
              <Link to={`${url}`} key={dog}>
                {dog}
              </Link>
            );
          })}
      </div>
    </ListDogsStyled>
  );
};
