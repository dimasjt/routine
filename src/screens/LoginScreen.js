import React from "react"
import { View, StyleSheet, Keyboard } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"

import { auth } from "../firebase"

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

  handleLogin = () => {
    const { email, password } = this.state
    auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then(result => {
      this.props.navigation.navigate("Main")
      Keyboard.dismiss()
    }).catch(error => {
      console.log(error)
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

export default LoginScreen