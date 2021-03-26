import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducers from "./rootReducer";

const store: Store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
