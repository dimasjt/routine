import React from "react"
import { Provider } from "react-redux"

import Routes from "./src/Routes"

import store from "./src/store"

console.ignoredYellowBox = ["Setting a timer"]

const App = () => (
  <Provider store={store}>
    <Routes style={{ backgroundColor: "#000000" }} />
  </Provider>
)

export default App