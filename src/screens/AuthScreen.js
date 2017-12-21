import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import Expo from "expo"

import firebase, { auth } from "../firebase"

class AuthScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Routines",
  }

  componentDidMount() {
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        this.props.navigation.navigate("MainRoute")
      }
    })
  }

  handleLogin = async () => {
    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        "1986406648298391", { permissions: ["public_profile", "email"] },
      )

      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token)

        auth.signInWithCredential(credential)
          .catch(error => console.log(error))
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View>
        <Text>Welcome to Routines</Text>
        <Button
          title="Login with Facebook"
          onPress={this.handleLogin}
        />
      </View>
    )
  }
}

export default AuthScreen