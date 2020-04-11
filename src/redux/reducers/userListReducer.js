import * as actionTypes from "../actions/actionTypes";

export default function userListReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GETALL_SUCCESS:
      return {
        items: action.payload,
      };
    case actionTypes.GETALL_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
