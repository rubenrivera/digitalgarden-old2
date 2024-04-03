const { OAuth } = require("./auth.js");

const tokenPath = "https://stackoverflow.com/oauth/access_token/json";

async function getToken(code){
    
    let oauth = new OAuth("stackexchange");
    let config = oauth.config;

    const obj = {
        code,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: config.redirect_uri,
        key: config.quotaKey
      };
  
  
    const params = new URLSearchParams();
    Object.keys(obj).forEach( key => params.append(key, obj[key]));
  
    console.log(params); 
    const response = await fetch(tokenPath, {method: 'POST', body: params});
    const data = await response.json();
    const accessToken = data.access_token
    console.log('The resulting token: ', accessToken);
    return accessToken;

}

module.exports = {
    getToken
}