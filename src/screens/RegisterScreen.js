import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"

import auth from "../firebase"

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  formGroup: {
    marginBottom: 10
  },
  marginBottom: {
    marginBottom: 10,
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

  render() {
    const { navigation } = this.props
    const { navigate } = navigation

    return (
      <View>
        <View style={styles.formGroup}>
          <FormLabel>Email</FormLabel>
          <FormInput
            ref={(input) => this.refEmail = input}
            onChangeText={(value) => this.setState({ email: value })}
          />
        </View>

        <View style={styles.formGroup}>
          <FormLabel>Password</FormLabel>
          <FormInput
            ref={(input) => this.refPassword = input}
            onChangeText={(value) => this.setState({ password: value })}
          />
        </View>

        <Button
          title="Register"
          onPress={() => { }}
          style={styles.marginBottom}
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