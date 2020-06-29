import httpConfig from "./httpConfig";
import { authHeader } from "./authHeader";
import { logout } from "../../src/redux/actions/customerActions";

const url = (endPoint) => {
  //return `${httpConfig.apiUrl}/${httpConfig.apiVersion}/${endPoint}`;
  return `${httpConfig.apiUrl}/${endPoint}`;
};

export const httpPost = (data, endPoint) => {
  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: "28FD5FFC-44CB-46E7-93AB-377B1EAE2D90",
    },

    mode: "same-origin",
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    // .catch(handleError);
};

export const httpGet = (apiKey, endPoint) => {
  //console.log(JSON.parse(apiKey))
  return fetch(endPoint, {
    method: "GET",
    headers: { apiKey: `${JSON.parse(apiKey)}` },
    mode: "same-origin",
  })
    .then(handleResponse)
    //.catch(handleError);
};

function handleResponse(response) {
 
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        console.log("Giriş başarısız");
      }
      //const error = (data && data.message) || data.error;
      const error = data
      console.log(error);
      return Promise.reject(error);
    }
    return data;
  });
}

// function handleError(error) {
//   console.error("Method is faild");
//   throw error;
//}
