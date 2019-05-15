import "react-native";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;
const origConsole = console.error;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};

//remove react-dom error on test console
global.beforeAll(() => {
  console.error = () => {};
});

global.afterAll(() => {
  console.error = origConsole;
});

copyProps(window, global);

jest.mock("react-native-gesture-handler", () => {});
jest.mock("react-navigation-stack", () => {});

Enzyme.configure({ adapter: new Adapter() });
