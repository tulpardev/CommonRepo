import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";
import jwt_decode from 'jwt-decode';


export function currentUserSuccess(currentUser) {
  return { type: actionTypes.CURRENT_USER_SUCCESS, payload: currentUser };
}

export function postUser(user) {
  return function(dispatch) {
    return postUserApi(user)
      .then(result =>{
         if (result.Token) {
          localStorage.setItem('userToken', JSON.stringify(result.Token))
          const decodedUser = jwt_decode(result.Token)
          dispatch(currentUserSuccess(decodedUser))
        }else{console.log("selam")}
      })
      .catch(error => {
        //throw error;
      });
  };
}

export function postUserApi(user) {
  let endPoint = "auth/gettoken";
  return httpHelper.httpPost(user, endPoint);
}