import React from "react"
import { View, Text, StyleSheet, Button as Btn } from "react-native"
import { Button, Card, ListItem } from "react-native-elements"
import { Constants } from "expo"

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0
  }
})

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Routines",
    headerTitle: "My Routines",
    headerRight: <Btn title="Add" onPress={() => navigation.navigate("NewRoutine")} />
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