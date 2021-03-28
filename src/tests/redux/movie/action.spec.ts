import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMoviePending,
  fetchMovieSuccess,
  fetchMovieError,
  searchMovie,
} from "../../../redux/movie/action";

import * as actionTypes from "../../../redux/actions";
import configureStore from "redux-mock-store";
const mockStore = configureStore();
const store = mockStore();

describe("movie action", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it(`fetching movie action start`, () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIES,
      },
    ];

    store.dispatch(fetchMoviesPending());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`fetching movies success action`, () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        payload: [
          {
            id: 1,
            name: "kcee mars movie",
            image: {
              medium: "link to image",
              original: "link to original",
            },
            genres: ["action"],
            premiered: "2019-01-23",
            summary: "loroasjdjadbssda ",
          },
        ],
      },
    ];

    store.dispatch(
      fetchMoviesSuccess([
        {
          id: 1,
          name: "kcee mars movie",
          image: {
            medium: "link to image",
            original: "link to original",
          },
          genres: ["action"],
          premiered: "2019-01-23",
          summary: "loroasjdjadbssda ",
        },
      ])
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
  it("fetching movies error", () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIES_ERROR,
        payload: 'it happened again',
      },
    ];
    store.dispatch(fetchMoviesError("it happened again"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`fetch movie start`, () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIE,
        payload: 1,
      },
    ];
    store.dispatch(fetchMoviePending(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`fetch movie success`, () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIE_SUCCESS,
        payload: {
          id: 1,
          name: "kcee mars movie",
          image: {
            medium: "link to image",
            original: "link to original",
          },
          genres: ["action"],
          premiered: "2019-01-23",
          summary: "loroasjdjadbssda ",
        },
      },
    ];
    store.dispatch(
      fetchMovieSuccess({
        id: 1,
        name: "kcee mars movie",
        image: {
          medium: "link to image",
          original: "link to original",
        },
        genres: ["action"],
        premiered: "2019-01-23",
        summary: "loroasjdjadbssda ",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`fetch movie error`, () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_MOVIE_ERROR,
        payload: 'An error occurred',
      },
    ];
    store.dispatch(fetchMovieError("An error occurred"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("search value", () => {
    const expectedActions = [
      {
        type: actionTypes.SEARCH_MOVIE,
        payload: "movie 1",
      },
    ];
    store.dispatch(searchMovie("movie 1"));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
