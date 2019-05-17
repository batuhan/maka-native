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

function* registerFetch(data: {
  email: string;
  password: string;
  fullname: string;
}) {
  try {
    const { profile, idToken } = yield call(
      register,
      data.email,
      data.password,
      data.fullname
    );
    yield put(fetchRegisterSuccess({ profile, idToken }));
  } catch (error) {
    yield put(fetchRegisterError(error));
  }
}

export function* loginWatcher({ payload }: any) {
  yield call(loginFetch, payload);
}

export function* registerWatcher({ payload }: any) {
  yield call(registerFetch, payload);
}

export function* watchUserLogin() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST as any, loginWatcher);
}

export function* watchUserRegister() {
  yield takeEvery(AuthActionTypes.REGISTER_REQUEST as any, registerFetch);
}
