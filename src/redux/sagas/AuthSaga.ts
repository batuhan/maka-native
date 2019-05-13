import "regenerator-runtime/runtime";
import { call, put } from "redux-saga/effects";

import { login, register } from "../actions";

import { loginSuccess, registerSuccess } from "../reducers/AuthReducer";

function* loginSaga(email: string, password: string) {
  const { profile, idToken } = yield call(login, email, password);

  yield put(loginSuccess(profile, idToken));
}

function* registerSaga(email: string, password: string) {
  const { profile, idToken } = yield call(register, email, password);

  yield put(registerSuccess(profile, idToken));
}

export { loginSaga, registerSaga };
