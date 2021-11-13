var usernameUpdate;
const url = window.location.href;
console.log(url);
// ?product=shirt&color=blue&newuser&size=m
const id_token = url.match(/\#(?:id_token)\=([\S\s]*?)\&/);

var username;

const decoded = jwt_decode(id_token[1]);
username = (decoded["cognito:username"]);
groups = (decoded["cognito:groups"]);
sessionStorage.setItem("username", username);
sessionStorage.setItem("groups", groups);
usernameUpdate = true;
