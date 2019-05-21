import * as React from "react";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Login, Register } from "../screens/Auth";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: "Home"
    })
  }
});

const AuthStackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      headerTitle: "Profile"
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: "Login",
      header: false
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: "Register",
      header: false
    })
  }
});

const BottomNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Profile: AuthStackNavigator
});

export default BottomNavigator;
