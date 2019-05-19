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

import createStore from "./src/store";

import Content from "./src/app/App";

const store = createStore();

interface Props {}

export default function App({  }: Props) {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}
