import {
  ADD_ROUTINE,
  GET_ROUTINES,
} from "../constants"

import { auth, db } from "../firebase"

export const addRoutine = (routine) => dispatch => {
  db.child(`routines/${auth.currentUser.uid}`).push().set(routine)
    .then(snapshot => {
      console.log(snapshot)
    })
    .catch(error => {
      console.log(error)
    })
}

export const getRoutines = () => dispatch => {
  if (!auth.currentUser) return
  db.child(`routines/${auth.currentUser.uid}`).once("value")
    .then(snapshot => {
      dispatch({
        type: GET_ROUTINES,
        payload: snapshot.toJSON(),
      })
    })
    .catch(error => {
      dispatch({
        type: `${GET_ROUTINES}_REJECTED`,
      })
    })
}