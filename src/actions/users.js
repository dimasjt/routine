import { AsyncStorage } from "react-native"

import {
  USER_LOGGED,
} from "../constants"

import { auth } from "../firebase"

export const checkLogin = () => dispatch => {
  AsyncStorage.getItem("userData")
    .then(result => {
      if (result) {
        dispatch({
          type: USER_LOGGED,
          payload: JSON.parse(userData)
        })
      }
    })
    .catch(error => console.log(error))
}