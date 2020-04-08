import httpConfig from "./httpConfig";
import { authHeader } from "./authHeader";

const url = (endPoint) => {
  //return `${httpConfig.apiUrl}/${httpConfig.apiVersion}/${endPoint}`;
  return `${httpConfig.apiUrl}/${endPoint}`;
};

export const httpPost = (data, endPoint) => {
  return fetch(url(endPoint), {
    method: "POST",
    //headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const httpGet = (endPoint) => {
  // const myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('Authorization', '');

  return fetch(url(endPoint), {
    method: "GET",
    headers: authHeader(),
    mode: 'no-cors'
    //{
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Authorization': `Bearer ${authHeader()}`
    // }
  })
  
    .then(handleResponse)
    .catch(handleError);
};

// async function handleResponse(response) {
//   console.log(response);
//   if (response.ok) {
//     return response.json();
//   } else {
//     const error = await response.text();
//     //console.log(error);
//     //return response.statusText;
//     //throw new Error(error);
//     return {Users:[{Name:"Süha"},{Password:"Sha"}]}
//   }
// }

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function handleError(error) {
  console.error("Bir hata oluştu!");
  throw error;
}
