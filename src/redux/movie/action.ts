import * as actionTypes from "../actions";

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
export function fetchMoviesError(error: Error) {
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

export function fetchMovieError(error: Error) {
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

export function setOffset(offset: number) {
  return {
    type: actionTypes.SET_OFFSET,
    payload: offset,
  };
}

export function setPageCount(pageCount: number) {
  return {
    type: actionTypes.SET_PAGE_COUNT,
    payload: pageCount,
  };
}

export function setPartialMovies(movies: IMovie[]) {
  return {
    type: actionTypes.SET_PARTIAL_MOVIES,
    payload: movies,
  };
}
/** Asynchronous request */

export function fetchMovieAsync(id: number) {
  return (dispatch: DispatchType) => {
    dispatch(fetchMoviesPending());
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
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
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchMoviesSuccess(res));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}

export function setOffsetAsync(offset: number) {
  return (dispatch: DispatchType) => {
    dispatch(setOffset(offset));
  };
}

export function setPageCountAsync(pageCount: number) {
  return (dispatch: DispatchType) => {
    dispatch(setPageCount(pageCount));
  };
}
