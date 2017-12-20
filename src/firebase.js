import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD3uFdk8GC9P7NUjUI9Hh-EOaktybjUe-8",
  authDomain: "routine-4d9fa.firebaseapp.com",
  databaseURL: "https://routine-4d9fa.firebaseio.com",
  projectId: "routine-4d9fa",
  storageBucket: "routine-4d9fa.appspot.com",
  messagingSenderId: "377339152317"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database().ref()
export default firebase