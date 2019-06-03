import { createStore, combineReducers } from "redux";
import AddReducer from "./reducers/AddReducer.js";
import ListMoviesReducer from "./reducers/ListMoviesReducer.js";
import searchReducer from "./reducers/SearchReducer.js";
import starsReducer from "./reducers/StarsReducer.js";


const store = createStore(
  combineReducers({
    add: AddReducer,
    listMovies: ListMoviesReducer,
    search: searchReducer,
    stars: starsReducer
  })
);
export default store;
