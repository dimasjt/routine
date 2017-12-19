import { combineReducers } from "redux"

import routines from "./routine"
import newRoutine from "./newRoutine"
import user from "./user"

const combinedReducers = combineReducers({
  routines,
  newRoutine,
  user,
})

export default combinedReducers