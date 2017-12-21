import { AsyncStorage } from "react-native"

import {
  USER_LOGGED,
  USER_LOGOUT,
} from "../constants"

import { auth } from "../firebase"

export const checkLogin = () => dispatch => (
  new Promise((resolve, reject) => {
    AsyncStorage.getItem("userData")
      .then(userData => {
        if (userData) {
          dispatch({
            type: USER_LOGGED,
            payload: JSON.parse(userData)
          })
          resolve(userData)
        } else {
          reject()
        }
      })
      .catch(error => {
        reject(error)
      })
  })
)

export const userLogin = ({ email, password }) => dispatch => (
  new Promise((resolve, reject) => {
    auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then(() => {
      AsyncStorage.setItem("userData", JSON.stringify(auth.currentUser))
        .then(() => resolve(auth.currentUser))
        .catch(error => reject(error))
    }).catch(error => {
      reject(error)
    })
  })
)

export const userLogout = () => dispatch => (
  new Promise((resolve, reject) => {
    AsyncStorage.removeItem("userData")
      .then(() => {
        dispatch({
          type: USER_LOGOUT,
        })
        resolve()
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
)