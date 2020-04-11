import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authenticationReducer from "./authenticationReducer";
import registrationReducer from "./registrationReducer";
import alertReducer from "./alertReducer";
import userListReducer from "./userListReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  authenticationReducer: authenticationReducer,
  registrationReducer: registrationReducer,
  userListReducer: userListReducer,
  alertReducer: alertReducer,
});
export default rootReducer;
