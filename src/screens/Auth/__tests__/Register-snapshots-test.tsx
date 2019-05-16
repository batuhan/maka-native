import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import Register from "../Register";

const initialState = {};
const mockStore: any = configureStore();

describe("Register", () => {
  it("renders correctly", () => {
    const register = jest.fn();
    const instance = renderer.create(
      <Provider store={mockStore(initialState)}>
        <Register register={register} />{" "}
      </Provider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
