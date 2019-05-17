import { fork } from "redux-saga/effects";

import { watchUserLogin, watchUserRegister } from "../modules/auth/sagas";
import { watchUser } from "../modules/user/sagas";

export default function* sagas() {
  yield fork(watchUserLogin);
  yield fork(watchUserRegister);
  yield fork(watchUser);
}
