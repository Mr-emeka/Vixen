import { combineReducers } from "redux";
import { MovieReducer as movies } from "./movie/reducer";

const reducers = combineReducers({
  movies,
});

export default reducers;
