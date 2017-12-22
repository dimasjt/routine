import React from "react"
import { Button } from "react-native-elements"

import * as colors from "../styles/variables"

const styles = {
  backgroundColor: colors.yellow,
  borderRadius: 4,
}

const CustomButton = (props) => {
  const buttonStyle = Object.assign({}, props.styles, styles)

  return (
    <Button
      {...props}
      buttonStyle={buttonStyle}
      color={colors.dark}
    />
  )
}

export default CustomButton