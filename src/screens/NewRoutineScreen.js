import React from "react"
import { View, StyleSheet, Button as Btn, Picker } from "react-native"
import { Text, FormInput, FormLabel } from "react-native-elements"
import { Ionicons as Icon } from "@expo/vector-icons"
import { connect } from "react-redux"
import DatePicker from "react-native-datepicker"
import PropTypes from "prop-types"

import css from "../styles"
import * as colors from "../styles/variables"

import { addRoutine } from "../actions/routines"

const styles = StyleSheet.create({
  header: {
    padding: 15,
    color: colors.white,
  },
  formGroup: {
    marginBottom: 10
  },
  timepickerWrapper: {
    margin: 15,
  },
  timepicker: {
    width: "100%"
  },
})

class NewRoutine extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerRight: (
        <Btn title="Save" onPress={params.handleSave ? params.handleSave : () => { }} />
      ),
      tabBarIcon: () => (
        <Icon name="ios-list-outline" size={52} />
      ),
      tabBarLabel: "My Routines",
      headerTitle: "New Routine",
      headerStyle: css.header,
    }
  }

  state = {
    title: null,
  }

  handleChange = (key) => {
    return (value) => {
      this.setState({ [key]: value })
    }
  }

  handleSave = () => {
    this.props.dispatch(
      addRoutine(this.state)
    )

    this.refTitle.clearText()
    this.setState({ title: null })
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.handleSave })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.header}>New Routine</Text>

        <View style={styles.formGroup}>
          <FormLabel>Routine name</FormLabel>
          <FormInput
            ref={(input) => this.refTitle = input}
            onChangeText={(value) => this.setState({ title: value })}
          />
        </View>

        <View style={styles.formGroup}>
        </View>

        <View style={[styles.formGroup, styles.timepickerWrapper]}>
          <DatePicker
            style={styles.timepicker}
            mode="time"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              placeholderText: {
                color: colors.white,
              },
              dateText: {
                color: colors.white,
              },
            }}
          />
        </View>
      </View >
    )
  }
}

NewRoutine.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
}

export default connect(state => state)(NewRoutine)
