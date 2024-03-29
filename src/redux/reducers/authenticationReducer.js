import * as actionTypes from "../actions/actionTypes";

let user = JSON.parse(localStorage.getItem("userToken"));
const initialState = user ? { loggedIn: true } : {};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAILURE:
      return {};
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}
