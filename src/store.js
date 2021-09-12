import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { peopleListReducer } from "./reducers/PeopleReducers";



const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {}
//combine reducer
const store = createStore(
  combineReducers({
    peoples: peopleListReducer,
  }),
  initialState,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
