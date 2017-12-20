import React from "react"
import { View, Text, StyleSheet, Button as Btn } from "react-native"
import { Button, Card, ListItem } from "react-native-elements"
import { Constants } from "expo"
import { Ionicons as Icon } from "@expo/vector-icons"
import { connect } from "react-redux"

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

  render() {
    const { routines, navigation } = this.props
    const { navigate } = navigation

    return (
      <View>
        <Card containerStyle={styles.cardContainer}>
          {
            routines.data.map((routine, index) => (
              <ListItem
                key={index}
                title={routine.title}
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

export default connect(state => state)(MainScreen)