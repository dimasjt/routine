import {
  ADD_ROUTINE,
  GET_ROUTINES,
} from "../constants"

import { db } from "../firebase"

export function addRoutine(routine) {
  return (dispatch) => {
    dispatch({
      type: ADD_ROUTINE,
      routine,
    })
  }
}

export const getRoutines = () => dispatch => {
  db.child("routines").once("value").then(snapshot => {
    dispatch({
      type: GET_ROUTINES,
      payload: snapshot.toJSON(),
    })
  }).catch(error => {
    dispatch({
      type: `${GET_ROUTINES}_REJECTED`,
    })
  })
}