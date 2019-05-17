/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Provider } from "react-redux";
import { View, StyleSheet, StatusBar } from "react-native";

import createStore from "../store";

import AppNavigator from "../navigation/AppNavigator";

const store = createStore();

interface Props {}

export default function App({  }: Props) {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
