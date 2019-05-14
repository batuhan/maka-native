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
import { Provider } from "react-redux";

import createStore from "./store";

import Index from "./screens/";
const store = createStore();

interface Props {}

export default class App extends Component<Props> {
  state = {
    isLoading: true
  };

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
