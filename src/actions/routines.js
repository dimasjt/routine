import {
  ADD_ROUTINE,
} from "../constants"

export function addRoutine(routine) {
  return (dispatch) => {
    dispatch({
      type: ADD_ROUTINE,
      routine,
    })
  }
}