import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function producedCoilFiledsByIdReducer(
  state = initialState.producedCoilsFields,
  action
) {
  switch (action.type) {
   
    case actionTypes.PRODUCED_COIL_FIELDS_BY_ID:
        console.log(action.payload)
      return action.payload
    default:
      return state;
  }
}
