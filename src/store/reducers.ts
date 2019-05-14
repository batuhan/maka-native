import { combineReducers } from "redux";

import authReducer from "../modules/auth/reducer";
import userReducer from "../modules/user/reducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer
});

export default rootReducer;
