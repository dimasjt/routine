import { TabNavigator } from "react-navigation"

import MainScreen from "./screens/MainScreen"
import ProgressScreen from "./screens/ProgressScreen"
import NewRoutineScreen from "./screens/NewRoutineScreen"

const Routes = TabNavigator({
  Main: {
    screen: MainScreen,
  },
  Progress: {
    screen: ProgressScreen,
  },
  NewRoutine: {
    screen: NewRoutineScreen,
  },
}, {
    tabBarPosition: "bottom",
  })

export default Routes