import React from "react"
import { View } from "react-native"
import Expo from "expo"

import { Button, Text } from "../components/ui"
import { yellow } from "../styles/variables"

import firebase, { auth } from "../firebase"

class AuthScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Routines",
    headerStyle: {
      backgroundColor: yellow,
    },
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
        <View style={{ margin: 10, marginBottom: 30 }}>
          <Text h2>Welcome to Routines</Text>
          <Text>The secret of your success is found in your daily routine</Text>
        </View>
        <Button
          title="Login with Facebook"
          onPress={this.handleLogin}
          large
        />
      </View>
    )
  }
}

export default AuthScreen