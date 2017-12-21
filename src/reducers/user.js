import {
  USER_LOGGED,
} from "../constants"

function user(state = null, action) {
  switch (action.type) {
    case USER_LOGGED:
      return action.payload
    default:
      return state
  }
}

export default user