import { call, put, takeEvery } from "redux-saga/effects";

import { getUser } from "./api";

import { fetchUserSuccess, fetchUserError } from "./actions";
import { UserActionTypes } from "./types";

function* userFetch() {
  try {
    const { user } = yield call(getUser);
    yield put(fetchUserSuccess({ user }));
  } catch (error) {
    yield put(fetchUserError(error));
  }
}

export function* userWatcher() {
  yield call(userFetch);
}

export function* watchUser() {
  yield takeEvery(UserActionTypes.USER_REQUEST, userFetch);
}
