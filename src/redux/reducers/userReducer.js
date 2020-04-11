import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.currentUser, action) {
  switch (action.type) {
    case actionTypes.CURRENT_USER_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
