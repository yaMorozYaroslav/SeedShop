import React from 'react'

export const Login =()=> {
	const [error, setError] = React.useState(false)
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')
	return (
  <div className='container'>
	 <form>
	   <input type='username' placeholder='username' value={username}/>
	   <input type='password' placeholder='password' value={password}/>
	   <button disabled='true'>Login</button>
	     <span data-testid='error' style={{visibility: error ? 'visible' : 'hidden'}}>
	       Something went wrong.
	     </span>
	 </form> 
  </div>
	 
	 )
	}
