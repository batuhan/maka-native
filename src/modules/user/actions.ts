import { action } from "typesafe-actions";
import { UserActionTypes } from "./types";

export const fetchUserRequest = () => action(UserActionTypes.USER_REQUEST);

export const fetchUserSuccess = (data: any) => {
  return action(UserActionTypes.USER_SUCCESS, data);
};
export const fetchUserError = (message: string) =>
  action(UserActionTypes.USER_FAILURE, message);
