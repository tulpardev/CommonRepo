import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";

export function getProducedCoilsSuccess(producedCoils) {
  return { type: actionTypes.PRODUCED_COIL_LIST, payload: producedCoils };
}

export function getProducedCoils(size, count) {
  return function (dispatch) {
    return getProducedCoilsApi(size, count)
      .then(
        (result) => {
          if (result) {
            dispatch(getProducedCoilsSuccess(result));
          } else {
            console.log("Not get");
          }
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        //throw error;
      });
  };
}

export function getProducedCoilsApi(size, count) {
  let endPoint=
    size && count
      ? `api/MSG_PROD_COIL?&size=${size}&count=${count}`
      : "api/MSG_PROD_COIL?&size=100&count=0";

  console.log(endPoint);
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}
