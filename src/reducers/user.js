import {
  USER_LOGGED,
  USER_LOGOUT,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case USER_LOGGED:
      return action.payload
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}

export default user