import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function customerListReducer(
  state = initialState.customer,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CUSTOMER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
