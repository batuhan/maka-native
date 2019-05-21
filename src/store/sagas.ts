import { fork } from "redux-saga/effects";

import {
  watchUserLogin,
  watchUserRegister,
  watchUserAuth,
  watchUserLogout
} from "../modules/auth/sagas";
import { watchUser } from "../modules/user/sagas";

export default function* sagas() {
  yield fork(watchUserLogin);
  yield fork(watchUserRegister);
  yield fork(watchUserAuth);
  yield fork(watchUserLogout);
  yield fork(watchUser);
}
