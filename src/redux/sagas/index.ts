import { Dispatch } from "redux";
import { all, call } from "redux-saga/effects";
import { loginSaga } from "./AuthSaga";

export default function* root(dispatch: Dispatch) {
  yield all([call(loginSaga, dispatch)]);
}
