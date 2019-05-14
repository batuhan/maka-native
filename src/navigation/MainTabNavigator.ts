import React from "react";

import ProfileScreen from "../screens/Auth";
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

export const ProfileStack = createStackNavigator({
  Login: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile"
    }
  }
});

export default createBottomTabNavigator(
  {
    HomeStack,
    ProfileStack
  },
  {
    swipeEnabled: false,
    animationEnabled: false
  }
);
