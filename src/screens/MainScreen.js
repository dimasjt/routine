import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Constants } from "expo"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
})

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    )
  }
}

export default MainScreen