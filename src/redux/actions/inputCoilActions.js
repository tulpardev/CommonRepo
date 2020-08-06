import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";

export function getInputCoilsSuccess(inputCoils) {
  return { type: actionTypes.INPUT_COIL_LIST, payload: inputCoils };
}

export function addInputCoilSuccess(inputCoil) {
  return { type: actionTypes.INPUT_COIL_ADD, payload: inputCoil };
}

export function getInputCoils(size, count) {
  return function (dispatch) {
    return getInputCoilsApi(size, count)
      .then(
        (result) => {
          if (result) {
            dispatch(getInputCoilsSuccess(result));
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

export function addInputCoil(inputCoil) {
  return function (dispatch) {
    return addInputCoilApi(inputCoil)
      .then(
        (result) => {
          dispatch(addInputCoilSuccess(result));
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

export function getInputCoilsApi(size, count) {
  let endPoint = `api/InputCoil?&size=${size}&count=${count}`;
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}

export function addInputCoilApi(inputCoil) {
  let endPoint = "";
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpPost(apiKey, endPoint, inputCoil);
}
