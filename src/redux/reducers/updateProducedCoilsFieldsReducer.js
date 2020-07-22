import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function updateProducedCoilsFieldsReducer(
  state = initialState.updatedProducedCoilsFields,
  action
) {
  switch (action.type) {
   
    case actionTypes.UPDATE_PRODUCED_COIL_FIELDS:
        console.log(action.payload)
      return action.payload
    default:
      return state;
  }
}