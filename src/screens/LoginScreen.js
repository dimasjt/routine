import React from "react"
import { View, Keyboard, Alert } from "react-native"
import { FormInput, FormLabel, Button } from "react-native-elements"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { checkLogin, userLogin } from "../actions/users"

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
      .then(() => {
        this.props.navigation.navigate("MainRoute")
      })
      .catch(() => { })
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

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => state)(LoginScreen)