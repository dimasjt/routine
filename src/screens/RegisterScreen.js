import React from "react"
import { View, StyleSheet, Alert } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"

import css from "../styles"
import { auth } from "../firebase"

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
})

class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Register"
  }

  state = {
    email: "",
    password: "",
  }

  handleRegister = () => {
    const { email, password } = this.state

    auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        Alert.alert("Register success", "Register successfully check your email address!")

        this.props.navigation.navigate("Main")
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
          title="Register"
          onPress={this.handleRegister}
          style={css.formGroup}
        />
        <Button
          title="Login"
          onPress={() => { navigate("Login") }}
        />
      </View>
    )
  }
}

export default RegisterScreen