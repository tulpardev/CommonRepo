import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function inputCoilsForTableReducer(
  state = initialState.inputCoils,
  action
) {
  switch (action.type) {
   
    case actionTypes.INPUT_COIL_LIST:
      return action.payload
    default:
      return state;
  }
}
