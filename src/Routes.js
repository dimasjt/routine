import { TabNavigator, StackNavigator } from "react-navigation"

import MainScreen from "./screens/MainScreen"
import ProgressScreen from "./screens/ProgressScreen"
import NewRoutineScreen from "./screens/NewRoutineScreen"

const Routes = TabNavigator({
  Main: {
    screen: StackNavigator({
      Main: {
        screen: MainScreen,
      },
      NewRoutine: {
        screen: NewRoutineScreen
      }
    }),
  },
  Progress: {
    screen: ProgressScreen,
  },
}, {
    tabBarPosition: "bottom",
  })

export default Routes