import {
  ADD_ROUTINE,
  GET_ROUTINES,
} from "../constants"

const initialState = {
  data: [],
  isPending: false,
  isRejected: false,
  isFetched: false,
}

function routines(state = initialState, action) {
  switch (action.type) {
    case GET_ROUTINES:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }
    default:
      return state
  }
}

export default routines