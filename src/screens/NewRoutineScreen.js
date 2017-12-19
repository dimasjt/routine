import React from "react"
import { View, StyleSheet, TextInput } from "react-native"
import { Text, FormInput, FormLabel, Button } from "react-native-elements"
import { Constants } from "expo"

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  header: {
    padding: 15,
  },
  formGroup: {
    marginBottom: 10
  },
})

class NewRoutine extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header}>New Routine</Text>

        <View style={styles.formGroup}>
          <FormLabel>Routine name</FormLabel>
          <FormInput />
        </View>

        <Button title="Save" />
      </View>
    )
  }
}

export default NewRoutine
