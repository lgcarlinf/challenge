import axios from "axios";
import { GET_DOGS, GET_IMG } from "../const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export function getDogs() {
  return async function (dispatch) {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    dispatch(actionCreator(GET_DOGS, res.data.message));
  };
}

export function getImg(name) {
  return async function (dispatch) {
    const res =
      name.length > 1
        ? await axios.get(
            `https://dog.ceo/api/breed/${name[0]}/${name[1]}/images`
          )
        : await axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
    dispatch(actionCreator(GET_IMG, res.data.message));
  };
}
