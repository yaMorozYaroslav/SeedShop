import React from "react";

const LoginButton = () => {
	const login = async ()=>{
     const domain = "dev-d389nipg.us.auth0.com";
     const audience = "https://www.challenges-api.com";
     const scope = "read:challenges";
     const clientId = "8nIXwPMytXDFXsK5tpj9BCDqDTgYrERH";
     const responseType = "code";
     const redirectUri = "http://localhost:3000/challenges";

     const response = fetch(
       `https://${domain}/authorize?`+
       `audience=${audience}&`+
       `scope=${scope}&`+
       `response_type=${responseType}&`+
       `client_id=${clientId}&`+
       `redirect_uri=${redirectUri}`, {
       	redirect: "manual"
         }
      );
     window.location.replace(response.url);
	};
return(
	<button className="Login-button" onClick={()=>login()}>
	Log In
	</button>
	);
};
export default LoginButton;