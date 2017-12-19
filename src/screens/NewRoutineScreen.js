import React from "react"
import { View, StyleSheet, TextInput, Button as Btn } from "react-native"
import { Text, FormInput, FormLabel } from "react-native-elements"
import { Constants } from "expo"

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  formGroup: {
    marginBottom: 10
  },
})

class NewRoutine extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Btn title="Save" onPress={() => { }} />
  })

  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header}>New Routine</Text>

        <View style={styles.formGroup}>
          <FormLabel>Routine name</FormLabel>
          <FormInput />
        </View>
      </View>
    )
  }
}

export default NewRoutine
