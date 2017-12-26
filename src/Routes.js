import { TabNavigator, StackNavigator } from "react-navigation"

import MainScreen from "./screens/MainScreen"
import ProgressScreen from "./screens/ProgressScreen"
import NewRoutineScreen from "./screens/NewRoutineScreen"
import AuthScreen from "./screens/AuthScreen"

import css from "./styles"
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
    }, {
        cardStyle: css.cardDark,
      }),
  },
  Progress: {
    screen: ProgressScreen,
  },
}, {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: colors.yellow,
      },
      inactiveTintColor: colors.dark,
      activeTintColor: colors.dark,
    },
  })

const Routes = TabNavigator({
  Auth: {
    screen: StackNavigator({
      Login: {
        screen: AuthScreen,
      },
    }, {
        cardStyle: css.cardDark,
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
    swipeEnabled: false,
    animationEnabled: false,
  })

export default Routes