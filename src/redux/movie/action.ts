import * as actionTypes from "../actions";
import { baseURL } from "../../helpers";

import { IMovie, DispatchType } from "../../types";

export function fetchMoviesPending() {
  return {
    type: actionTypes.FETCH_MOVIES,
  };
}
export function fetchMoviesSuccess(movies: IMovie[]) {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
}
export function fetchMoviesError(error: string) {
  return {
    type: actionTypes.FETCH_MOVIES_ERROR,
    payload: error,
  };
}

export function fetchMoviePending(id: number) {
  return {
    type: actionTypes.FETCH_MOVIE,
    payload: id,
  };
}

export function fetchMovieSuccess(movie: IMovie) {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
}

export function fetchMovieError(error:string) {
  return {
    type: actionTypes.FETCH_MOVIE_ERROR,
    payload: error,
  };
}

export function searchMovie(searchTerm: string) {
  return {
    type: actionTypes.SEARCH_MOVIE,
    payload: searchTerm,
  };
}


/** Asynchronous request */

export function fetchMovieAsync(id: number) {
  return (dispatch: DispatchType) => {
    dispatch(fetchMoviesPending());
    fetch(`${baseURL}/${id}?embed=cast`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchMovieSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchMovieError(error));
      });
  };
}
export function fetchMoviesAsync() {
  return (dispatch: DispatchType) => {
    dispatch(fetchMoviesPending());
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchMoviesSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}

