import "regenerator-runtime/runtime";
import { call, put } from "redux-saga/effects";

import { login, register } from "../api";

import { loginSuccess, registerSuccess } from "../reducers/AuthReducer";

function* loginSaga({ payload }: any) {
  try {
    const { profile, idToken } = yield call(
      login,
      payload.email,
      payload.password
    );
    yield put(loginSuccess(profile, idToken));
  } catch (error) {
    console.log(error);
  }
}

function* registerSaga(email: string, password: string) {
  const { profile, idToken } = yield call(register, email, password);

  yield put(registerSuccess(profile, idToken));
}

export { loginSaga, registerSaga };
