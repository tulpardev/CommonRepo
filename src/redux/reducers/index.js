import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authenticationReducer from "./authenticationReducer";
import registrationReducer from "./registrationReducer";
import alertReducer from "./alertReducer";
import userListReducer from "./userListReducer";
import producedCoilsForTableReducer from "./producedCoilsForTableReducer"
import producedCoilFiledsByIdReducer from "./producedCoilFiledsByIdReducer"
import updateProducedCoilsFieldsReducer from "./updateProducedCoilsFieldsReducer"
import getProducedCoilsByFilterReducer from "./getProducedCoilsByFilterReducer"
import sideBarMenuReducer from "./sideBarMenuReducer"
import inputCoilsForTableReducer from "./inputCoilsForTableReducer"
import inputCoilAddReducer from "./inputCoilAddReducer"

const rootReducer = combineReducers({
  userReducer: userReducer,
  authenticationReducer: authenticationReducer,
  registrationReducer: registrationReducer,
  userListReducer: userListReducer,
  alertReducer: alertReducer,
  producedCoilsForTableReducer:producedCoilsForTableReducer,
  producedCoilFiledsByIdReducer:producedCoilFiledsByIdReducer,
  updateProducedCoilsFieldsReducer:updateProducedCoilsFieldsReducer,
  getProducedCoilsByFilterReducer:getProducedCoilsByFilterReducer,
  sideBarMenuReducer:sideBarMenuReducer,
  inputCoilsForTableReducer:inputCoilsForTableReducer,
  inputCoilAddReducer:inputCoilAddReducer
});
export default rootReducer;
