import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = [sagaMiddleware];

  let store = createStore(reducers, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(sagas);

  return store;
}
