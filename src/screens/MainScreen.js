import React from "react"
import { View, Text, StyleSheet, Button as Btn } from "react-native"
import { Button } from "react-native-elements"
import { Constants } from "expo"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
})

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Routines",
    headerTitle: "My Routines",
    headerRight: <Btn title="Add" onPress={() => navigation.navigate("NewRoutine")} />
  })

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
        <Button title="New" onPress={() => navigate("NewRoutine")} />
      </View>
    )
  }
}

export default MainScreen