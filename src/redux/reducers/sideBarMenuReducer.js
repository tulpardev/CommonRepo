import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function producedCoilsForTableReducer(
  state = initialState.sideBarMenuLink,
  action
) {
  switch (action.type) {
    case actionTypes.SCHEDULES_LIST_MANAGEMENET_LINK:
      return action.payload;
    case actionTypes.INPUT_COIL_MANAGEMENT_LINK:
      return action.payload;
    case actionTypes.PRODUCED_COIL_MANAGEMENT_LINK:
      return action.payload;
    case actionTypes.LINE_STOPPAGES_LINK:
      return action.payload;
    default:
      return state;
  }
}
