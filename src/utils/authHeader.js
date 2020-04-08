export function authHeader() {
    // return authorization header with jwt token
    let user = localStorage.getItem('userToken');
    //console.log(user)
    //let user = localStorage.getItem('userToken');   

    if (user) {
        return { 'Authorization': 'Bearer ' + user } ;
    } else {
        return {};
    }
}