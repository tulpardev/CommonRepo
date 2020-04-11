import * as alertTypes from "../actions/alertActionTypes";

export default function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertTypes.SUCCESS:
      return {
        type: "alert-success",
        message: action.payload,
      };
    case alertTypes.ERROR:
      return {
        type: "alert-danger",
        message: action.payload,
      };
    case alertTypes.CLEAR:
      return {};
    default:
      return state;
  }
}
