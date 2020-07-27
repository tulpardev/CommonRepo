import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";

export function getProducedCoilsSuccess(producedCoils) {
  return { type: actionTypes.PRODUCED_COIL_LIST, payload: producedCoils };
}

export function getProducedCoilsFieldsByIdSuccess(id) {
  return { type: actionTypes.PRODUCED_COIL_FIELDS_BY_ID, payload: id };
}

export function updateProducedCoilsFieldsSuccess(fields) {
  return { type: actionTypes.UPDATE_PRODUCED_COIL_FIELDS, payload: fields };
}

export function getProducedCoilsByFilterSuccess(filterData) {
  return { type: actionTypes.GET_PRODUCED_COIL_BY_FILTER, payload: filterData };
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
            dispatch(getProducedCoilsFieldsByIdSuccess(result));
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

export function updateProducedCoilsFields(id, fields) {
  return function (dispatch) {
    return updateProducedCoilsFieldsApi(id, fields)
      .then(
        (result) => {
          if (result) {
            dispatch(updateProducedCoilsFieldsSuccess(result));
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

export function getProducedCoilsByFilter(filterData) {
  return function (dispatch) {
    return getProducedCoilsByFilterApi(filterData)
      .then(
        (result) => {
          if (result) {
            dispatch(getProducedCoilsByFilterSuccess(result));
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
  console.log(size, count);
  let endPoint = `api/MSG_PROD_COIL?&size=${size}&count=${count}`;
  console.log(endPoint);
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}

export function getProducedCoilsFieldsByIdApi(id) {
  let endPoint = `api/MSG_PROD_COIL?&Id=${id}`;
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpGet(apiKey, endPoint);
}

export function updateProducedCoilsFieldsApi(id, fields) {
  let endPoint = `api/MSG_PROD_COIL?&Id=${id}`;
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpPut(apiKey, endPoint, fields);
}

export function getProducedCoilsByFilterApi(filterData) {
  let endPoint = "api/users/login";
  let apiKey = localStorage.getItem("userToken");
  return httpHelper.httpPost(apiKey, endPoint, filterData);
}
