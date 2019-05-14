import { fork } from "redux-saga/effects";

import watchUserAuthentication from "../modules/auth/sagas";
import { userSaga } from "../modules/user/sagas";

export default function* sagas() {
  yield fork(watchUserAuthentication);
  yield userSaga;
}
