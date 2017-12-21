import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { autoRehydrate, persistStore } from "redux-persist"

import rootReducers from "../reducers"

const middlewares = applyMiddleware(thunk)

let store = createStore(
  rootReducers,
  compose(
    middlewares,
    autoRehydrate(),
  )
)
// const store = createStore(rootReducers, {}, middlewares)

persistStore(store)
export default store