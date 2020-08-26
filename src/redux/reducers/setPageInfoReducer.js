import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function producedCoilFiledsByIdReducer(
  state = initialState.pagination,
  action
) {
  switch (action.type) {
   
    case actionTypes.SET_PAGE_INFO:
      return action.payload
    default:
      return state;
  }
}