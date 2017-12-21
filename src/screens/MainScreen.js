import React from "react"
import { View, Text, StyleSheet, Button as Btn } from "react-native"
import { Button, Card, ListItem } from "react-native-elements"
import { Constants } from "expo"
import { Ionicons as Icon } from "@expo/vector-icons"
import { connect } from "react-redux"

import { getRoutines } from "../actions/routines"
import { userLogout } from "../actions/users"

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0
  }
})

const LogoutButton = connect(state => state)(({ dispatch, navigation }) => (
  <Icon
    name="ios-log-out"
    style={{ marginLeft: 10, padding: 6 }}
    onPress={() => {
      dispatch(userLogout())
      navigation.navigate("Login")
    }}
    size={32}
  />
))

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
    headerLeft: (
      <LogoutButton navigation={navigation} />
    ),
    tabBarIcon: () => (
      <Icon name="ios-list-outline" size={52} />
    ),
    tabBarLabel: "My Routines"
  })

  componentWillReceiveProps(props) {
    // if (props.navigation.state.params.currentUser) {
    //   this.fetchRoutines()
    // }
  }

  fetchRoutines = () => {
    this.props.dispatch(getRoutines())
  }

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
        <Button
          title="Fetch data"
          onPress={this.fetchRoutines}
        />
      </View>
    )
  }
}

export default connect(state => state)(MainScreen)