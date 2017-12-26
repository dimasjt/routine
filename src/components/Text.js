import React from "react"
import { StyleSheet } from "react-native"
import { Text } from "react-native-elements"

import * as colors from "../styles/variables"

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  }
})

const CustomText = (props) => {
  return (
    <Text
      style={[styles.text, props.style]}
      {...props}
    >
      {props.children}
    </Text>
  )
}

export default CustomText