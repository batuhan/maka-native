import { Reducer } from "redux";
import { UserState, UserActionTypes } from "./types";

const initialState: UserState = {
  data: undefined,
  errors: undefined,
  loading: false
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionTypes.USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case UserActionTypes.USER_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
