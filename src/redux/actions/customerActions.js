import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";
import * as alertActions from "./alertActions";
import jwt_decode from "jwt-decode";
import { history } from "../../utils/history";

export function userLoginRequest(user) {
  return { type: actionTypes.LOGIN_REQUEST, payload: user };
}
export function userLoginSuccess(user) {
  return { type: actionTypes.LOGIN_SUCCESS, payload: user };
}
export function userLoginFailure(error) {
  return { type: actionTypes.LOGIN_FAILURE, payload: error };
}

export function userRegisterRequest(user) {
  return { type: actionTypes.REGISTER_REQUEST, payload: user };
}
export function userRegisterSuccess(user) {
  return { type: actionTypes.REGISTER_SUCCESS, payload: user };
}
export function userRegisterFailure(error) {
  return { type: actionTypes.REGISTER_FAILURE, payload: error };
}

export function userListRequest() {
  return { type: actionTypes.GETALL_REQUEST };
}
export function userListSuccess(users) {
  return { type: actionTypes.GETALL_SUCCESS, payload: users };
}
export function userListFailure(error) {
  return { type: actionTypes.GETALL_FAILURE, payload: error };
}

export function currentUserSuccess(currentUser) {
  return { type: actionTypes.CURRENT_USER_SUCCESS, payload: currentUser };
}

export function loginUser(user) {
  return function (dispatch) {
    dispatch(userLoginRequest({ user }));
    return userLoginApi(user)
      .then(
        (result) => {
          if (result) {
            //console.log(result)
            localStorage.setItem("userToken", JSON.stringify(result));
            //const decodedUser = jwt_decode(result.Token);
            //dispatch(currentUserSuccess(decodedUser));
            dispatch(userLoginSuccess(user));
            history.push("/homepage");
          } else {
            console.log("Token is not get");
          }
        },
        (error) => {
          console.log(error)
          dispatch(userLoginFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
      .catch((error) => {
        //throw error;
      });
  };
}

export function registerUser(user) {
  return function (dispatch) {
    dispatch(userRegisterRequest({ user }));
    return registerUserApi(user)
      .then(
        (result) => {
          dispatch(userRegisterSuccess(result));
          history.push("/");
          dispatch(alertActions.success("Kayıt Başarılı"));
        },
        (error) => {
          dispatch(userRegisterFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
      .catch((error) => {
        throw error;
      });
  };
}

export function userList() {
  return function (dispatch) {
    dispatch(userListRequest());
    return userGetApi()
      .then(
        // (result) => dispatch(userListSuccess(result.Users)),
        // (error) => dispatch(userListFailure(error))
        console.log("Diller")
      )
      .catch((error) => {
        throw error;
      });
  };
}

export function logout() {
  localStorage.removeItem("userToken");
  return { type: actionTypes.LOGOUT };
}

export function userGetApi() {
  let endPoint = "api/languages";
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}

export function registerUserApi(user) {
  let endPoint = "store";
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpPost(apiKey,endPoint,user);
}

export function userLoginApi(user) {
  let endPoint = "api/users/login";
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpPost(apiKey,endPoint,user);
}
