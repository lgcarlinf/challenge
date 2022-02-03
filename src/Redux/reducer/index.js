import { GET_DOGS, GET_IMG } from "../const";

const initialState = {
  dogs: [],
  img: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      let dogs = Object.entries(action.payload);
      let clearDogs = dogs.map((dog) => {
        return dog[1].length === 0
          ? dog[0]
          : dog[1].map((breed) => dog[0] + "-" + breed);
      });

      let allDogs = clearDogs.reduce((acc, curr) => {
        return acc.concat(curr);
      }, []);

      return {
        ...state,
        dogs: allDogs,
      };

    case GET_IMG:
      let img =
        typeof action.payload === "string" ? action.payload : action.payload[0];

      return {
        ...state,
        img,
      };

    default:
      return state;
  }
};
