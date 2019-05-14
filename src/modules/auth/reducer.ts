import { Reducer } from "redux";
import { AuthState, AuthActionTypes } from "./types";

const initialState: AuthState = {
  data: undefined,
  errors: undefined,
  loading: false
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }
    case AuthActionTypes.REGISTER_REQUEST: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.REGISTER_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case AuthActionTypes.REGISTER_FAILURE: {
      return { ...state, loading: false, errors: action.payload };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
