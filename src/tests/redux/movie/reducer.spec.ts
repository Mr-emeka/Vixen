import { MovieReducer } from "../../../redux/movie/reducer";
import { FETCH_MOVIES, FETCH_MOVIES_ERROR } from "../../../redux/actions";
import { MovieState } from "../../../types";

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: "",
  movie: {},
  filterBy: "",
  searchTerm: "",
  perPage: 16,
};

describe("movie reducer", () => {
  it(`renders with initial state`, () => {
    const action = { type: "dummy_action" };
    expect(MovieReducer(undefined, action)).toEqual(initialState);
  });
  it("Fetching movie starts correctly", () => {
    const action = { type: FETCH_MOVIES };
    const expectedState = { ...initialState, loading: true, error: "" };
    expect(MovieReducer(undefined, action)).toEqual(expectedState);
  });
  it("Fetching movie failed", () => {
    const action = { type: FETCH_MOVIES_ERROR, payload: "error" };
    const expectedState = { ...initialState, loading: false, error: "error" };
    expect(MovieReducer(undefined, action)).toEqual(expectedState);
  });
  it("Fetch a particular Movie by id", () => {});
});
