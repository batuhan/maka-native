export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

export interface UserState {
  loading?: boolean;
  data: any;
  errors?: string;
}

export enum UserActionTypes {
  USER_REQUEST = "USER_REQUEST",
  USER_SUCCESS = "USER_SUCCESS",
  USER_FAILURE = "USER_FAILURE"
}
