import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducers } from "../reducers";
import { state } from "../tests/data";

const configureStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

const store = configureStore(state /* initialstate object here */);

export default store;
