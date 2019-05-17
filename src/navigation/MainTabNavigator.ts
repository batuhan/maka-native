import * as React from "react";

import { Login, Register } from "../screens/Auth";
import Home from "../screens/Home";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: "Login"
      })
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        title: "Register"
      })
    }
  },
  {
    //headerMode: "none"
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: "Home"
      })
    }
  },
  {
    //headerMode: "none"
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator }
  },
  {
    // contentComponent: Home
  }
);
const BottomNavigator = createBottomTabNavigator(
  {
    Home: AppNavigator,
    Profile: AuthNavigator
  },
  {
    initialRouteName: "Home"
  }
);

export default BottomNavigator;
