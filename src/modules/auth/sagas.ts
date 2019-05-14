import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchLoginError,
  fetchLoginSuccess,
  fetchRegisterError,
  fetchRegisterSuccess
} from "./actions";

import { login, register } from "./api";
import { AuthActionTypes } from "./types";

function* loginFetch(data: { email: string; password: string }) {
  try {
    const { profile, idToken } = yield call(login, data.email, data.password);
    yield put(fetchLoginSuccess({ profile, idToken }));
  } catch (error) {
    yield put(fetchLoginError(error));
  }
}

function* registerFetch(data: { email: string; password: string }) {
  try {
    const { profile, idToken } = yield call(
      register,
      data.email,
      data.password
    );
    yield put(fetchRegisterSuccess({ profile, idToken }));
  } catch (error) {
    yield put(fetchRegisterError(error));
  }
}

export function* loginWatcher({ payload }: any) {
  yield call(loginFetch, payload);
  yield call(registerFetch, payload);
}

export default function* watchUserAuthentication() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, loginWatcher);
  //yield takeEvery(AuthActionTypes.LOGIN_REQUEST, registerFetch);
}
