import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authenticationReducer from "./authenticationReducer";
import registrationReducer from "./registrationReducer";
import alertReducer from "./alertReducer";
import userListReducer from "./userListReducer";
import producedCoilsReducer from "./producedCoilsReducer"
import producedCoilFiledsByIdReducer from "./producedCoilFiledsByIdReducer"
import updateProducedCoilsFieldsReducer from "./updateProducedCoilsFieldsReducer"
import getProducedCoilsByFilterReducer from "./getProducedCoilsByFilterReducer"
import sideBarMenuReducer from "./sideBarMenuReducer"

const rootReducer = combineReducers({
  userReducer: userReducer,
  authenticationReducer: authenticationReducer,
  registrationReducer: registrationReducer,
  userListReducer: userListReducer,
  alertReducer: alertReducer,
  producedCoilsReducer:producedCoilsReducer,
  producedCoilFiledsByIdReducer:producedCoilFiledsByIdReducer,
  updateProducedCoilsFieldsReducer:updateProducedCoilsFieldsReducer,
  getProducedCoilsByFilterReducer:getProducedCoilsByFilterReducer,
  sideBarMenuReducer:sideBarMenuReducer
});
export default rootReducer;
