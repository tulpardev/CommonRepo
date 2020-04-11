export function authHeader() {
  let user = JSON.parse(localStorage.getItem("userToken"));

  if (user) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `${user}`);
    return { headers };
  } else {
    return {};
  }
}
