import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";


export function getInputCoilsSuccess(inputCoils) {
    return { type: actionTypes.INPUT_COIL_LIST, payload: inputCoils };
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

  export function getInputCoilsApi(size, count) {
    console.log(size, count);
    let endPoint = `api/InputCoil?&size=${size}&count=${count}`;
    console.log(endPoint);
    let apiKey = localStorage.getItem("userToken");
    return httpHelper.httpGet(apiKey, endPoint);
  }