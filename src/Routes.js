import { TabNavigator, StackNavigator } from "react-navigation"

import MainScreen from "./screens/MainScreen"
import ProgressScreen from "./screens/ProgressScreen"
import NewRoutineScreen from "./screens/NewRoutineScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

const MainRoute = TabNavigator({
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

const Routes = TabNavigator({
  Login: {
    screen: StackNavigator({
      Login: {
        screen: LoginScreen,
      },
      Register: {
        screen: RegisterScreen,
      },
    }),
    navigationOptions: {
      tabBarVisible: false,
    }
  },
  Main: {
    screen: MainRoute,
    navigationOptions: {
      tabBarVisible: false,
    }
  },
})

export default Routes