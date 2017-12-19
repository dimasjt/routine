import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux"

import Routes from "./src/Routes"

import store from "./src/store"

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App