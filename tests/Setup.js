import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("NativeModules", () => ({
  UIManager: {
    RCTView: () => {}
  },
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  }
}));

Enzyme.configure({ adapter: new Adapter() });
