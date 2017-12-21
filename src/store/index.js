import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { autoRehydrate, persistStore } from "redux-persist"

import rootReducers from "../reducers"

let store = compose(
  applyMiddleware(
    thunk,
    logger,
  ),
  // autoRehydrate(),
)(createStore)(rootReducers)

// const store = createStore(rootReducers, middlewares)

// persistStore(store)
export default store