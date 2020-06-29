import * as alertActionTypes from "../actions/alertActionTypes";

export default function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertActionTypes.SUCCESS:
      return {
        type: "alert-success",
        message: action.payload,
      };
    case alertActionTypes.ERROR:
      return {
        type: "alert-danger",
        message: action.payload,
      };
    case alertActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
}
