var axios = require("axios");
const tokenEndpoint = "https://dev-d389nipg.us.auth0.com/auth/token";
const oAuth = (req, res, next)=>{
	var code = req.query.code;
	if(!code){
		res.status(401).send("Missing authorization code");
	}
const params = new URLSearchParams();
params.append("grant_type", "authorization_code");
params.append("client_id", "8nIXwPMytXDFXsK5tpj9BCDqDTgYrERH");
params.append("client_secret", "KuunBaP9pEssxWZr7oRfL-s6EMzb6IkRAVOmKlgPWNe8M0HY5qewXmE_rNg3lW_B");
params.append("code", code);
params.append("redirect_uri", "http://localhost:3000/challenges");

axios.post(tokenEndpoint, params)
.then(response=>{
	req.oauth = response.data;
	next();
	})
	.catch(err =>{
		console.log(err);
		res.status(403).json(`Reason: ${err.message}`);
	})
}
module.export = oAuth;