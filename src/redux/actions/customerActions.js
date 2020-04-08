import * as actionTypes from "./actionTypes";
import * as httpHelper from "../../utils/httpHelper";

export function getCustomerSuccess(customer) {
  return { type: actionTypes.GET_CUSTOMER_SUCCESS, payload: customer };
}

export function createCustomerSuccess(customer) {
  return { type: actionTypes.CREATE_CUSTOMER_SUCCESS, payload: customer };
}

export function saveCustomer(customer) {
  return function(dispatch) {
    return saveCustomerApi(customer)
      .then(result => dispatch(createCustomerSuccess(result)))
      .catch(error => {
        throw error;
      });
  };
}

export function getCustomers(){
  return function(dispatch) {
    return getCustomersApi()
      .then(result => dispatch(getCustomerSuccess(result.Users)))
      .catch(error => {
        throw error;
      });
  }
}

export function saveCustomerApi(customer) {
  let endPoint = "store"
  return httpHelper.httpPost(customer,endPoint)
}

export function getCustomersApi() {
  let endPoint = "user/list"
  return httpHelper.httpGet(endPoint)
}
