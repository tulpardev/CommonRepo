import * as alertTypes from "./alertActionTypes";

export function success(message) {
  return { type: alertTypes.SUCCESS, payload: message };
}

export function error(message) {
  return { type: alertTypes.ERROR, payload: message };
}

export function clear() {
  return { type: alertTypes.CLEAR };
}
