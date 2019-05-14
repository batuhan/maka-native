import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import AppNavigator from "../navigation/AppNavigator";

export interface AppProps {}

export interface AppState {}

export default class AppScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <AppNavigator />
      </View>
    );
  }
}

export const mapStateToProps = (state: any) => ({});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
