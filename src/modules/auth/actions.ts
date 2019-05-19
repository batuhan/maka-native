import { action } from "typesafe-actions";

import { AuthActionTypes } from "./types";

export const fetchLoginRequest = (data: any) =>
  action(AuthActionTypes.LOGIN_REQUEST, data);

export const fetchLoginSuccess = (data: any) => {
  return action(AuthActionTypes.LOGIN_SUCCESS, data);
};
export const fetchLoginError = (message: string) =>
  action(AuthActionTypes.LOGIN_FAILURE, message);

export const fetchRegisterRequest = (data: any) =>
  action(AuthActionTypes.REGISTER_REQUEST, data);

export const fetchRegisterSuccess = (data: any) => {
  return action(AuthActionTypes.REGISTER_SUCCESS, data);
};
export const fetchRegisterError = (message: string) =>
  action(AuthActionTypes.REGISTER_FAILURE, message);

export const fetchAuthRequest = () => action(AuthActionTypes.AUTH_REQUEST);

export const fetchAuthSuccess = (authStatus: boolean) => {
  return action(AuthActionTypes.AUTH_SUCCESS, authStatus);
};
export const fetchAuthError = (message: string) =>
  action(AuthActionTypes.AUTH_FAILURE, message);

export const logout = () => action(AuthActionTypes.LOGOUT);
