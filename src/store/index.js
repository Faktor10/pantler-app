import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { reducers } from "../reducers"

const configureStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}

const store = configureStore(/* initialstate object here */)

export default store
