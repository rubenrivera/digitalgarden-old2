const tokenPath = "https://stackoverflow.com/oauth/access_token/json";

const clientId = process.env.STACKOVERFLOW_OAUTH_CLIENT_ID;
const clientSecret = process.env.STACKOVERFLOW_OAUTH_CLIENT_SECRET;
const clientKey = process.env.STACKOVERFLOW_OAUTH_KEY;

async function getToken(code, redirect_uri){
    const obj = {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirect_uri,
        key: clientKey
      };
  
  
    const params = new URLSearchParams();
    Object.keys(obj).forEach( key => params.append(key, obj[key]));
  
      
    const response = await fetch(tokenPath, {method: 'POST', body: params});
    const data = await response.json();
    const accessToken = data.access_token
    console.log('The resulting token: ', accessToken);
    return accessToken;

}

module.exports = {
    getToken
}