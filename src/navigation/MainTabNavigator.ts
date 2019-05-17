import React from "react";

import { Login, Register } from "../screens/Auth";
import Home from "../screens/Home";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: { screen: Home }
});

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
