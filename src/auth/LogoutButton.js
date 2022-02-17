import React from "react";
const LogoutButton = ()=>{
	const logout = async()=>{
		const domain = "dev-d389nipg.us.auth0.com";
		const clientId = "8nIXwPMytXDFXsK5tpj9BCDqDTgYrERH";
		const returnTo = "http://localhost:3000"

		const response = await fetch(
    `https://${domain}/logout?client_id=${clientId}&&{returnTo}`,
         {redirect: "manual"}
			);
		window.location.replace(response.url)
	};
	return(
		<button className="Login-button" onClick={()=>logout()}>
		Log out
		</button>
		);
     };
     export default LogoutButton;