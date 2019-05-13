/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, StatusBar } from "react-native";

import AppNavigator from "./navigation/AppNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga, store.dispatch);

  return { store };
};

const { store } = configureStore();

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default class App extends Component<Props> {
  state = {
    isLoading: true
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="default" />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
