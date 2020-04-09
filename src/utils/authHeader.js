export function authHeader() {
  // return authorization header with jwt token
  //let user = JSON.parse(localStorage.getItem('userToken'));
  //console.log(user)

  let user = localStorage.getItem("userToken");

  if (user) {
    var headers = new Headers();
    //headers.append("Content-Type", "application/json");
    headers.append("Authorization", `${user}`);
    return { headers };
  } else {
    return {};
  }
}
