import Axios from "axios";
import {
  PEOPLE_LIST_FAIL,
  PEOPLE_LIST_REQUEST,
  PEOPLE_LIST_SUCCESS,
} from "../type";

export const PeopleAction = () => async (dispatch) => {
  dispatch({
    type: PEOPLE_LIST_REQUEST,
  });

  try {
    
    const {data} = await Axios.get("https://swapi.dev/api/people?format=json");
    dispatch({ type: PEOPLE_LIST_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: PEOPLE_LIST_FAIL, payload: error.message });
  }
};
