import React from "react"
import { Text } from "react-native-elements"

import * as colors from "../styles/variables"

const styles = {
  color: colors.white,
}

const CustomText = (props) => {
  const textStyles = Object.assign({}, props.style, styles)
  console.log(textStyles)

  return (
    <Text
      style={textStyles}
      {...props}
    >
      {props.children}
    </Text>
  )
}

export default CustomText