import { PEOPLE_LIST_FAIL, PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS } from "../type";


export const peopleListReducer = (
  state = { loading: true, peoples: [] },
  action
) => {
  switch (action.type) {
    case PEOPLE_LIST_REQUEST:
      return { loading: true };

    case PEOPLE_LIST_SUCCESS:
      return { loading: false, peoples: action.payload };
    
    case PEOPLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};