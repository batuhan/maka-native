import * as React from "react";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Login, Register } from "../screens/Auth";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerTitle: "Home"
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        headerTitle: "Profile"
      })
    },

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

const AppNavigator = createDrawerNavigator({
  Home: { screen: HomeStackNavigator }
});
const BottomNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  Profile: AppNavigator
});

export default BottomNavigator;
