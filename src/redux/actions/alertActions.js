import * as alertActionTypes from "./alertActionTypes";

export function success(message) {
  return { type: alertActionTypes.SUCCESS, payload: message };
}

export function error(message) {
  return { type: alertActionTypes.ERROR, payload: message };
}

export function clear() {
  return { type: alertActionTypes.CLEAR };
}
