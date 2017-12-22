import { TabNavigator, StackNavigator } from "react-navigation"

import MainScreen from "./screens/MainScreen"
import ProgressScreen from "./screens/ProgressScreen"
import NewRoutineScreen from "./screens/NewRoutineScreen"
import AuthScreen from "./screens/AuthScreen"

import * as colors from "./styles/variables"

const MainRoute = TabNavigator({
  MainRoute: {
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
  Auth: {
    screen: StackNavigator({
      Login: {
        screen: AuthScreen,
      },
    }, {
        cardStyle: {
          backgroundColor: colors.dark,
        }
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
}, {
    initialRouteName: "Auth",
  })

export default Routes