export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGOUT = "LOGOUT";

export interface LoginRequest {
  type: "LOGIN_REQUEST";
}

export interface LoginSuccess {
  type: "LOGIN_SUCCESS";
  profile: {};
  idToken: string;
}

export interface LoginFailure {
  type: "LOGIN_FAILURE";
  error: string;
}

export interface RegisterRequest {
  type: "REGISTER_REQUEST";
}

export interface RegisterSuccess {
  type: "REGISTER_SUCCESS";
  profile: {};
  idToken: string;
}

export interface RegisterFailure {
  type: "REGISTER_FAILURE";
  error: string;
}

export interface Logout {
  type: "LOGOUT";
}

type AuthAction =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | RegisterRequest
  | RegisterSuccess
  | RegisterFailure
  | Logout;

export interface AuthState {
  isLoggingIn: boolean;
  idToken?: string;
  profile?: {};
  error?: string;
}

export const initialState: AuthState = {
  isLoggingIn: false
};

export default function reducer(
  state: AuthState = { ...initialState },
  action: AuthAction
): AuthState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        profile: action.profile,
        idToken: action.idToken
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        profile: undefined,
        idToken: undefined,
        error: action.error
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        profile: action.profile,
        idToken: action.idToken
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        profile: undefined,
        idToken: undefined,
        error: action.error
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export const loginRequest = (): LoginRequest => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (profile: {}, idToken: string): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  profile,
  idToken
});

export const loginError = (error: string) => ({
  type: LOGIN_FAILURE,
  error
});

export const registerRequest = (): RegisterRequest => ({
  type: REGISTER_REQUEST
});

export const registerSuccess = (
  profile: {},
  idToken: string
): RegisterSuccess => ({
  type: REGISTER_SUCCESS,
  profile,
  idToken
});

export const registerError = (error: string) => ({
  type: REGISTER_FAILURE,
  error
});
