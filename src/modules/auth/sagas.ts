import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchLoginError,
  fetchLoginSuccess,
  fetchRegisterError,
  fetchRegisterSuccess,
  fetchAuthSuccess,
  fetchAuthError
} from "./actions";

import { login, register, logout, getAuthStatus } from "./api";

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

function* authFetch() {
  try {
    const isAuthenticated = yield call(getAuthStatus);
    yield put(fetchAuthSuccess(isAuthenticated));
  } catch (error) {
    yield put(fetchAuthError(error));
  }
}

function* logoutFetch() {
  try {
    yield call(logout);
    return;
  } catch (error) {}
}

export function* loginWatcher({ payload }: any) {
  yield call(loginFetch, payload);
}

export function* registerWatcher({ payload }: any) {
  yield call(registerFetch, payload);
}

export function* authWatcher() {
  yield call(authFetch);
}

export function* logoutWatcher() {
  yield call(logoutFetch);
}

export function* watchUserLogin() {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST as any, loginWatcher);
}

export function* watchUserRegister() {
  yield takeEvery(AuthActionTypes.REGISTER_REQUEST as any, registerFetch);
}

export function* watchUserAuth() {
  yield takeEvery(AuthActionTypes.AUTH_REQUEST as any, authFetch);
}

export function* watchUserLogout() {
  yield takeEvery(AuthActionTypes.LOGOUT as any, logoutWatcher);
}
