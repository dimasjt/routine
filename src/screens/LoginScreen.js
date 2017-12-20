import React from "react"
import { View, StyleSheet } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"

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

class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Login",
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
          title="Login"
          onPress={() => { }}
          style={styles.marginBottom}
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