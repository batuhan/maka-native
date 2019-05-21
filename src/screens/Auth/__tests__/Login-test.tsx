/**
 * @jest-environment jsdom
 */

import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";

import Login from "../Login";

const initialState = {};
const mockStore: any = configureStore();

describe("Login", () => {
  const login = jest.fn();
  const isAuthenticated = false;
  describe("Rendering", () => {
    const mock = (
      <Provider store={mockStore(initialState)}>
        <Login login={login} isAuthenticated={isAuthenticated} />
      </Provider>
    );
    it("should render textinput text and view", () => {
      const wrapper = mount(mock);
      const component = wrapper
        .find("LoginScreen")
        .children()
        .first()
        .html();

      expect(component).toContain("view");
      expect(component).toContain("text");
      expect(component).toContain("textinput");
    });
  });
});
