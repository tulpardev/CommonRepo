import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getProducedCoilsByFilterReducer(
  state = initialState.producedCoilsFilter,
  action
) {
  switch (action.type) {
   
    case actionTypes.GET_PRODUCED_COIL_BY_FILTER:
      return action.payload
    default:
      return state;
  }
}
