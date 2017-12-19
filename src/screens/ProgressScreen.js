import React from "react"
import { View, Text } from "react-native"
import { Ionicons as Icon } from "@expo/vector-icons"

class ProgressScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name="ios-done-all" size={52} />
    )
  }

  render() {
    return (
      <View>
        <Text>ProgressScreen</Text>
      </View>
    )
  }
}

export default ProgressScreen