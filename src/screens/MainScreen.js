import React from "react"
import { View, StyleSheet } from "react-native"
import { Card, ListItem } from "react-native-elements"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Icon from "../components/Icon"

import css from "../styles"

import { getRoutines } from "../actions/routines"
import { auth } from "../firebase"

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0
  }
})

const LogoutButton = ({ navigation }) => (
  <Icon
    name="ios-log-out"
    style={{ marginLeft: 10, padding: 6 }}
    onPress={() => {
      auth.signOut().then(() => navigation.navigate("Auth"))
    }}
    size={32}
  />
)

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
    tabBarLabel: "My Routines",
    headerStyle: css.header,
  })

  fetchRoutines = () => {
    this.props.dispatch(getRoutines())
  }

  componentDidMount() {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        this.props.dispatch(getRoutines())
      }
    })
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
      </View>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => state)(MainScreen)