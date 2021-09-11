const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')

// Do not try to POST code, if no code is avaiable
if (code !== null){

	// Define post body for request
	var postBody = "grant_type=authorization_code&client_id=" + clientID + "&code=" + code + "&redirect_uri=https://dw0bl2sj3qyxg.cloudfront.net";

	//Define variable for response
	var username

	let xhr = new XMLHttpRequest();
	xhr.open("POST", coginitoURL)
	//Send the proper header information along with the request
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(postBody);
	xhr.onload = function() {
  		var cognitoResponse = xhr.response;
		jsonResponse = JSON.parse(cognitoResponse);
		const decoded = jwt_decode(jsonResponse.id_token);
		username = (decoded["cognito:username"]);
		groups = (decoded["cognito:groups"]);
		sessionStorage.setItem("username", username);
		sessionStorage.setItem("groups", groups);
	};

};
