import {
  ADD_ROUTINE
} from "../constants"

function routines(state = [], action) {
  switch (action.type) {
    case ADD_ROUTINE:
      return state.concat(action.routine)
    default:
      return state
  }
}

export default routines