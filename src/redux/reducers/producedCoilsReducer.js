import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function producedCoilsReducer(
  state = initialState.producedCoils,
  action
) {
  switch (action.type) {
   
    case actionTypes.PRODUCED_COIL_LIST:
      return action.payload
    default:
      return state;
  }
}
