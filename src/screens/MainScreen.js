import React from "react"
import { View, Text, StyleSheet, Button as Btn } from "react-native"
import { Button, Card, ListItem } from "react-native-elements"
import { Constants } from "expo"
import { Ionicons as Icon } from "@expo/vector-icons"

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0
  }
})

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "My Routines",
    headerRight: (
      <Icon
        name="ios-add"
        style={{ marginRight: 15, padding: 6 }}
        onPress={() => navigation.navigate("NewRoutine")}
        size={32}
      />
    ),
    tabBarIcon: () => (
      <Icon name="ios-list-outline" size={52} />
    ),
    tabBarLabel: "My Routines"
  })

  state = {
    routines: ["Eat", "Sleep", "Codes", "Repeat"]
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Card containerStyle={styles.cardContainer}>
          {
            this.state.routines.map((routine, index) => (
              <ListItem
                key={index}
                title={routine}
                hideChevron
                rightTitle={"10:10 AM"}
              />
            ))
          }
        </Card>
      </View>
    )
  }
}

export default MainScreen