import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";

export function getProducedCoilsSuccess(producedCoils) {
  return { type: actionTypes.PRODUCED_COIL_LIST, payload: producedCoils };
}

export function getProducedCoilsFieldsByIdSuccess(id) {
  return { type: actionTypes.PRODUCED_COIL_FIELDS_BY_ID, payload: id };
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


export function getProducedCoilsFieldsById(id) {
  return function (dispatch) {
    return getProducedCoilsFieldsByIdApi(id)
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
  console.log(size,count)
  let endPoint= `api/MSG_PROD_COIL?&size=${size}&count=${count}`
  console.log(endPoint);
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}

export function getProducedCoilsFieldsByIdApi(id) {
  let endPoint = `api/users/MSG_PROD_COIL/prodCoilFieldsById?id=${id}`
  return httpHelper.httpPost(id,endPoint);
}

