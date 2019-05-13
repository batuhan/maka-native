import React from "react";

import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

export const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home"
    }
  }
});

export const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    }
  }
});

export default createBottomTabNavigator(
  {
    HomeStack,
    LoginStack
  },
  {
    swipeEnabled: false,
    animationEnabled: false
  }
);
