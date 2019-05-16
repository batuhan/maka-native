/**
 * @jest-environment jsdom
 */

import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";

import Register from "../Register";

const initialState = {};
const mockStore: any = configureStore();

describe("Register", () => {
  const register = jest.fn();

  describe("Rendering", () => {
    const mock = (
      <Provider store={mockStore(initialState)}>
        <Register register={register} />
      </Provider>
    );
    it("should render textinput text and view", () => {
      const wrapper = mount(mock);
      const component = wrapper
        .find("RegisterScreen")
        .children()
        .first()
        .html();

      expect(component).toContain("view");
      expect(component).toContain("text");
      expect(component).toContain("textinput");
    });
  });
});
