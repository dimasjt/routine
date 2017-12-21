import React from "react"
import { View, StyleSheet, Keyboard, AsyncStorage, Alert } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"
import { connect } from "react-redux"

import { auth } from "../firebase"
import { checkLogin, userLogin } from "../actions/users"

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
})

import css from "../styles"

class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Login",
  }

  state = {
    email: "",
    password: "",
  }

  componentWillMount() {
    this.props.dispatch(checkLogin())
      .then(userData => {
        this.props.navigation.navigate("MainRoute")
      })
      .catch(() => { })
  }

  componentWillReceiveProps(props) {
    console.log("receiveProps", props)
  }

  handleLogin = () => {
    this.props.dispatch(userLogin(this.state))
      .then(() => {
        Keyboard.dismiss()
        this.props.navigation.navigate("MainRoute")
      })
      .catch(error => {
        Alert.alert("Login failed", error.message)
      })
  }

  render() {
    const { navigation } = this.props
    const { navigate } = navigation

    return (
      <View>
        <View style={css.formGroup}>
          <FormLabel>Email</FormLabel>
          <FormInput
            ref={(input) => this.refEmail = input}
            onChangeText={(value) => this.setState({ email: value })}
          />
        </View>

        <View style={css.formGroup}>
          <FormLabel>Password</FormLabel>
          <FormInput
            ref={(input) => this.refPassword = input}
            secureTextEntry
            onChangeText={(value) => this.setState({ password: value })}
          />
        </View>

        <Button
          title="Login"
          onPress={this.handleLogin}
          style={css.formGroup}
        />

        <Button
          title="Register"
          onPress={() => { navigate("Register") }}
        />
      </View>
    )
  }
}

export default connect(state => state)(LoginScreen)