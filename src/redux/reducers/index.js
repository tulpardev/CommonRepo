import { combineReducers } from "redux";
import customerListReducer from "./customerListReducer";
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  customerListReducer: customerListReducer,
  userReducer:userReducer
});
export default rootReducer;
