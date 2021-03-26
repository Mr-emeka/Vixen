import * as actionTypes from "../actions";
import { MovieState, Action } from "../../types";

const initialState: MovieState = {
  movies: [
    {
      id: 1,
      name: "movie 1",
      image: { medium: "lelek" },
      genres: ["action", "thriller"],
      premiered: "2019",
    },
  ],
  partialMovies: [
    {
      id: 1,
      name: "movie 1",
      image: { medium: "lelek" },
      genres: ["action", "thriller"],
      premiered: "2019",
    },
  ],
  loading: false,
  error: "",
  movie: {},
  filterBy: "",
  searchTerm: "",
  perPage: 16,
  pageCount: 1,
  offset: 0,
};

export const MovieReducer = (
  state: MovieState = initialState,
  action: Action
): MovieState => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE:
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case actionTypes.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case actionTypes.SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };
    case actionTypes.SET_PARTIAL_MOVIES:
      return {
        ...state,
        partialMovies: action.payload,
      };
    case actionTypes.FETCH_MOVIE_ERROR:
    case actionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
