import httpConfig from "./httpConfig";
import { authHeader } from "./authHeader";
import { logout } from "../../src/redux/actions/customerActions";

const url = (endPoint) => {
  //return `${httpConfig.apiUrl}/${httpConfig.apiVersion}/${endPoint}`;
  return `${httpConfig.apiUrl}/${endPoint}`;
};

export const httpPost = (data, endPoint) => {
  return fetch((endPoint), {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    mode: 'same-origin',
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const httpGet = (endPoint) => {
  return fetch(endPoint, {
    method: "GET",
    headers: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdhbXplIiwiZXhwIjoxNTg2NjEyODM4fQ.eMldfEOBLRstyxRsZl_Z9CtijJV-esAK-vXcC1w27No"},
    mode: "same-origin"
  })

    .then(handleResponse)
    .catch(handleError);
};

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data);
    if (!response.ok) {
      if (response.status === 401) {
          //logout();
      }
      const error = (data && data.message) || data.error;
      return Promise.reject(error);
    }
    return data;
  });
}

function handleError(error) {
  console.error("Method is faild");
  throw error;
}
