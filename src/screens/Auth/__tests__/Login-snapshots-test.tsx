import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import Login from "../Login";

const initialState = {};
const mockStore: any = configureStore();

describe("Login", () => {
  it("renders correctly", () => {
    const login = jest.fn();
    const instance = renderer.create(
      <Provider store={mockStore(initialState)}>
        <Login login={login} />
      </Provider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
