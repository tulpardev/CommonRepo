import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function inputCoilAddReducer(
  state = initialState.addInputCoil,
  action
) {
  switch (action.type) {
   
    case actionTypes.INPUT_COIL_ADD:
      return action.payload
    default:
      return state;
  }
}
