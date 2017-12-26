import { combineReducers } from "redux"

import routines from "./routine"

const combinedReducers = combineReducers({
  routines,
})

export default combinedReducers